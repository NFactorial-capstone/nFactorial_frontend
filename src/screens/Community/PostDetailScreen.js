import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import themeColors from '../../../assets/styles/themeColors';

const PostDetailScreen = ({ route }) => {
  const { id, title, detail } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>{detail}</Text>
      </View>
      <Text style={styles.author}>작성일 : /작성자: {id} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft : 10
  },
  detailContainer: {    
    height : 180,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: themeColors.navy0
  },
  detail: {
    fontSize: 18,
    marginBottom: 20,
    margin : 10
  },
  author: {
    fontSize: 16,
    marginTop: 5,
    color: '#888',
  },
});

export default PostDetailScreen;
