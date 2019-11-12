//props: time, name,
import React from 'react';
import { View, Text, Button } from 'react-native';

const AgendaCard = ({ navigation }) => {
  return (
    <View>
      <Text>Location name</Text>
      <Text>Going here at: 12:30</Text>
      <Button
        title='see info for a location'
        onPress={() => navigation.navigate('Info', { back: 'Agenda' })}
      />
    </View>
  );
};

export default AgendaCard;
