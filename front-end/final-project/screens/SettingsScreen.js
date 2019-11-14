import React from 'react';
import { Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

export default function SettingsScreen() {
  return (
    <>
      <Text>Settings</Text>
      <Input label='Username:' />
      <Button title='Pick a profile pic' />
      // will add image picker functionality here -- dim
    </>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Settings'
};
