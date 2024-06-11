import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

interface Book {
  id: string;
  title: string;
  type: string;
}

const data: Book[] = [
  { id: '1', title: 'O Senhor dos Anéis', type: 'Livro' },
  { id: '2', title: 'Game of Thrones', type: 'Série' },
  { id: '3', title: 'Harry Potter', type: 'Livro' },
  { id: '4', title: 'Breaking Bad', type: 'Série' },
];

const BookSeriesList = () => {
  const router = useRouter();

  const navigateToForm = (book?: Book) => {
    router.push('/books/booksForm', { book });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus livros</Text>
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
      <TouchableOpacity style={styles.button} onPress={() => navigateToForm()}>
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
