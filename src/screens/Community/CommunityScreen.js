import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeColors from '../../../assets/styles/themeColors';
import CommunityContainer from './components/CommunityContainer';

function CommunityScreen() {
  const [currentScreen, setCurrentScreen] = useState('전체글');
  const navigation = useNavigation();

  const onPostButtonPress = () => {
    navigation.navigate('Post');
  };

  const onButtonPress = (screen) => {
    setCurrentScreen(screen);
    // 다른 로직 추가 가능
  };

  const getButtonStyle = (screen) => {
    return currentScreen === screen ? styles.buttonActive : styles.button;
  };

  const getTextStyle = (screen) => {
    return currentScreen === screen ? styles.textActive : styles.text;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer1} showsVerticalScrollIndicator={false}>
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer2} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity 
           style={getButtonStyle('전체글')}
           onPress={() => onButtonPress('전체글')}>
            <Text style={getTextStyle('전체글')}>전체글</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={getButtonStyle('다이어트 후기')}
            onPress={() => onButtonPress('다이어트 후기')} >
            <Text style={getTextStyle('다이어트 후기')}>다이어트 후기</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={getButtonStyle('꿀팁 공유')}
            onPress={() => onButtonPress('꿀팁 공유')}
            >
            <Text style={getTextStyle('꿀팁 공유')}>꿀팁 공유</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
          style={getButtonStyle('잡담')}
          onPress={() => onButtonPress('잡담')}>
            <Text style={getTextStyle('잡담')}>잡담</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>

      <CommunityContainer style={styles.communityContainer} />

      <TouchableOpacity style={styles.writeButton} onPress={onPostButtonPress}>
        <Text style={styles.writeButtonText}>+ 글쓰기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    padding: 10,
    backgroundColor: themeColors.white0,
  },
  scrollContainer1: {
    flexGrow: 1,
  },
  scrollContainer2: {
    flexDirection: 'row',
    backgroundColor: themeColors.white0,
    paddingVertical: 10,
    marginBottom: 10,
    height: 70,
  },
  button: {
    height: 45,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    backgroundColor: themeColors.navy1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    height: 45,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    backgroundColor: themeColors.yellow1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: themeColors.white1,
  },
  textActive: {
    fontSize: 20,
    textAlign: 'center',
    color: themeColors.navy1,
  },
  writeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderColor: themeColors.yellow1,
    borderWidth: 2,
    borderRadius: 5,
    width: 100,
    padding: 6,
    backgroundColor: themeColors.yellow1,
  },
  writeButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: themeColors.navy1,
  },
  communityContainer: {
    marginBottom: 40,
    paddingBottom: 40,
  },
});

export default CommunityScreen;
