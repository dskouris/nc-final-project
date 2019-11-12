import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function AgendaScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text>Agenda page</Text>
      <Button
        title='see info for a location'
        onPress={() => navigation.navigate('Info', { back: 'Agenda' })}
      />
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
