import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import ProdutoLista from '../../components/ProdutoLista'

export default function Pedidos({ navigation, route }) {
    const pedido = route.params;
    let acumula = 0;
    let pedidos = [];

    const total = () => {
        acumula = 0;
        pedidos.forEach(e => {
            acumula += e.preco;
        });
    }

    if (localStorage.getItem('pedidos') != null && localStorage.getItem('pedidos') != '') {
        pedidos = JSON.parse(localStorage.getItem('pedidos'));
        total();
    }

    if (pedido) {
        let produto = route.params.produto;
        let indice = route.params.indice;
        if (produto) {
            pedidos.push(produto);
            localStorage.setItem('pedidos', JSON.stringify(pedidos));
        }
        if (indice) {
            indice--;
            pedidos.splice(indice, 1);
            localStorage.setItem('pedidos', JSON.stringify(pedidos));
        }
        total();
    }

    const enviar = () => {
        if (pedidos.length > 0) {
            const pedido = {
                user: JSON.parse(localStorage.getItem('user')).username,
                produtos: pedidos,
            }
            console.log(JSON.stringify(pedido));
            alert('Seu pedido está sendo processado.');
            localStorage.removeItem('pedidos');
            navigation.navigate('Pedidos');
        } else {
            alert('Seu pedido está vazio.');
        }
    }

    const cancelar = () => {
        localStorage.removeItem('pedidos');
        navigation.navigate('Pedidos');
    }

    const sair = () => {
        localStorage.removeItem('user');
        navigation.navigate('Login');
    }

    const listarProdutos = () => {
        navigation.navigate('Produtos');
    }

    const abrirDetalhes = (dados, index) => {
        navigation.navigate('Detalhes', { dados, index });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={listarProdutos}>
                <Text style={styles.textButton}>O que vai querer hoje?<br />Escolha seu lanchinho:</Text>
            </TouchableOpacity>
            <FlatList
                data={pedidos}
                style={styles.list}
                renderItem={({ item, index }) => <TouchableOpacity style={styles.item} onPress={() => abrirDetalhes(item, index)}>
                    <ProdutoLista prod={item} />
                </TouchableOpacity>}
            />
            <Text style={styles.textTotal}>Total do Pedido: R$ {acumula.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button} onPress={enviar}>
                <Text style={styles.textButton}>Enviar Pedido</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={cancelar}>
                <Text style={styles.textButton}>Cancelar Pedido</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={sair}>
                <Text style={styles.textButton}>Sair</Text>
            </TouchableOpacity>
        </View >);
};