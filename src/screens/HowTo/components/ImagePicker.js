import { Button, View, Image, Text, StyleSheet,  ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import { launchCameraAsync } from 'expo-image-picker';
import { useState } from 'react';
import themeColors from '../../../../assets/styles/themeColors';
import { storeData } from '../../../../utils/http';

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { width, height } = Dimensions.get('window');

  async function takeImageHandler() {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    setPickedImage(image.assets[0].uri);
  }

  function handleDetailButtonPress() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    storeData();
  }

  let imagePreview = (
    <Text style={{ textAlign: 'center', fontSize: 20 }}>
      사진이 선택되지 않았습니다.
    </Text>
  );

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  
  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={[styles.loadingOverlay, { width: width, height: height }]}>
          <ActivityIndicator size="large" color={themeColors.navy1} />
        </View>
      )}
      <View style={styles.imagePreview}>{imagePreview}</View>
      <TouchableOpacity onPress={takeImageHandler} style={styles.button}>
        <Text style={styles.text}>사진찍기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDetailButtonPress} style={styles.button}>
        <Text style={styles.text}>자세 교정</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDetailButtonPress} style={styles.button}>
        <Text style={styles.text}>기구 확인하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // 가운데 정렬
  },
  imagePreview: {
    width: '100%',
    height: 300,
    marginVertical: 8,
    borderRadius: 4,
    backgroundColor: themeColors.white1,
    justifyContent: 'center', // 가운데 정렬
    alignItems: 'center', // 가운데 정렬
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    paddingVertical: 15,
    backgroundColor: themeColors.navy1,
    borderRadius: 10,
    marginVertical: 10,
    width: '50%', // 원하는 너비 설정
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: themeColors.white0,
    textAlign: 'center',
  },  
  loadingOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  }
});

export default ImagePicker;
