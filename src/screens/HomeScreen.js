import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  Button, 
  StyleSheet, 
  Platform, 
  ToastAndroid, 
  Alert 
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export default function HomeScreen({ navigation }) {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);

      if (state.isConnected) {
        if (Platform.OS === 'android') {
          ToastAndroid.show('Подключено к интернету', ToastAndroid.SHORT);
        } else if (Platform.OS === 'ios') {
          Alert.alert('Статус подключения', 'Подключено к интернету');
        }
      } else {
        if (Platform.OS === 'android') {
          ToastAndroid.show('Нет подключения к интернету', ToastAndroid.SHORT);
        } else if (Platform.OS === 'ios') {
          Alert.alert('Статус подключения', 'Нет подключения к интернету');
        }
      }
    });

    return () => {
      unsubscribe(); 
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать!</Text>
      <Button 
        title="Авторизация" 
        onPress={() => navigation.navigate('Tabs')} 
        color="tomato"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});