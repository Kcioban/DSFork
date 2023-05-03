import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import Clientes from '../mocks/clientesMock'

export default function ClientesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={Clientes}
                style={styles.list}
                renderItem={({ item }) => <View style={styles.item}>
                    <Image style={styles.img} source={item.avatar} />
                    <View>
                        <Text style={styles.text}>CPF: {item.cpf}</Text>
                        <Text style={styles.text}>Nome: {item.nome} {item.sobrenome}</Text>
                        <Text style={styles.text}>E-mail: {item.email}</Text>
                    </View>
                </View>}
            />
        </View >);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
    },
    img: {
        width: 100,
        height: 100,
        margin: 5,
    },
    text: {
        fontSize: 16,
        margin: 8,
    },
});