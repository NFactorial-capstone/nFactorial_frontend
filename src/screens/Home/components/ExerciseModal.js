import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, ScrollView, Dimensions } from 'react-native';
import { exerciseArr} from './data/category-list';
import axios from 'axios';
import themeColors from '../../../../assets/styles/themeColors';

const ExerciseModal = ({ isVisible, onClose, selectedDate, onDataReceived }) => {
  const [modalView, setModalView] = useState('bodyPart');
  const [nameList, setNameList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([]); // 선택된 운동 리스트 상태 변수

  const fetchData = async (themuscle) => {
    try {
      const response = await axios.post('http://52.68.188.192:8080/backend/exercise/part', 
        {}, 
        { params: { muscle: `{${themuscle}}` } }
      );
      const fetchedNameList = response.data.map(item => item.name);
      setNameList(fetchedNameList);
    } catch (error) {
      console.error('http error, post', error);
    }
  };

  const handleButtonPress = (muscle) => {
    setSearchQuery(muscle);
    fetchData(muscle);
    setModalView('workOut');
  };

  const handleExerciseSelect = (exercise) => {
    if (!selectedExercises.includes(exercise)) {
      setSelectedExercises([...selectedExercises, exercise]);
    }
  };

  const handleExerciseRemove = (exercise) => {
    setSelectedExercises(selectedExercises.filter(item => item !== exercise));
  };

  const render = () => {
    if (modalView === 'bodyPart') {
      return (
        <View style={styles.buttonContainer}>
          {exerciseArr.map((buttonName, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleButtonPress(buttonName)}
            >
              <Text style={styles.buttonText}>{buttonName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    } else if (modalView === 'workOut') {
      return (
        <View style={{ height: 270, width: '100%' }}>
          <TouchableOpacity style={{ justifyContent: 'flex-end', flexDirection: 'row', padding: 10 }} onPress={() => setModalView('bodyPart')}>
            <Text>뒤로가기</Text>
          </TouchableOpacity>
          <ScrollView style={styles.scrollView}>
            {nameList.map((name, index) => (
              <TouchableOpacity key={index} style={styles.workOutButton} onPress={() => handleExerciseSelect(name)}>
                <Text style={styles.buttonText}>{name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      );
    } else {
      return <View></View>;
    }
  };

  ////////////////////db에 저장
  const handleSaveAndClose = async () => {
    try {

    } catch (error) {
      console.error('Error saving food data', error);
    } finally {
      onDataReceived(selectedExercises);
      onClose();
    }
  };



  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>운동 계획하기</Text>
        <Text style={{ color: themeColors.navy0 }}>
          {selectedDate ? selectedDate.format('YYYY-MM-DD') : '날짜가 선택되지 않았습니다'}
        </Text>
        {render()}
        <View style={styles.modalInputView}>
        {selectedExercises.map((exercise, index) => (
          <View key={index} style={styles.selectedExerciseItem}>
          <TouchableOpacity style={styles.removeButton} onPress={() => handleExerciseRemove(exercise)}>
          <Text style={styles.removeButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.selectedExerciseText}>    {exercise}</Text>
          </View>
          ))}
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText} onPress={handleSaveAndClose}>닫기</Text>
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
  selectedExerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    },
    removeButton: {
      backgroundColor : themeColors.navy1,
      width: 30,
      height: 30,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    removeButtonText: {
    color: themeColors.white0,
    fontWeight: 'bold',
    fontSize: 20,
    },
});

export default ExerciseModal;
