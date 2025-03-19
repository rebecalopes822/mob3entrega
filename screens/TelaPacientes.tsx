import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Footer from "../components/Footer";

type RootStackParamList = {
  GerenciarPacientes: undefined;
  CadastrarPaciente: undefined;
};

type PatientsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "GerenciarPacientes"
>;

interface Props {
  navigation: PatientsScreenNavigationProp;
}

export default function TelaPacientes({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciamento de Pacientes</Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate("GerenciarPacientes")}>
        <Text style={styles.buttonText}>Gerenciar Pacientes</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate("CadastrarPaciente")}>
        <Text style={styles.buttonText}>Cadastrar Paciente</Text>
      </Pressable>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#E3F2FD", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#007BFF", marginBottom: 10 },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
});
