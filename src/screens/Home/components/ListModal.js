import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { exerciseArr } from './data/category-list';
import { FoodArr } from './data/category-list';

const ListModal = ({ isVisible, onClose, classType}) => {
  const handleButtonPress = (buttonName) => {
    console.log(`${buttonName} 버튼이 눌렸습니다.`);
  };
  
  let categoryList;

  if(classType==1){
    categoryList=exerciseArr;
  }else if(classType==2){
    categoryList=FoodArr;
  }else{
    categoryList = ['버튼 1', '버튼 2', '버튼 3']
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>버튼 목록</Text>
        {categoryList.map((buttonName, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handleButtonPress(buttonName)}
          >
            <Text style={styles.buttonText}>{buttonName}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>닫기</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
  }
});

export default ListModal;
