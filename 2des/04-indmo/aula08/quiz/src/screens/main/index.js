import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>Quiz - To be</Text>
      <StatusBar style="auto" />
    </View>
  );
}

