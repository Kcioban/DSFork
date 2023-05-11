import React, { useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import PedidoLista from '../../components/PedidoLista'

export default function Pedidos({ navigation, route }) {
    const pedido = JSON.parse(route.params.pedido);
    let pedidos = [];
    
    useEffect(() => {
        const checarPedidos = async () => {
            try {
                const stPedidos = await AsyncStorage.getItem('pedidos');
                if (stPedidos !== null) {
                    pedidos = JSON.parse(stPedidos);
                }
            } catch (error) {
                console.log('Erro ao checar pedidos:', error);
            }
        }
        checarPedidos();
    }, []);

    const salvarPedido = async () => {
        try {
            await AsyncStorage.setItem('pedidos', JSON.stringify(pedidos));
        } catch (error) {
            console.log('Erro ao salvar pedidos:', error);
        }
    }

    const removerPedidos = async () => {
        try {
            await AsyncStorage.removeItem('pedidos');
        } catch (error) {
            console.log('Erro ao remover pedidos:', error);
        }
    }

    if (pedido) {
        pedido.id = pedidos.length + 1;
        pedidos.push(pedido);
        salvarPedido();
    }

    const limpar = () => {
        removerPedidos();
        navigation.navigate('Pedidos', { pedido: false });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={pedidos}
                style={styles.list}
                renderItem={({ item }) => <PedidoLista pedido={item} />}
            />
            <TouchableOpacity style={styles.button} onPress={limpar}>
                <Text style={styles.textButton}>Limpar Pedidos</Text>
            </TouchableOpacity>
        </View >);
};