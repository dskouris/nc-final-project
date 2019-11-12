import React from 'react';
import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home page here</Text>
      <Button
        title='Click to see more info'
        onPress={() => navigation.navigate('Info', { back: 'Home' })}
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home'
};
