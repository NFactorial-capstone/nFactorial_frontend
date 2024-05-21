import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import ExerciseModal from './ExerciseModal';
import themeColors from '../../../../assets/styles/themeColors';

const TouchBox = ({ select_category }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [textList, setTextList] = useState(["기록된 내용이 없습니다"]);

    const handlePress = () => {
        setModalVisible(!modalVisible);
    };

    let classPropsForListModal = null;
  
    if (select_category === "운동기록") {
        classPropsForListModal = 1;
    } else if (select_category === "식단기록") {
        classPropsForListModal = 2;
    } else if (select_category === "몸상태") {
        classPropsForListModal = 3;
    } else {
        classPropsForListModal = 0;
    }

    return (
        <View>
            <TouchableOpacity onPress={handlePress} style={{ justifyContent: 'center', alignContent: 'center' }}>
                <View style={styles.textBox}>
                    <View style={styles.textView}>
                        <Text style={{ fontSize: 25, marginBottom: 8}}>{select_category}</Text>
                        {textList.map((text, index) => (
                            <Text style={{fontSize: 18}} key={index}>{text}</Text> // 매 클릭마다 업데이트된 텍스트 목록을 렌더링
                        ))}
                    </View>
                </View>
                {modalVisible && (
                    <ExerciseModal
                        isVisible={modalVisible}
                        onClose={() => setModalVisible(false)}
                    />
                )}
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
