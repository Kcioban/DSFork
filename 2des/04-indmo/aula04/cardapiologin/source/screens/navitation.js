import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Main from './Main';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Cardapio' }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;