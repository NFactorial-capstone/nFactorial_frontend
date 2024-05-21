import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import themeColors from '../../../assets/styles/themeColors';

import PostContainer from './components/PostContainer';
import CommunityContainer from './components/CommunityContainer';

function CommunityScreen() {

  const [currentScreen, setCurrentScreen] = useState(null);

  const onButtonPress = (selectedCategory) => {
    if (selectedCategory === '1') {
      setCurrentScreen('category1');
    } else if (selectedCategory === '2') {
      setCurrentScreen('category2');
    } else if (selectedCategory === '3') {
      setCurrentScreen('category3');
    } else {
      setCurrentScreen('category0');
    }
  };

  const renderScreen = () => {
    if (currentScreen === 'category1') {
        return <CommunityContainer/>
    } else if (currentScreen === 'category2') {
      return <Text>Category 2 Content</Text>;
    } else if (currentScreen === 'category3') {
      return <Text>Category 3 Content</Text>;
    } else {
      return <Text>Select a category</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer1} showsVerticalScrollIndicator={false}>
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer2} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.button} onPress={() => onButtonPress('1')}>
            <Text style={styles.text}>전체글</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButtonPress('2')}>
            <Text style={styles.text}>운동</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButtonPress('3')}>
            <Text style={styles.text}>식단</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButtonPress('4')}>
            <Text style={styles.text}>다이어트 후기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButtonPress('5')}>
            <Text style={styles.text}>꿀팁 공유</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButtonPress('6')}>
            <Text style={styles.text}>잡담</Text>
          </TouchableOpacity>
        </ScrollView>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    padding: 10,
    backgroundColor: themeColors.white0
  },
  scrollContainer1: {
    flexGrow: 1,
  },
  scrollContainer2: {
    flexDirection: 'row',
    backgroundColor: themeColors.white0,
    paddingVertical: 10,
    marginBottom: 10,
    height: 70
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
  contentContainer: {
    backgroundColor : themeColors.white0,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: themeColors.white1
  },
});

export default CommunityScreen;
