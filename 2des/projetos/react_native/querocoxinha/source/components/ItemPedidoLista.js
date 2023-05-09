import { View, Image, StyleSheet, Text } from "react-native";

export default function ItemPedidoLista({ item }) {
    return (
        <View style={styles.item}>
            <Image style={styles.img} source={{ uri: `${item.img}` }} />
            <View>
                <Text style={styles.text}>Id: {item.id}</Text>
                <Text style={styles.text}>Nome: {item.nome} {item.sobrenome}</Text>
                <Text style={styles.text}>Preçp: R$ {item.preco.toFixed(2)}</Text>
            </View>
            <Text style={styles.text}>Qtida:<br />{item.quantidade}</Text>
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
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
    },
});