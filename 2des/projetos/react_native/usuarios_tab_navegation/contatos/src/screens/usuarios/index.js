import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Usuarios() {
  return (
    <View style={styles.container}>
      <Text>Aqui listarei os usuários</Text>
      <StatusBar style="auto" />
    </View>
  );
}