import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CommunityScreen from '../screens/Community/CommunityScreen';
import PostScreen from '../screens/Community/PostScreen';
import PostDetailScreen from '../screens/Community/PostDetailScreen';

const Stack = createStackNavigator();

const CommunityStack = () => {
  return (
    <Stack.Navigator initialRouteName="Community">
      <Stack.Screen name="Community" component={CommunityScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Post" component={PostScreen}  options={{ headerTitle: '글쓰기' }}/>
      <Stack.Screen name="PostDetail" component={PostDetailScreen} options={{ title: '글 상세' }} />
    </Stack.Navigator>
  );
};

export default CommunityStack;