import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import {ProgressChart} from "react-native-chart-kit";

import ProgressBox from './components/ProgressBox'
import PhysicalBox from './components/PhysicalBox'
import DietaryBox from './components/DietaryBox';
import ExerciseBox from './components/ExerciseBox';
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
          <ProgressBox gauge= "0"/>
          <PhysicalBox onWeightChange = {handleWeightChange}/>
          <ExerciseBox selectedDate={selectedDate}/>
          <DietaryBox selectedDate={selectedDate}/>
      </ScrollView>

    </View>
  );
};
const styles = StyleSheet.create({
});

export default PlanScreen;
