import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/icon.png')}
      />
      <Text>Alô mundo!</Text>
      <Image
        style={styles.logo}
        source={require('./assets/adaptive-icon.png')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 166,
    height: 158,
  },
});
