import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text } from 'react-native';
import styles from './styles'
import cursos from '../../../mocks/cursos.js';

const MainScreen = ({ navigation }) => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        setProdutos(cursos);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tipos de Cursos</Text>
            <FlatList
                data={produtos}
                renderItem={({ item, indice }) => <View>
                    <Image
                        style={styles.img}
                        source={{ uri: `${item.img}` }}
                    />
                    <Text style={styles.text}>{item.tipo} - {item.descricao}</Text>
                </View>}
                style={styles.list}
            />
        </View>
    );
};

export default MainScreen;