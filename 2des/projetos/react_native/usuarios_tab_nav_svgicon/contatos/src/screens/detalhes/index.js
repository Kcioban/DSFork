import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Detalhes({ navigation, route }) {
  if(route.params != undefined){
    console.log(route.params.usuario)
  }
  return (
    <View style={styles.container}>
      <Text>Aqui aparecerá os detalhes dos usuários</Text>
      <StatusBar style="auto" />
    </View>
  );
}