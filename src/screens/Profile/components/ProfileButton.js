import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import themeColors from '../../../../assets/styles/themeColors';

const ProfileButton = ({ ButtonCategory }) => {
  return (
    <TouchableOpacity>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text1}>{ButtonCategory}</Text>
          <Text style={[styles.text1, styles.text2]}>0</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    height: 100,
    width: 75,
    backgroundColor: themeColors.white0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin : 3
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text1: {
    marginTop: 10,
    textAlign: 'center',
  },
  text2: {
    marginTop: 15,
    fontSize: 30,
  },
});

export default ProfileButton;


