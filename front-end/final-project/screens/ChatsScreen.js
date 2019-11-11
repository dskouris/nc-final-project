import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function ChatsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Chats here</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});

ChatsScreen.navigationOptions = {
  title: 'Chats'
};
