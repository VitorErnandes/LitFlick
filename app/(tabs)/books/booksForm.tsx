// app/components/BookSeriesList.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BookSeriesList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastrar livro</Text>
      
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Adicionar Novo Livro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  itemContainer: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  type: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookSeriesList;
