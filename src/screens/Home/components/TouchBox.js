import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import ExerciseModal from './ExerciseModal';
import DietaryModal from './DietaryModal'
import themeColors from '../../../../assets/styles/themeColors';

const TouchBox = ({ select_category }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [textList, setTextList] = useState(["기록된 내용이 없습니다"]);

    const handlePress = () => {
        setModalVisible(!modalVisible);
    };

    const renderModal = () => {
        if (select_category === '운동') {
            return (
                <ExerciseModal
                    isVisible={modalVisible}
                    onClose={() => setModalVisible(false)}
                />
            );
        } else if (select_category === '식단') {
            return (
                <DietaryModal
                    isVisible={modalVisible}
                    onClose={() => setModalVisible(false)}
                />
            );
        }
        return null;
    };

    return (
        <View>
            <TouchableOpacity onPress={handlePress} style={{ justifyContent: 'center', alignContent: 'center' }}>
                <View style={styles.textBox}>
                    <View style={styles.textView}>
                        <Text style={{ fontSize: 25, marginBottom: 8}}>{select_category}</Text>
                        {textList.map((text, index) => (
                            <Text style={{fontSize: 18}} key={index}>{text}</Text>
                        ))}
                    </View>
                </View>
                {modalVisible && renderModal()}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
        textBox : {
            alignContent: 'center', 
            width: '90%', 
            height: 300, 
            marginHorizontal: 23, 
            marginVertical: 8, 
            borderRadius: 4, 
            backgroundColor: themeColors.white0, 
            borderRadius: 20, 
            borderColor: themeColors.navy1,
            borderWidth : 2
        },
        textView: {
            padding: 10
        }

    }
);

export default TouchBox;
