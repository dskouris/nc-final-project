import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function InfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title='go back'
        onPress={() => navigation.navigate(navigation.getParam('back', 'Home'))}
      />
      <Text>Info for individual location goes here</Text>
    </View>
  );
}

InfoScreen.navigationOptions = {
  title: 'Info'
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
