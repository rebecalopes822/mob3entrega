import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer({ text = "Todos os direitos reservados." }) {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "#555",
    fontWeight: "bold",
  },
});
