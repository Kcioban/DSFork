import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native';
import styles from './styles'

const MainScreen = ({ navigation }) => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={produtos}
                renderItem={({ item }) => <View>

                </View>}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
        </View>
    );
};

export default MainScreen;