import React from "react";
import { Text } from "react-native";
import { Container, Content, Card, CardItem, Button } from "native-base";

const AgendaCard = ({ location, navigation }) => {
  return (
    <Card>
      <CardItem>
        <Text>{location.name}</Text>

        <Text>Going there on: {location.date}</Text>
        <Button
          info
          iconRight
          onPress={() =>
            navigation.navigate("Info", {
              back: "Agenda",
              location: location.location,
              isGoing: true
            })
          }
        >
          <Text> See info </Text>
        </Button>
      </CardItem>
    </Card>
  );
};

export default AgendaCard;

// <View>
//   <Text>{location.name}</Text>
//   <Text>Going here on: {location.date}</Text>
//   <Button
//     title='see info'
//     onPress={() =>
//       navigation.navigate('Info', {
//         back: 'Agenda',
//         location: location.location,
//         isGoing: true
//       })
//     }
//   />
// </View>
