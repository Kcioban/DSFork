import { View, Image, StyleSheet, Text } from "react-native";

export default function ProdutoLista({ prod }) {
    return (
        <View style={styles.prod}>
            <Image style={styles.img} source={{ uri: `${prod.img}` }} />
            <View>
                <Text style={styles.text}>Id: {prod.id}</Text>
                <Text style={styles.text}>Nome: {prod.nome} {prod.sobrenome}</Text>
                <Text style={styles.text}>Preçp: R$ {prod.preco.toFixed(2)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        margin: 5,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 16,
        margin: 8,
    },
    prod: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
    },
});