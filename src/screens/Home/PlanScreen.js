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

  const handleWeightChange = (newWeight) => {
      setWeight(newWeight);
      console.log("Updated weight:", newWeight);
  };


  return (
    <View style={{justifyContent: 'center', alignContent: 'center'}}>
      <ScrollView>
          <Calendar />
          <ProgressBox gauge= "0" style={{marginTop: 20}}/>
          <PhysicalBox onWeightChange = {handleWeightChange}/>
          <TouchBox select_category="운동기록"/>
          <TouchBox select_category="식단기록"/>
          <TouchBox select_category="몸상태"/>
      </ScrollView>

    </View>
  );
};
const styles = StyleSheet.create({
});

export default PlanScreen;
