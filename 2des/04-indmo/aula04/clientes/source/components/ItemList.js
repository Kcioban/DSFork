import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const detalhes = (indice, dados) => {
    console.log(indice, dados)
}

const ItemList = ({ dados, indice }) => (
    < View style={styles.item} >
        <Image style={styles.img} source={dados.avatar} />
        <View style={{ flex: 1 }}>
            <Text style={styles.text}>CPF: {dados.cpf}</Text>
            <Text style={styles.text}>Nome: {dados.nome} {dados.sobrenome}</Text>
            <Text style={styles.text}>Telefone: {dados.telefone}</Text>
            <Text style={styles.text}>Indice: {indice}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton} onPress={() => { detalhes(indice, dados) }} >Detalhes</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        padding: 5,
        borderColor: "#666",
        borderBottomWidth: 1,
    },
    img: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 17,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 5,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ItemList;