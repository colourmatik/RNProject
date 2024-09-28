import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать в мебельный магазин!</Text>
      <Button
        title="Посмотреть продукты"
        onPress={() => navigation.navigate("Product")}
        color="#556B2F"
      />
      <View style={styles.spacer} />
      <Button
        title="Корзина"
        onPress={() => navigation.navigate("Cart")}
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
    backgroundColor: "#00000",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#323",
  },
  spacer: {
    height: 20,
  },
});
