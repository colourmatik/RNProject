import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  Button, 
  StyleSheet, 
  TouchableOpacity,
  Modal,
  TextInput,
  Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen() {
  const [name, setName] = useState('Иван Иванов');
  const [address, setAddress] = useState('ул. Примерная, д. 123');
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const [newNameInput, setNewNameInput] = useState(name);
  const [newAddressInput, setNewAddressInput] = useState(address);

  const handleChoosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Ошибка', 'Нет разрешений на доступ к галерее.');
      return;
    }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Ошибка при выборе фото:', error);
      Alert.alert('Ошибка', 'Не удалось выбрать фото.');
    }
  };

  const handleEditName = () => setIsEditingName(true);
  const handleSaveName = () => {
    setName(newNameInput);
    setIsEditingName(false);
  };
  const handleCancelName = () => setIsEditingName(false);

  const handleEditAddress = () => setIsEditingAddress(true);
  const handleSaveAddress = () => {
    setAddress(newAddressInput);
    setIsEditingAddress(false);
  };
  const handleCancelAddress = () => setIsEditingAddress(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChoosePhoto}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      </TouchableOpacity>

      <Text style={styles.name}>{name}</Text>
      <Button title="Изменить имя" onPress={handleEditName} color='tomato'/>

      <Text style={styles.address}>{address}</Text>
      <Button title="Изменить адрес" onPress={handleEditAddress} color='tomato'/>

      <Modal visible={isEditingName} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            value={newNameInput}
            onChangeText={setNewNameInput}
          />
          <Button title="Сохранить" onPress={handleSaveName} color='tomato'/>
          <Button title="Отмена" onPress={handleCancelName} color='tomato'/>
        </View>
      </Modal>

      <Modal visible={isEditingAddress} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            value={newAddressInput}
            onChangeText={setNewAddressInput}
          />
          <Button title="Сохранить" onPress={handleSaveAddress} color='tomato'/>
          <Button title="Отмена" onPress={handleCancelAddress} color='tomato'/>
        </View>
      </Modal>
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
});