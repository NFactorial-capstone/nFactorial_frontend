import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import * as AuthSession from 'expo-auth-session';
import AppNavigator from '../../navigations/AppNavigator'; 

const redirectUri = AuthSession.makeRedirectUri({
  useProxy: true,
});

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const link = async () => {
    const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=4b014e54e818307875e7f719754a5313&redirect_uri=${redirectUri}&response_type=code`;
    const result = await AuthSession.startAsync({ authUrl });
    
    if (result.type === 'success') {
      const authCode = result.params.code;
      console.log("Authorization Code:", authCode);
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return <AppNavigator />;
  }

  return (
    <View style={styles.outerContainer}>
      <Text>환영합니다. N!과 함께 활기차고 건강한 생활을 해보아요!</Text>
      <TouchableOpacity onPress={link} style={styles.loginButton}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  }
});

export default Login;
