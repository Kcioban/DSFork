//import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import { Ionicons } from '@expo/vector-icons';

import Usuarios from './screens/usuarios';
import Detalhes from './screens/detalhes';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (<Tab.Navigator>
    <Tab.Screen
      name="Usuarios"
      component={Usuarios}
    />
    <Tab.Screen
      name="Detalhes"
      component={Detalhes}
    />
  </Tab.Navigator>);
}