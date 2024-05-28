import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeColors from '../../../../assets/styles/themeColors';

const PostContainer = ({ id, title, detail }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('PostDetail', { id, title, detail });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.outerContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDetail} numberOfLines={2} ellipsizeMode="tail">
          {detail}
        </Text>
        <View style={styles.bottomDetailContainer}>
          <Text style={styles.textBottomDetail}>작성자 : {id}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: themeColors.white0,
    marginVertical: 10,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: themeColors.navy0,
    padding: 10,
    position: 'relative',
  },
  textTitle: {
    fontSize: 20,
    marginHorizontal: 7,
    marginVertical: 5,
  },
  textDetail: {
    fontSize: 15,
    marginHorizontal: 7,
    marginTop: 0,
    marginBottom: 10,
  },
  bottomDetailContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  textBottomDetail: {
    fontSize: 15,
  },
});

export default PostContainer;
