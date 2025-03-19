import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Footer from "../components/Footer";

type RootStackParamList = {
  GerenciarTratamentos: undefined;
  CadastrarTratamento: undefined;
};

type TreatmentsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "GerenciarTratamentos"
>;

interface Props {
  navigation: TreatmentsScreenNavigationProp;
}

export default function TelaTratamentos({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciamento</Text>
      <Text style={styles.title}>de Tratamentos</Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate("GerenciarTratamentos")}>
        <Text style={styles.buttonText}>Gerenciar Tratamentos</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate("CadastrarTratamento")}>
        <Text style={styles.buttonText}>Cadastrar Tratamento</Text>
      </Pressable>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#E3F2FD", 
    padding: 20 
  },
  title: { 
    fontSize: 26, 
    fontWeight: "bold", 
    color: "#007BFF", 
    textAlign: "center",
    lineHeight: 30,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    width: "70%",
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: { 
    color: "#FFF", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
});
