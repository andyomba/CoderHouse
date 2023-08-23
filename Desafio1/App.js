import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Primer desafio!!!</Text>
      <Text style={styles.text}>Hola Coder XD</Text>
      <Text style={styles.footer}>listo para el proximo...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5733',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 34,
    color: 'white',
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
  footer: {
    fontSize: 18,
    color: 'white',
    marginTop: 500,
  },
});