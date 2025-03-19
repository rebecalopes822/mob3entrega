import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Footer from "../components/Footer";

const treatments = [
  { id: "1", description: "Limpeza", type: "Preventivo", cost: "R$ 150" },
  { id: "2", description: "Clareamento", type: "Estético", cost: "R$ 600" },
  { id: "3", description: "Extração", type: "Cirúrgico", cost: "R$ 350" },
  { id: "4", description: "Ortodontia", type: "Aparelho", cost: "R$ 1200" },
];

export default function ManageTreatmentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tratamentos</Text>

      <FlatList
        data={treatments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>ID: {item.id}</Text>
            <Text style={styles.text}>Descrição: {item.description}</Text>
            <Text style={styles.text}>Tipo: {item.type}</Text>
            <Text style={styles.text}>Custo: {item.cost}</Text>
          </View>
        )}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#E3F2FD" },
  title: { fontSize: 24, fontWeight: "bold", color: "#007BFF", marginBottom: 10, textAlign: "center" },
  item: { padding: 15, borderBottomWidth: 1, backgroundColor: "#FFF", marginBottom: 10, borderRadius: 10 },
  text: { fontSize: 18 },
});
