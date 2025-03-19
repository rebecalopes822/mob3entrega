import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Footer from "../components/Footer";

type Props = {
  navigation: StackNavigationProp<any>; 
};

export default function TelaInicial({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/health.png")} style={styles.logo} />

      <Text style={styles.title}>OdontoPrev</Text>
      <Text style={styles.subtitle}>Gerencie seus pacientes e tratamentos com eficiência.</Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate("TelaPacientes")}>
        <Text style={styles.buttonText}>Pacientes</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate("TelaTratamentos")}>
        <Text style={styles.buttonText}>Tratamentos</Text>
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
  logo: { 
    width: 100, 
    height: 100, 
    marginBottom: 20 
  }, 
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: "#007BFF", 
    marginBottom: 10 
  },
  subtitle: { 
    fontSize: 16, 
    color: "#555", 
    textAlign: "center", 
    marginBottom: 20 
  },
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
  buttonText: { 
    color: "#FFF", 
    fontSize: 20, 
    fontWeight: "bold" 
  },
});
