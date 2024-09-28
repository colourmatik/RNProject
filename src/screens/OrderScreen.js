import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ProfileContext from '../context/ProfileContext';

export default function OrderScreen({ navigation }) {
  const { profileData } = useContext(ProfileContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Заказ оформлен!</Text>
      <Text style={styles.addressText}>По адресу: {profileData.address}</Text>

      <Button 
        title="Вернуться в магазин"
        onPress={() => navigation.navigate('Магазин')} 
        color="tomato"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addressText: {
    fontSize: 18,
    marginBottom: 20,
  },
});