import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import ProfileButton from './components/ProfileButton';
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
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleImagePickerPress}>
            <Image
              source={image ? { uri: image } : require('../../../assets/images/default_profile_image.jpg')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.userName}>홍길동</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ProfileButton ButtonCategory="작성게시글" />
          <ProfileButton ButtonCategory="즐겨찾기" />
        </View>
      </View>

      <View style={styles.introContainer}>
        <Text style={styles.introTitle}>내소개</Text>
        <View style={styles.introContent}>
          <TouchableOpacity>
            <Text>내소개가 없습니다.</Text>
          </TouchableOpacity>
        </View>
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
    borderRadius: 30
  },
  imageContainer: {
    position: 'relative',
    width: 100,
    height: 100,
    marginLeft: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    position: 'absolute',
    bottom: -20, // Adjust as needed
    width: '100%',
    textAlign: 'center',
    color: themeColors.white1

  },
  buttonContainer: {
    marginLeft: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  introContainer: {
    marginTop: 20,
  },
  introTitle: {
    fontSize: 20,
    marginLeft : 15
  },
  introContent: {
    margin : 10,
    height: 200,
    backgroundColor: themeColors.white0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius : 30
  },
  text: {
    textAlign: 'center',
  },
});

export default ProfileScreen;

