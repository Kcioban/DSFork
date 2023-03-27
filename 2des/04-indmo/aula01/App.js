import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const tituloBotao = "Cadastrar";
  const texto = "Meu Primeiro App !";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{texto}</Text>
      <TextInput style={styles.input}/>
      <Button title={tituloBotao} />
      <TouchableOpacity>
        <Text>Autenticar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5426FF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem'
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  input: {
    borderBottomWidth: '1px',
    borderBottomColor: '#333',
    backgroundColor: '#E5E5E5',
    padding: '5px',
  }
});
