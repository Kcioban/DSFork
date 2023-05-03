import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Clientes from '../mocks/clientesMock'

export default function ClientesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={Clientes}
                style={styles.list}
                renderItem={({ item }) => <>
                    <Text>CPF: {item.cpf}</Text>
                    <Text>Nome: {item.nome} {item.sobrenome}</Text>
                    <Text>E-mail: {item.email} {item.sobrenome}</Text>
                </>}
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
    }
});