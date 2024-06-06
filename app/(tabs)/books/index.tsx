// app/components/BookSeriesList.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'O Senhor dos Anéis', type: 'Livro' },
  { id: '2', title: 'Harry Potter', type: 'Livro' }
];

const BookSeriesList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Livros e Séries</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.type}>{item.type}</Text>
          </View>
        )}
      />
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
    marginBottom: 20,
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
});

export default BookSeriesList;
