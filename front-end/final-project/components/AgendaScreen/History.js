import React from "react";
import { Text } from "react-native";
import { Container, Content, Card, CardItem, Button } from "native-base";

export default function History(props) {
  return (
    <Container>
      <Content>
        {props.history.map(place => {
          return (
            <Card key={place.id}>
              <CardItem>
                <Text>{place.name} - </Text>
                <Text note>Going there on: {place.date}</Text>
                <Button
                  iconLeft
                  info
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
        })}
      </Content>
    </Container>
  );
}
