//props: time, name,
import React from 'react';
import { View, Text, Button } from 'react-native';

const AgendaCard = ({ location, navigation }) => {
  return (
    <View>
      <Text>{location.name}</Text>
      <Text>Going here at: {location.time}</Text>
      <Button
        title='see info'
        onPress={() =>
          navigation.navigate('Info', { back: 'Agenda', location })
        }
      />
    </View>
  );
};

export default AgendaCard;
