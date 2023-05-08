import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function DetalhesScreen({ navigation, route }) {
    const produto = route.params.dados
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: `${produto.img}` }}></Image>
            <View style={styles.textos}>
                <Text style={styles.text}>Nome: {produto.nome}</Text>
                <Text style={styles.text}>Complemento: {produto.preco}</Text>
            </View>
        </View>
    );
};
