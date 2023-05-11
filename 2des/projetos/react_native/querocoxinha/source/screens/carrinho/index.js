import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import CarrinhoLista from '../../components/CarrinhoLista'

export default function Carrinho({ navigation, route }) {
    const item = route.params;
    const [itens, setItens] = useState([]);
    let acumula = 0;
    let user = '';

    const total = () => {
        acumula = 0;
        itens.forEach(e => {
            acumula += e.preco * e.quantidade;
        });
    }

    const salvarItens = async () => {
        try {
            await AsyncStorage.setItem('itens', JSON.stringify(itens));
        } catch (error) {
            console.log('Erro ao salvar itens:', error);
        }
    }

    if (item) {
        let its = [...itens];
        let produto = route.params.produto;
        let indice = route.params.indice;
        let encontrado = false;
        if (produto) {
            produto.quantidade = 1;
            its.forEach(e => {
                if (e.id === produto.id) {
                    e.quantidade++;
                    encontrado = true;
                }
            });
            if (!encontrado) {
                its.push(produto);
            }
            setItens(its);
            salvarItens();
        }
        if (indice) {
            indice--;
            let its = [...itens];
            its.splice(indice, 1);
            setItens(its);
            salvarItens();
        }
        total();
    } else {
        useEffect(() => {
            const checarStorage = async () => {
                try {
                    const stItens = await AsyncStorage.getItem('itens');
                    const stUser = await AsyncStorage.getItem('user');
                    if (stItens !== null) {
                        setItens(JSON.parse(stItens));
                        total();
                    }
                    if (stUser !== null) {
                        user = JSON.parse(stUser).username;
                    }
                } catch (error) {
                    console.log('Erro ao carregar Storage:', error);
                }
            }
            checarStorage();
        }, []);
    }
    
    const removeItens = async () => {
        try {
            await AsyncStorage.removeItem('itens');
            setItens([]);
        } catch (error) {
            console.log('Erro ao remover itens:', error);
        }
    }

    const removeUser = async () => {
        try {
            await AsyncStorage.removeItem('user');
        } catch (error) {
            console.log('Erro ao remover itens:', error);
        }
    }

    const enviar = () => {
        if (itens.length > 0) {
            const pedido = {
                user: user,
                valor: acumula,
                data: new Date(),
                produtos: itens,
            }
            navigation.navigate('Pedidos', { pedido: JSON.stringify(pedido) });
            removeItens();
            setItens([]);
        } else {
            alert('Pedido vazio, acrescente novos itens.');
            navigation.navigate('Carrinho', { pedido: false });
        }
    }

    const cancelar = () => {
        removeItens();
        navigation.navigate('Carrinho', { pedido: false });
    }

    const sair = () => {
        removeUser();
        navigation.navigate('Login');
    }

    const listarProdutos = () => {
        navigation.navigate('Produtos');
    }

    const abrirDetalhes = (dados, index) => {
        navigation.navigate('Detalhes', { dados, index });
    }

    const pedidos = () => {
        navigation.navigate('Pedidos', { pedido: false });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={listarProdutos}>
                <Text style={styles.textButton}>O que vai querer hoje?{'\n'}Escolha seu lanchinho:</Text>
            </TouchableOpacity>
            <FlatList
                data={itens}
                style={styles.list}
                renderItem={({ item, index }) => <TouchableOpacity style={styles.item} onPress={() => abrirDetalhes(item, index)}>
                    <CarrinhoLista item={item} />
                </TouchableOpacity>}
            />
            <Text style={styles.textTotal}>Total do Pedido: R$ {acumula.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button} onPress={enviar}>
                <Text style={styles.textButton}>Enviar Pedido</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={cancelar}>
                <Text style={styles.textButton}>Cancelar Pedido</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={pedidos}>
                <Text style={styles.textButton}>Acompanhar Pedidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={sair}>
                <Text style={styles.textButton}>Sair</Text>
            </TouchableOpacity>
        </View >);
};