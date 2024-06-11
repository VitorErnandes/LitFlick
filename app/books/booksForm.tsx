import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function BookForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título do Livro:</Text>
      <TextInput style={styles.input} placeholder="Digite o título" />
      <Text style={styles.label}>Autor do Livro:</Text>
      <TextInput style={styles.input} placeholder="Digite o autor" />
      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
