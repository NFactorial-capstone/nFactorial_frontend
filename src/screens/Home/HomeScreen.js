import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import PlanScreen from './PlanScreen';
import SummaryScreen from './SummaryScreen';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', padding: 10}}>
        <Button
          title="기록하기"
          onPress={onFirstButtonPress}
        />
        <Button
          title="통계보기"
          onPress={onSecondButtonPress}
        />
      </View>
      {renderScreen()}
    </View>
  );
}

export default HomeScreen;

