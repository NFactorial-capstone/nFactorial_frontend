import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import {ProgressChart} from "react-native-chart-kit";

import ProgressBox from './components/ProgressBox'
import PhysicalBox from './components/PhysicalBox'
import TouchBox from './components/TouchBox';
import Calendar from './components/Calendar'
import themeColors from '../../../assets/styles/themeColors';


const PlanScreen = () => {

  const [weight, setWeight] = useState('0');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleWeightChange = (newWeight) => {
      setWeight(newWeight);
      console.log("Updated weight:", newWeight);
  };

  const handleDateSelected = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={{justifyContent: 'center', alignContent: 'center'}}>
      <ScrollView>
          <Calendar onDateSelected={handleDateSelected} />
          {selectedDate && <Text>선택된 날짜: {selectedDate.format('YYYY-MM-DD')}</Text>}
          <ProgressBox gauge= "0"/>
          <PhysicalBox onWeightChange = {handleWeightChange}/>
          <TouchBox select_category="운동"/>
          <TouchBox select_category="식단"/>
      </ScrollView>

    </View>
  );
};
const styles = StyleSheet.create({
});

export default PlanScreen;
