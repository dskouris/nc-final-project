import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function InfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Info page</Text>
      <Button
        title='go back'
        onPress={() => navigation.navigate(navigation.getParam('back', 'Home'))}
      />
    </View>
  );
}

InfoScreen.navigationOptions = {
  title: 'Info',
  header: true
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
