import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Button } from "react-native";
import themeColors from "../../../../assets/styles/themeColors";

const PhysicalBox = ({ onWeightChange }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputWeight, setInputWeight] = useState('0');

    return (
        <View style={styles.centeredContainer}>
            <TouchableOpacity 
                style={styles.outerContainer}
                onPress={() => setModalVisible(true)}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.textStyle}>오늘의 몸무게 : {inputWeight}kg</Text>
                </View>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.fullScreenModal}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputWeight}
                            value={inputWeight}
                            keyboardType="numeric"
                            placeholder="터치해서 몸무게 입력"
                        />
                        <TouchableOpacity onPress={() => {
                            onWeightChange(inputWeight);
                            setModalVisible(!modalVisible);
                        }}>
                            <View style = {{backgroundColor : themeColors.navy1, paddingHorizontal : 20, paddingVertical :10}}>
                                <Text style = {{color : themeColors.white0}}>저장하기</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themeColors.navy1,
        width: '90%',
        borderRadius: 10,
        padding: 10,
    },
    innerContainer: {
        alignItems: 'center',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 20,
        color: themeColors.white0,
    },
    fullScreenModal: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
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
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 15,
        width: '80%',
        fontSize: 18
    }
});

export default PhysicalBox;
