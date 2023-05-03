import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';

export default function DetalhesScreen({ navigation, rooter }) {
    return(
        <View style={styles.container}>
            <Text>Detalhes</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});