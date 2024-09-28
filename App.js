import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import CartScreen from './src/screens/CartScreen';
import OrderScreen from './src/screens/OrderScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { ProductProvider } from './src/context/ProductContext';
import { CartProvider } from './src/context/CartContext';
import { ProfileProvider } from './src/context/ProfileContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Профиль') {
            iconName = focused
              ? 'person-circle'
              : 'person-circle-outline';
          } else if (route.name === 'Магазин') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Корзина') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato', 
        tabBarInactiveTintColor: 'gray', 
      })}
    >
      <Tab.Screen 
        name="Профиль" 
        component={ProfileScreen} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Магазин" 
        component={ProductScreen} 
        options={({ navigation }) => ({ 
          headerRight: () => (
            <TouchableOpacity 
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Корзина')}
            >
              <Ionicons name="cart" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen name="Корзина" component={CartScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
      <ProfileProvider> 
        <NavigationContainer onError={(error) => console.log('Ошибка навигации:', error)}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="Tabs" 
              component={HomeTabs} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
            name="Order" 
            component={OrderScreen} 
            options={{ headerShown: false }} 
            /> 
          </Stack.Navigator>
        </NavigationContainer>
        </ProfileProvider>
      </CartProvider>
    </ProductProvider>
  );
}