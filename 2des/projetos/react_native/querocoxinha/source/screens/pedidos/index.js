import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import ProdutoLista from '../../components/ProdutoLista'

export default function Pedidos({ navigation }) {
    const pedidos = []
    const sair = () => {
        localStorage.removeItem('user');
        navigation.navigate('Login');
    }

    const listarProdutos = () => {
        navigation.navigate('Produtos');
    }

    const abrirDetalhes = (dados) => {
        navigation.navigate('Detalhes', { dados });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={listarProdutos}>
                <Text style={styles.textButton}>Produtos</Text>
            </TouchableOpacity>
            <FlatList
                data={pedidos}
                style={styles.list}
                renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={() => abrirDetalhes(item)}>
                    <ProdutoLista prod={item} />
                </TouchableOpacity>}
            />
            <TouchableOpacity style={styles.button} onPress={sair}>
                <Text style={styles.textButton}>Sair</Text>
            </TouchableOpacity>
        </View >);
};