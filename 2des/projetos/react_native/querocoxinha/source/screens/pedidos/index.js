import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import PedidoLista from '../../components/PedidoLista'

export default function Pedidos({ navigation }) {
    const [pedidos, setPedidos] = useState([]);

    const abrirPedidos = async () => {
        try {
            const stPedidos = await AsyncStorage.getItem('pedidos');
            if (stPedidos !== null) {
                setPedidos(JSON.parse(stPedidos));
            }
        } catch (error) {
            console.log('Erro ao checar pedidos:', error);
        }
    }

    const removerTodos = async () => {
        try {
            await AsyncStorage.removeItem('pedidos');
            setPedidos([]);
        } catch (error) {
            console.log('Erro ao remover pedidos:', error);
        }
    }

    const enviarPorWhatsApp = async () => {
        let msg = 'Olá, gostaria de fazer o pedido:\n';
        let total = 0;
        pedidos.forEach(e => {
            e.produtos.forEach(p => {
                msg += `${p.nome} - ${p.quantidade} x ${p.preco}\n`;
            });
            msg += `Subtotal = ${e.valor}\n`;
            total += e.valor;
        });
        msg += `Total: ${total}`;
        msg = encodeURI(msg);
        const url = `whatsapp://send?text=${msg}`;
        await Linking.openURL(url);
    }

    useEffect(() => {
        abrirPedidos();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={pedidos}
                style={styles.list}
                renderItem={({ item }) => <PedidoLista pedido={item} />}
            />
            <TouchableOpacity style={styles.button} onPress={removerTodos}>
                <Text style={styles.textButton}>Limpar Pedidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWhats} onPress={enviarPorWhatsApp}>
                <Text style={styles.textButton}>Enviar por WhatsApp</Text>
            </TouchableOpacity>
        </View >);
};