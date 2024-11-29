import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import Toast from 'react-native-toast-message';  // Importando a biblioteca de toast
import globalStyles from './src/styles/global'; // Importando os estilos globais
import Form from "./src/components/Form"; 
import Grid from "./src/components/Grid"; 

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  // Função para buscar os usuários
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      // Usando o Toast do React Native para mostrar erros
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Erro ao carregar usuários',
        text2: error.message,
      });
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={globalStyles.container}> {/* Aplicando o estilo global */}
      <Text style={globalStyles.title}>Cadastro de Contatos</Text> {/* Aplicando o estilo global */}

      <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
      <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />

      {/* Definindo o Toast */}
      <Toast />
    </View>
  );
}

export default App;
