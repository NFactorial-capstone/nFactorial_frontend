import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import TouchTextBox from './TouchTextBox';

const getDaysInMonth = (year, month) => {
  const date = new Date(year, month, 0);
  const days = [];
  for (let i = 1; i <= date.getDate(); i++) {
    days.push(i);
  }
  return days;
};

const ScrollCalendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [showTextBox, setTextBox] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const days = getDaysInMonth(year, month);

  useEffect(() => {
    // 이펙트를 사용하여 컴포넌트가 마운트될 때 오늘 날짜를 자동으로 선택하도록 합니다.
    setSelectedDay(today.getDate());
  }, []);

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 2, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month, 1));
  };

  const selectDay = (day) => {
    setSelectedDay(day);
  };

  const isToday = (day) => {
    return today.getDate() === day && today.getMonth() + 1 === month && today.getFullYear() === year;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Button title="<" onPress={previousMonth} />
        <Text style={styles.header}>{`${year}년 ${month}월`}</Text>
        <Button title=">" onPress={nextMonth} />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.daysContainer}
      >
        {days.map((day) => (
          <TouchableOpacity key={day} style={[
            styles.dayButton,
            isToday(day) ? styles.today : undefined,
            day === selectedDay ? styles.selectedDay : undefined
          ]} onPress={() => {selectDay(day)}}>
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  daysContainer: {
    flexDirection: 'row',
  },
  dayButton: {
    marginHorizontal: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dayText: {
    textAlign: 'center',
  },
  selectedDay: {
    backgroundColor: '#4CAF50', // 선택된 날짜의 배경 색상
    color: 'white', // 선택된 날짜의 텍스트 색상
  },
  today: {
    backgroundColor: '#FF6347', // 오늘 날짜의 배경 색상
    color: 'white', // 오늘 날짜의 텍스트 색상
  },
});

export default ScrollCalendar;
