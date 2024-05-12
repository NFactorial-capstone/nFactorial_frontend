import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import ScrollCalendar from './components/ScrollCalendar';
import TouchTextBox from './components/TouchTextBox';

import themeColors from '../../../assets/styles/themeColors';


const PlanScreen = () => {
  return (
    <ScrollView>
      <ScrollCalendar/>
      <TouchTextBox text="Exercise"/>
      <TouchTextBox text="Dieting"/>
      <TouchTextBox text="몸상태"/>
    </ScrollView>


  );
};
const styles = StyleSheet.create({
});

export default PlanScreen;
