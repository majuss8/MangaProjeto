import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Modal, TouchableOpacity } from 'react-native';
import { api } from '../services/api';

export default function SelectionScreen() {
  const [livros, setLivros] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState('');

  useEffect(() => {
    async function fetchLivros() {
      try {
        const response = await api.get('/livros');
        setLivros(response.data);
      } catch (error) {
        console.error('Erro ao buscar livros');
      }
    }
    fetchLivros();
  }, []);

  const handleSelection = (item) => {
    setSelectedBook(item.titulo);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Livros</Text>
      <FlatList
        data={livros}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Button
            title={item.titulo}
            onPress={() => handleSelection(item)}
          />
        )}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>{selectedBook}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  closeText: {
    color: 'white',
  },
});
