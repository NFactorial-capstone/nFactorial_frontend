import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import PlanScreen from './PlanScreen';
import SummaryScreen from './SummaryScreen';
import themeColors from '../../../assets/styles/themeColors';

function HomeScreen() {
  const [currentScreen, setCurrentScreen] = useState('plan');

  const onFirstButtonPress = () => {
    setCurrentScreen('plan');
  };

  const onSecondButtonPress = () => {
    setCurrentScreen('summary');
  };

  const renderScreen = () => {
    if (currentScreen === 'plan') {
      return <PlanScreen />;
    } else if (currentScreen === 'summary') {
      return <SummaryScreen />;
    } else {
      return <Text>This is</Text>;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.buttonContainer, styles.backgroundStyle]}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'lightgray' : 'white',
            },
            styles.button,
          ]}
          onPress={onFirstButtonPress}
        >
          <Text style={[styles.buttonText, currentScreen === 'plan' ? styles.boldText : null]}>기록하기</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'lightgray' : 'white',
            },
            styles.button,
          ]}
          onPress={onSecondButtonPress}
        >
          <Text style={[styles.buttonText, currentScreen === 'summary' ? styles.boldText : null]}>통계보기</Text>
        </Pressable>
      </View>
      <View style={{ justifyContent: 'center', flex: 1 }}>
        {renderScreen()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle:{
    backgroundColor: themeColors.white0
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  boldText: {
    fontWeight: 'bold'
  }
});

export default HomeScreen;
