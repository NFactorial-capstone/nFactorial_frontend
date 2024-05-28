import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import DietaryModal from './DietaryModal';
import themeColors from '../../../../assets/styles/themeColors';

const DietaryBox = ({ selectedDate }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [textList, setTextList] = useState(["기록된 내용이 없습니다"]);

    const handlePress = () => {
        setModalVisible(!modalVisible);
    };


    //서버로부터 선택된 날짜의 식단을 받아와 출력
    const handleDataReceived = (data) => {
        console.log('Data received:', data);
        const entriesArray = Object.entries(data);
        console.log(entriesArray);
        setTextList(entriesArray);
    };

    return (
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
            <View style={styles.textBox}>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 25, marginBottom: 8 }}>식단 계획하기</Text>
                    {textList.map((text, index) => (
                        <Text style={{ fontSize: 18 }} key={index}>{text}</Text>
                    ))}
                </View>
                {modalVisible &&                 
                <DietaryModal
                    isVisible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    selectedDate={selectedDate}
                    onDataReceived={handleDataReceived}
                />
                }
                <TouchableOpacity onPress={handlePress} style={styles.editButton}>
                    <Text style={styles.editButtonText}>수정하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textBox: {
        alignContent: 'center', 
        width: '90%', 
        height: 300, 
        marginHorizontal: 23, 
        marginVertical: 8, 
        borderRadius: 4, 
        backgroundColor: themeColors.white0, 
        borderRadius: 20, 
        borderColor: themeColors.navy1,
        borderWidth: 2,
        position: 'relative',
        paddingBottom: 50 // Ensure there is space for the button inside the box
    },
    textView: {
        padding: 10,
        flex: 1
    },
    editButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: themeColors.yellow1, 
        borderRadius: 5, 
        padding: 10, 
        width: 100,
    },
    editButtonText: {
        textAlign: 'center'
    }
});

export default DietaryBox;
