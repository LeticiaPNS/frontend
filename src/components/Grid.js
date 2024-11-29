import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { toast } from "react-toastify"; // Usando o toast na web
import axios from "axios"; // Certifique-se de importar o axios corretamente
import { FaEdit, FaTrash } from "react-icons/fa"; // Importando os ícones

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8800/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      toast.success("Usuário deletado com sucesso!");
    } catch (error) {
      toast.error("Erro ao deletar usuário.");
    }
  };

  return (
    <View style={styles.container}>
      {users.map((user) => (
        <View key={user.id} style={styles.userCard}>
          <View style={styles.userInfo}>
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Nome</Text>
              <Text style={styles.fieldValue}>{user.nome}</Text>
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Email</Text>
              <Text style={styles.fieldValue}>{user.email}</Text>
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Telefone</Text>
              <Text style={styles.fieldValue}>{user.fone}</Text>
            </View>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setOnEdit(user)}
            >
              <FaEdit style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(user.id)}
            >
              <FaTrash style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
    maxWidth: 500, // Definindo uma largura máxima para alinhar com o FormContainer
    width: "100%", // Garantindo que o contêiner ocupe a largura disponível
  },
  userCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "100%", // Garantir que o card ocupe toda a largura disponível
  },
  userInfo: {
    marginBottom: 15,
  },
  fieldContainer: {
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
  },
  fieldValue: {
    fontSize: 14,
    color: "#555",
    marginTop: 5, // Espaçamento entre o rótulo e o valor
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120, // Definindo a largura do botão de editar
  },
  deleteButton: {
    backgroundColor: "#F44336",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120, // Definindo a largura do botão de excluir
  },
  icon: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Grid;
