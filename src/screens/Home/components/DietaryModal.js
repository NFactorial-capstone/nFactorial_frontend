import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView, TextInput, Dimensions } from 'react-native';
import axios from 'axios';
import themeColors from '../../../../assets/styles/themeColors';

const DietaryModal = ({ isVisible, onClose }) => {
  const [nameList, setNameList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [foodQuantities, setFoodQuantities] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.post('http://52.68.188.192:8080/backend/food/search', 
        {}, 
        { params: { name: '' } }
      );
      const fetchedNameList = response.data.map(item => item.foodName);
      setNameList(fetchedNameList);
      setFilteredList(fetchedNameList);
    } catch (error) {
      console.error('HTTP error, POST', error);
    }
  };

  useEffect(() => {
    if (isVisible) {
      fetchData();
    }
  }, [isVisible]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = nameList.filter(name => name.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredList(filtered);
    } else {
      setFilteredList(nameList);
    }
  }, [searchQuery, nameList]);

  const handleFoodSelect = (food) => {
    if (!selectedFoods.includes(food)) {
      setSelectedFoods([...selectedFoods, food]);
      setFoodQuantities({ ...foodQuantities, [food]: 100 });
    }
  };

  const handleQuantityChange = (food, change) => {
    setFoodQuantities(prevQuantities => ({
      ...prevQuantities,
      [food]: Math.max(0, prevQuantities[food] + change) // Prevent negative values
    }));
  };

  const handleFoodRemove = (food) => {
    setSelectedFoods(selectedFoods.filter(item => item !== food));
    const { [food]: _, ...newQuantities } = foodQuantities;
    setFoodQuantities(newQuantities);
  };


//선택된 음식 데이터 db에 저장
const handleSaveAndClose = async () => {
  try {
    const foodData = selectedFoods.map(food => ({
      email : "",
      date: "",
      foodName: food,
      ml_g: foodQuantities[food]
    }));

    const params = foodData.reduce((acc, item, index) => {
      acc[`foods[${index}][name]`] = item.name;
      acc[`foods[${index}][quantity]`] = item.quantity;
      return acc;
    }, {});

    await axios.post('http://52.68.188.192:8080/backend/food/register', 
    {},
     { params });
  } catch (error) {
    console.error('Error saving food data', error);
  } finally {      
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
        <Text style={styles.modalTitle}>식단 계획하기</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="검색어를 입력하세요"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <View style={{ height: 270, width: '100%' }}>
          <ScrollView style={styles.scrollView}>
            {filteredList.map((name, index) => (
              <TouchableOpacity key={index} style={styles.workOutButton} onPress={() => handleFoodSelect(name)}>
                <Text style={styles.buttonText}>{name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.modalInputView}>
          <ScrollView>
            {selectedFoods.map((food, index) => (
              <View key={index} style={styles.foodItem}>
                <TouchableOpacity onPress={() => handleFoodRemove(food)} style={styles.removeButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <View style={styles.foodInfo}>
                  <Text style={styles.modalInputText}>{food}</Text>
                </View>
                <View style={styles.quantityControl}>
                  <TouchableOpacity onPress={() => handleQuantityChange(food, -100)} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{foodQuantities[food]}g</Text>
                  <TouchableOpacity onPress={() => handleQuantityChange(food, 100)} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={handleSaveAndClose}>
          <Text style={styles.closeButtonText}>확인</Text>
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
  quantityButtonText:{
    textAlign: 'center',
    color: themeColors.white0,
    fontSize : 18
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: themeColors.yellow0,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 30,
    height: 30,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  quantityText: {
    fontSize: 16,
  },
  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  foodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: themeColors.red0,
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor : themeColors.navy1,
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default DietaryModal;
