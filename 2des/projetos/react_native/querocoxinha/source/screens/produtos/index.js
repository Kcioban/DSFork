import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Prods from '../../mocks/produtos'
import ProdutoLista from '../../components/ProdutoLista'

export default function Produtos({ navigation }) {

    const sair = () => {
        localStorage.removeItem('user');
        navigation.navigate('Login');
    }

    const abrirDetalhes = (dados) => {
        navigation.navigate('Detalhes', { dados });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={Prods}
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