import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import themeColors from '../../../assets/styles/themeColors';

function ProfileScreen() {
  const [image, setImage] = useState(null);

  const handleImagePickerPress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleImagePickerPress}>
          <Image
            source={image ? { uri: image } : require('../../../assets/images/default_profile_image.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.userName}>홍길동</Text>
      </View>

      <View style={styles.introContainer}>
        <Text style={styles.introTitle}>내 소개</Text>
        <View style={styles.introContent}>
          <TouchableOpacity>
            <Text>내 소개가 없습니다.</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.customButton}>
          <Text style={styles.buttonText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeColors.navy1,
    borderRadius: 30,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    marginLeft: 20,
    fontSize: 18,
    color: themeColors.white1,
  },
  introContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  introTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  introContent: {
    width: '90%',
    height: 200,
    backgroundColor: themeColors.white0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
  },
  customButton: {
    marginTop: 20,
    backgroundColor: themeColors.navy1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: themeColors.white0,
    fontSize: 16,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default ProfileScreen;
