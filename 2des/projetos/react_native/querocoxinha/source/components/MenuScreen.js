import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MenuScreen = ({ navigation }) => {
    const navigateToHome = () => {
        navigation.navigate('Home');
    };

    const navigateToSettings = () => {
        navigation.navigate('Settings');
    };

    return (
        <View>
            <TouchableOpacity onPress={navigateToHome}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSettings}>
                <Text>Settings</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MenuScreen;