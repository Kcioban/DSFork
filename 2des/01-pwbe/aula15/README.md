# Lógica de Programação (Sincrona)
O JavaScript é uma linguagem Sincrona isto quer dizer que uma função pode ser executada antes de uma outra ter sido completada.

- Aqui está um exemplo de como utilizar async/await com setTimeout:

```JavaScript
function tempo(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function facaAlgo() {
  console.log('Inicio');
  await tempo(2000); // Aguarda 2000 milissegundos (2 segundos)
  console.log('Fim');
}

facaAlgo();
```
|Contexto|
|-|
|Neste exemplo, temos a função **tempo(ms)** que retorna uma **Promise** que é resolvida após um determinado tempo especificado em milissegundos usando **setTimeout()**.<br>A função **facaAlgo()** é definida com a palavra-chave **async**, o que significa que ela retorna uma Promise. Dentro dela, usamos o await para aguardar a resolução da Promise retornada por delay(2000). Durante esse tempo de espera, a execução do código é pausada.<br>No exemplo, o console exibirá **"Inicio"** imediatamente e, em seguida, aguardará **2 segundos** antes de exibir **"Fim"**. Isso ocorre porque o **await** pausa a execução da função facaAlgo() até que a Promise seja resolvida após o tempo especificado.<br>Por fim, a função facaAlgo() é chamada, iniciando o processo assíncrono.|

```JavaScript
//Exemplo da execução sincronizada JavaScript padrão
function voltarDoBanheiro(aluno){
    setTimeout(() => console.log(`${aluno.nome} voltou do banheiro`), aluno.tempo);
}
var alunos = [
        { nome:'Camacho', tempo:3000 },
        { nome:'Larissa', tempo:2000 },
        { nome:'Karen', tempo:1000 },
    ];
function pedidos(){
    alunos.forEach(aluno =>{
        console.log(`${aluno.nome} pede para ir ao banheiro`);
        voltarDoBanheiro(aluno);
    });
}
pedidos();

//Exemplo com assincronicidade - Fila para o banheiro
function voltarDoBanheiro(aluno){
    return new Promise(res => {
        setTimeout(() => {
            console.log(`${aluno.nome} voltou do banheiro`)
            res();
            }, aluno.tempo);
    });
}
var alunos = [
        { nome:'Camacho', tempo:3000 },
        { nome:'Larissa', tempo:2000 },
        { nome:'Karen', tempo:1000 },
    ];
async function pedidos(){
    for(let i =0; i < alunos.length; i++){
        console.log(`${alunos[i].nome} pede para ir ao banheiro`);
        await voltarDoBanheiro(alunos[i]);
    };
}
pedidos();

```