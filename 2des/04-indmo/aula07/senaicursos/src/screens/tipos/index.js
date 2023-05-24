import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles'

const TiposScreen = ({ navigation }) => {
    const produtos = [];
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

export default TiposScreen;