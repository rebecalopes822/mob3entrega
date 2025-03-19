import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";
import Footer from "../components/Footer";

export default function CadastrarTratamento() {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [cost, setCost] = useState("");

  const handleRegister = () => {
    if (!description.trim() || !type.trim() || !cost.trim()) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios!");
      return;
    }
    Alert.alert("Sucesso", "Tratamento cadastrado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Tratamento</Text>

      <TextInput style={styles.input} placeholder="Descrição" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Tipo" value={type} onChangeText={setType} />
      <TextInput style={styles.input} placeholder="Custo" value={cost} onChangeText={setCost} keyboardType="numeric" />

      <Button title="Registrar" onPress={handleRegister} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#E3F2FD" },
  title: { fontSize: 24, fontWeight: "bold", color: "#007BFF", marginBottom: 10, textAlign: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, backgroundColor: "#FFF", borderRadius: 10 },
});
