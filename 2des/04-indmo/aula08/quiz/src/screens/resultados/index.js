import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';

export default function ResultadosScreen() {
  return (
    <View style={styles.container}>
      <Text>Resultados</Text>
      <StatusBar style="auto" />
    </View>
  );
}

