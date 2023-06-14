import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';

export default function PerguntasScreen() {
  return (
    <View style={styles.container}>
      <Text>Quiz</Text>
      <StatusBar style="auto" />
    </View>
  );
}

