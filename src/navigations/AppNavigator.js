import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


// screen
import HomeScreen from '../screens/Home/HomeScreen';
import GoalScreen from '../screens/Goal/GoalScreen';
import HowToScreen from '../screens/HowTo/HowToScreen';
import CommunityScreen from '../screens/Community/CommunityScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import themeColors from '../../assets/styles/themeColors';

const homeName='메인홈';
const communityName = '커뮤니티';
const manageName = '목표설정하기';
const howtoName = '알아보기';
const settingName = '내정보';


const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
          <NavigationContainer>
          <Tab.Navigator
              initialRouteName={homeName} 
              
              tabBarOptions={{
                  tabStyle : {height: 70},
                  labelStyle: {paddingBottom:10, fontSize: 15},
                  activeTintColor: themeColors.yellow0,
                  inactiveTintColor: themeColors.white0,
              }}

              screenOptions={{
                  tabBarShowLabel: false,
                  tabBarStyle: {paddingBottom: 10, paddingTop: 10, height: 110, backgroundColor:themeColors.navy1}
              }}
              
          >
              <Tab.Screen 
              name={homeName} 
              component={HomeScreen} 
              options={{ tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
              }}
                  />
              <Tab.Screen 
              name={manageName} 
              component={GoalScreen}
              options={{ tabBarIcon: ({ color, size }) => (
                  <Ionicons name="today" color={color} size={size} />
                ),
              }}
              />
              <Tab.Screen 
              name={howtoName} 
              component={HowToScreen}
              options={{ tabBarIcon: ({ color, size }) => (
                  <Ionicons name="scan-sharp" color={color} size={size} />
                ),
              }}
              />
              <Tab.Screen 
              name={communityName} 
              component={CommunityScreen} 
              options={{ tabBarIcon: ({ color, size }) => (
                  <Ionicons name="chatbubble" color={color} size={size} />
                ),
              }}
              />
              <Tab.Screen 
              name={settingName} 
              component={ProfileScreen}
              options={{ tabBarIcon: ({ color, size }) => (
                  <Ionicons name="information-circle" color={color} size={size} />
                ),
              }} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}

export default AppNavigator;
