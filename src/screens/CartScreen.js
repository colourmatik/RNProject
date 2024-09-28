import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ваша корзина</Text>
      <Text style={styles.description}>
        Ваша корзина в настоящее время пуста. Добавьте продукты в корзину, чтобы
        увидеть их здесь.
      </Text>
      <Button
        title="Вернуться к продуктам"
        onPress={() => navigation.navigate("Product")}
        color="#556B2F"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#222",
    textAlign: "center",
    marginBottom: 20,
  },
});
