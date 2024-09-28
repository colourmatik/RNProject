import React, { useContext } from "react";
import { View, Text, FlatList, Button, Image, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";

export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart, clearCart, calculateTotal } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ваша корзина</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.description}>Ваша корзина пуста.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.cartItemImage} />
              <View style={styles.cartItemDetails}>
                <Text>{item.title}</Text>
                <Text>${item.price}</Text>
              </View>
              <Button title="Удалить" onPress={() => handleRemoveFromCart(item.id)} color='tomato'/>
            </View>
          )}
        />
      )}
         <Text style={styles.totalText}>Итого: ${calculateTotal().toFixed(2)}</Text>
      {cartItems.length > 0 && (
        <Button title="Очистить корзину" onPress={handleClearCart} color='tomato'/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
});