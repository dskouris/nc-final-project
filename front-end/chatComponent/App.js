import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Chat from '../chattyCathy/Components/Chat';
import Login from '../chattyCathy/Components/Login';
import Signup from '../chattyCathy/Components/Signup';

const RootStack = createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  Chat: { screen: Chat }
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
