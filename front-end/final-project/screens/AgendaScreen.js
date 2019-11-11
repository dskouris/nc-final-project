import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function AgendaScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Agenda page</Text>
    </ScrollView>
  );
}

AgendaScreen.navigationOptions = {
  title: 'Agenda'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
