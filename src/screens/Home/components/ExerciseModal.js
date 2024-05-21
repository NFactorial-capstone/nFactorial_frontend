import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, ScrollView, Dimensions } from 'react-native';
import { exerciseArr, exercise_back_arr, exercise_chest_Arr, FoodArr } from './data/category-list';
import axios from 'axios';


import themeColors from '../../../../assets/styles/themeColors';


const ExerciseModal = ({ isVisible, onClose}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalView, setModalView] = useState('bodyPart');
  const [nameList, setNameList] = useState([]);


  useEffect(()=> {
    const fetchData = async () => {
      try{
        const response = await axios.post('http://52.68.188.192:8080/backend/exercise/search')
        const nameList = response.data.map(item => item.name);
        setNameList(nameList);
      }catch(error) {
        console.error('http error, post', error)
      }
    };
    fetchData();
  }, [])


  const handleButtonPress = (buttonName) => {
    console.log(`${buttonName} 버튼이 눌렸습니다.`);
    setModalView('workOut');
  };

  let categoryList = exerciseArr;
  let categoryTitle = "운동";
  let workOutList;


  const filteredCategoryList = categoryList.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const render = () => {
    if(modalView === 'bodyPart'){
      return(
          <View style={styles.buttonContainer}>
            {filteredCategoryList.map((buttonName, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => handleButtonPress(buttonName)}
              >
                <Text style={styles.buttonText}>{buttonName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) 
    }
    else if(modalView === 'workOut'){
      return(
        <View style = {{height : 270, width: '100%'}}>
            <TouchableOpacity style= {{justifyContent: 'flex-end', flexDirection: 'row', padding : 10}} onPress={() => setModalView('bodyPart')}>
              <Text>뒤로가기</Text>
            </TouchableOpacity>
            <ScrollView style={styles.scrollView}>
                {nameList.map((name, index) => (
                  <TouchableOpacity style = {styles.workOutButton}>
                    <Text style={styles.buttonText} key={index}>{name}</Text>
                  </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
      );
    }
    else{
      return(
        <View></View>
      );
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>{categoryTitle}</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="검색어를 입력하세요"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

          {render()}
          

        <View style={styles.modalInputView}>
            <Text style={styles.modalInputText}>test</Text>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>닫기</Text>
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxHeight: Dimensions.get('window').height * 0.8
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20
  },
  searchInput: {
    height: 40,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
  },
  scrollView: {
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height : 270
  },
  button: {
    backgroundColor: themeColors.white0,
    borderColor: themeColors.navy1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: 10,
    height : Dimensions.get('window').width * 0.13,
    width: Dimensions.get('window').width * 0.3,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize : 20
  },
  closeButton: {
    backgroundColor: themeColors.navy1,
    padding: 10,
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    textAlign: 'center',
    color: themeColors.white0,
  },
  modalInputView: {
    height : 200, 
    backgroundColor: themeColors.white0,
    borderColor : themeColors.yellow0,
    borderWidth: 2,
    borderStyle: 'dotted', 
    margin: 15, 
    width: "100%",
    borderRadius: 10
  },
  modalInputText: {
    margin : 10,
    fontSize : 18
  },
  workOutButton: {
    backgroundColor: themeColors.white0,
    borderColor: themeColors.navy1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: 10,
    height : Dimensions.get('window').width * 0.13,
    width: '100%',
    marginTop: 10,
    borderRadius: 5,
  },
});

export default ExerciseModal;
