import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// screen
import HomeScreen from '../screens/Home/HomeScreen';
import HowToScreen from '../screens/HowTo/HowToScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import themeColors from '../../assets/styles/themeColors';


import CommunityStack from './CommunityStack';


const homeName='메인홈';
const communityName = '커뮤니티';
const howtoName = '알아보기';
const settingName = '내정보';


const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={{
          tabBarActiveTintColor: themeColors.yellow0,
          tabBarInactiveTintColor: themeColors.white0,
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 15
          },
          tabBarItemStyle: {
            display: "flex"
          },
          tabBarShowLabel: false,
          tabBarStyle: { paddingBottom: 10, paddingTop: 10, height: 110, backgroundColor: themeColors.navy1 }
        }}
      >
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={howtoName}
          component={HowToScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="scan-sharp" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={communityName}
          component={CommunityStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubble" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={settingName}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default AppNavigator;
