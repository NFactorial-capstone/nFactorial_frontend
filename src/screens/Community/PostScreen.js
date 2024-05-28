import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeColors from '../../../assets/styles/themeColors';

const PostScreen = () => {
  const [title, setTitle] = useState('');
  const [writing, setWriting] = useState('');
  const [date, setDate] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    // 현재 날짜를 가져와서 설정
    const currentDate = new Date().toISOString().split('T')[0];
    setDate(currentDate);
  }, []);

  const handleRegister = () => {
    // 등록 버튼을 눌렀을 때 처리할 로직을 여기에 추가
    // 예: 서버에 데이터 전송, 상태 관리 등
    console.log('Title:', title);
    console.log('Writing:', writing);
    console.log('Date:', date);
    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="제목을 입력하세요"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.textArea}
        placeholder="내용을 입력하세요"
        value={writing}
        onChangeText={(text) => {
          if (text.length <= 256) {
            setWriting(text);
          }
        }}
        multiline
      />
      <View style={styles.infoRow}>
        <Text style={styles.dateText}>작성일: {date}</Text>
        <Text style={styles.charCount}>{writing.length} / 256</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>등록</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  date: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  textArea: {
    height: 150,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    textAlignVertical: 'top', // for Android
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    color: '#666',
  },
  charCount: {
    fontSize: 16,
    color: '#888',
  },
  button: {
    backgroundColor: themeColors.yellow1,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PostScreen;
