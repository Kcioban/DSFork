
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './source/components/Main';
import LoginScreen from './source/components/Login';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Provider
    <NavigationContainer>

      {/* Container de navegaçao */}
      <Stack.Navigator>

        {/* Telas */}
        <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ title: 'Tela de Login' }} />
            
        <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ title: 'Tela Principal' }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}