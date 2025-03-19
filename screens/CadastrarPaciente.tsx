import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";
import Footer from "../components/Footer";

export default function CadastrarPaciente() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios!");
      return;
    }
    Alert.alert("Sucesso", "Paciente cadastrado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Paciente</Text>

      <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Data de Nascimento" value={birthDate} onChangeText={setBirthDate} />
      <TextInput style={styles.input} placeholder="Gênero" value={gender} onChangeText={setGender} />
      <TextInput style={styles.input} placeholder="Telefone" value={phone} onChangeText={setPhone} />
      <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Endereço" value={address} onChangeText={setAddress} />

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
