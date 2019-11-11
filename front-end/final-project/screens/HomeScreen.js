import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>Home page here</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home'
};
