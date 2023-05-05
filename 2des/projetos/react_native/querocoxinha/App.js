import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './source/screens/login';
import Produtos from './source/screens/produtos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Tela de Login' }} />
        <Stack.Screen
          name="Produtos"
          component={Produtos}
          options={{ title: 'Escolha seu produto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}