import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import produtos from '../mocks/produtosMock'; // importando os dados do produtos

const MainScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.titulo}>{item.id}</Text>
            <Text style={styles.texto}>{item.nome}</Text>
            <Text style={styles.texto}>{item.img}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
        </View>
    );
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
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 16,
        marginVertical: 5,
    },
    preco: {
        fontSize: 16,
        color: 'green',
    },
    miniatura: {
        width: 80,
        height: 80,
    },
});

export default MainScreen;