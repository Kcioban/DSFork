import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './source/screens/navitation';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}