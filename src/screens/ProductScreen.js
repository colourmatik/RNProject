import React, { useContext, useEffect } from "react";
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  Button, 
  StyleSheet, 
  TouchableOpacity 
} from "react-native";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export default function ProductScreen() {
  const { products, fetchProducts } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} 
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
            <Button title="Добавить в корзину" onPress={() => handleAddToCart(item)} color='tomato'/>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  productItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
});