import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import clientes from '../mocks/clientesMock'

export default clientesScreen = ({ navigation }) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Lista de Clientes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    text:{
        fontSize: 20,
    }
});