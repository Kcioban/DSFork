
import React, { useState, useEffect } from 'react'
import { ImageBackground, Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import users from '../../mocks/users';

export default function Login({ navigation }) {


    const [username, setUsername] = useState('user1');
    const [password, setPassword] = useState('1234');

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigation.navigate('Produtos');
        }
    }, []);

    const handleLogin = () => {
        users.forEach(user => {
            if (username === user.username) {
                if (password === user.password) {
                    localStorage.setItem('user', JSON.stringify(user));
                    navigation.navigate('Produtos');
                } else {
                    alert('Senha incorreta!');
                }
            }
        })
    };

    return (
        <ImageBackground source={require('../../../assets/splash.png')} style={styles.imageBackground}>
            <View style={styles.container}>

                <Text style={styles.text}>Entre com seu login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <Text style={styles.text}>Sua senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>

            </View >
        </ImageBackground>
    );
}
