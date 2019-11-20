import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import AgendaScreen from '../screens/AgendaScreen';
import ChatsScreen from '../screens/ChatsScreen';
import ChatroomScreen from '../screens/ChatroomScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  config
);
LoginStack.path = '';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
  tabBarOptions: { activeTintColor: '#444851' }
};

HomeStack.path = '';

const AgendaStack = createStackNavigator(
  {
    Agenda: AgendaScreen
  },
  config
);

AgendaStack.navigationOptions = {
  tabBarLabel: 'Agenda',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
    />
  ),
  tabBarOptions: { activeTintColor: '#444851' }
};

AgendaStack.path = '';

const ChatsStack = createStackNavigator(
  {
    Chatrooms: ChatroomScreen,
    Chats: ChatsScreen
  },
  config
);

ChatsStack.navigationOptions = {
  tabBarLabel: 'Chats',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'}
    />
  ),
  tabBarOptions: { activeTintColor: '#444851' }
};

ChatsStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
  tabBarOptions: { activeTintColor: '#444851' }
};

SettingsStack.path = '';

export const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AgendaStack,
  ChatsStack,
  SettingsStack
});

tabNavigator.path = '';

export default tabNavigator;
