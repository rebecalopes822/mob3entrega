import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import Footer from "../components/Footer";

const patients = [
  { id: "1", name: "Rebeca Lopes" },
  { id: "2", name: "Giovanna Lima" },
  { id: "3", name: "Felipe Cavalcante" },
  { id: "4", name: "Alexandre" },
];

export default function ManagePatientsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Pacientes</Text>

      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Ver Mais" onPress={() => alert("Ops... Não foi possível realizar essa ação.")} />
            </View>
          </View>
        )}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#E3F2FD",
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "#007BFF", 
    marginBottom: 20, 
    textAlign: "center",
  },
  item: { 
    padding: 15, 
    borderBottomWidth: 1, 
    backgroundColor: "#FFF", 
    marginBottom: 10, 
    borderRadius: 10,
    alignItems: "flex-start", 
  },
  text: { 
    fontSize: 18, 
    fontWeight: "black",
    marginBottom: 5, 
  },
  buttonContainer: { 
    alignSelf: "flex-start", 
  },
});
