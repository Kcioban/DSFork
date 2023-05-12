const express = require('express');
const { BlobServiceClient } = require('@azure/storage-blob');
const multer = require('multer');
const fs = require('fs');

// Configurações do Azure Storage Account
const connectionString = 'DefaultEndpointsProtocol=https;AccountName=arquivosaulas;AccountKey=2OPDXdMO/bNMhYtCIXAz9JiUrHk7kCvyIiNzvLuIOQPsuhi8X1Dck46Yz7CYRS9juE4L6zNP/9F8+ASt2NGGEA==;EndpointSuffix=core.windows.net';
const containerName = 'imgaulas';

// Cria o cliente BlobService
const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

// Configuração do multer para fazer o upload do arquivo
const upload = multer({ dest: 'temp/' });

// Cria uma instância do aplicativo Express
const app = express();

// Rota para lidar com o upload do arquivo
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    // Obtém o arquivo enviado através do multer
    const file = req.file;
    const filePath = file.path;
    const fileName = file.originalname;

    // Obtém uma referência para o container
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // Cria um cliente de bloco para o arquivo
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);

    // Faz o upload do arquivo para o Data Lake Gen2
    await blockBlobClient.uploadFile(filePath);

    console.log(`Arquivo '${fileName}' enviado com sucesso para o Data Lake Gen2.`);

    // Remove o arquivo temporário
    fs.unlinkSync(filePath);

    res.status(200).send('Arquivo enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao fazer o upload do arquivo:', error);
    res.status(500).send('Erro ao fazer o upload do arquivo.');
  }
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});