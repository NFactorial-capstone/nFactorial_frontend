import React, { useState } from 'react';
import ListModal from './ListModal';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import themeColors from '../../../../assets/styles/themeColors';

const TouchTextBox = ({ text }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  let classPropsForListModal = null;

  if(text==="Exercise"){
    classPropsForListModal=1;
  }else if(text==="Dieting"){
    classPropsForListModal=2;
  }else if(text=="몸상태"){
    classPropsForListModal=3;
  }else{
    classPropsForListModal=0;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>

      {modalVisible && (
        <ListModal
          isVisible={modalVisible}
          onClose={toggleModal}
          classType={classPropsForListModal}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColors.white0,
    marginTop: 50,
  },
  text: {
    fontSize: 18,
    color: 'blue',
  }
});

export default TouchTextBox;