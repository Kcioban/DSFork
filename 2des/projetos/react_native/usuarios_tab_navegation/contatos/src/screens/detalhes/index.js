import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Detalhes() {
  return (
    <View style={styles.container}>
      <Text>Aqui aparecerá os detalhes dos usuários</Text>
      <StatusBar style="auto" />
    </View>
  );
}