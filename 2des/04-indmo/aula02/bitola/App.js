import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [distancia, setDistancia] = new useState(0)
  const [corrente, setCorrente] = new useState(0)
  const calcular = () => {
    console.log('Pressionou')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo de Bitola</Text>
      <Text style={styles.textos}>Distância em metros:</Text>
      <TextInput
        style={styles.inputs}
        value={distancia}
        onChangeText={(val) => { setDistancia(Number(val)) }}
      />
      <Text style={styles.textos}>Valor da corrente:</Text>
      <TextInput
        style={styles.inputs}
        value={corrente}
        onChangeText={(val) => { setCorrente(Number(val)) }}
      />
      <Button
        style={styles.botao} title='Calcular'
        color='#000033'
        onPress={calcular}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#330000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: '22px',
    color: '#fcc',
    fontWeight: 'bold',
  },
  textos: {
    fontSize: '18px',
    color: '#fee',
  },
  inputs: {
    borderBottomColor: '#ccc',
    borderBottomWidth: '1px',
    width: '100%',
    padding: '10px',
    color: '#fcc',
    fontSize: '16px',
  }
});
