import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, ImageBackground } from "react-native";
import * as Linking from 'expo-linking';
import themeColors from "../../../assets/styles/themeColors";

const Login = () => {
  const link = () => {
    Linking.openURL("https://kauth.kakao.com/oauth/authorize?client_id=4b014e54e818307875e7f719754a5313&redirect_uri=http://52.68.188.192:8080/backend/login&response_type=code");
  };

  return (
    <ImageBackground 
      source={require('../../../assets/images/background_img_3.webp')} 
      style={styles.outerContainer}
    >
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>환영합니다.  N!과 함께</Text>
        <Text style={styles.welcomeText}> 활기차고 건강한 생활을 해보아요!</Text>
      </View>
      <TouchableOpacity onPress={link} style={styles.loginButton}>
        <Image 
          source={require('../../../assets/images/kakao_login_medium_narrow.png')} 
          style={styles.loginButtonImage} 
        />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 400, 
  },
  welcomeText: {
    fontSize: 25,
    color: themeColors.yellow1,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000', 
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  loginButton: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    position: 'absolute',
    bottom: 100 // Position button a bit above the bottom
  },
  loginButtonImage: {
    width: 200,
    height: 50
  }
});

export default Login;
