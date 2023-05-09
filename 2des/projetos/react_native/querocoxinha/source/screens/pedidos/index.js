import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import ProdutoLista from '../../components/ProdutoLista'

export default function Pedidos({ navigation, route }) {
    const dados = route.params;
    const [pedidos, setPedidos] = new useState([]);
    const [total, setTotal] = new useState(0);

    if (dados) {
        let produto = dados.produto;
        let indice = dados.indice;

        if (produto) {
            let lista = pedidos;
            lista.push(produto);
            setPedidos(lista);
        }

        if (indice) {
            indice--;
            let lista = pedidos;
            lista.splice(indice, 1);
            setPedidos(lista);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('pedidos')) {
            let lista = JSON.parse(localStorage.getItem('pedidos'));
            setPedidos(lista);
        }
    }, []);

    useEffect(() => {
        let acumulador = 0;
        pedidos.forEach(e => {
            acumulador += e.preco;
        });
        setTotal(acumulador)
        if (pedidos.length > 0) localStorage.setItem('pedidos', JSON.stringify(pedidos));
    }, []);
    
    const enviar = () => {
        // if (pedidos.length > 0) {
        //     const pedido = {
        //         user: JSON.parse(localStorage.getItem('user')).username,
        //         produtos: pedidos,
        //     }
        //     console.log(JSON.stringify(pedido));
        //     alert('Seu pedido está sendo processado.');
        //     localStorage.removeItem('pedidos');
        //     navigation.navigate('Pedidos');
        // } else {
        //     alert('Seu pedido está vazio.');
        // }
    }
    
    const cancelar = () => {
        localStorage.removeItem('pedidos');
        setPedidos([]);
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
            <Text style={styles.textTotal}>Total do Pedido: R$ {total.toFixed(2)}</Text>
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