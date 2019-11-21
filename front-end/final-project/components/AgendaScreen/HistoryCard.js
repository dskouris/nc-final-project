import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardItem, Button, Right } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default function HistoryCard(props) {
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        marginHorizontal: 10,
        marginTop: 10
      }}
    >
      <Card style={{ backgroundColor: '#fff', paddingHorizontal: 5 }}>
        <CardItem style={{ backgroundColor: '#fff', paddingHorizontal: 10 }}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {props.place.name}
            </Text>
            <Text note>You were here: {props.place.date}</Text>
          </View>
        </CardItem>
      </Card>
    </View>
  );
}
