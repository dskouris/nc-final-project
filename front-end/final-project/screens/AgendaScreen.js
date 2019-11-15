import React from "react";
import { ScrollView, StyleSheet, Text, Button, View } from "react-native";
import { Container, Header, Tab, Tabs, Icon, TabHeading } from "native-base";
import AgendaCard from "../components/AgendaScreen/AgendaCard";

class AgendaScreen extends React.Component {
  state = {
    going: [
      {
        name: "Eiffel tower",
        date: "24122019",
        id: "254546",
        img:
          "https://amazingpict.com/wp-content/uploads/2015/04/eiffel-tower-150x150.jpg",
        type: "Landmark",
        address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
        coords: { lat: 48.8583701, long: 2.2944813 }
      },

      {
        name: "Champs Elysee",
        date: "24122019",
        id: "545646",
        img:
          "http://3.bp.blogspot.com/--Ed0R-xixsw/T5ISdN55CyI/AAAAAAAAJGw/y0-5tCHYe8A/s320/France_Paris_ChampsElysees2.jpg",
        type: "Landmark",
        address: "Champs-Élysées. Faubourg du Roule., Paris P4 78FF",
        coords: { lat: 48.8683078, long: 2.3000216 }
      },

      {
        name: "Manchester Cathedral",
        id: "545797",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-media2.fl.yelpcdn.com%2Fbphoto%2FebnpeaM5JZbySlcxWCi1kQ%2Fo.jpg&f=1",
        type: "Cathedral",
        date: "24122019",
        address: "Victoria Street, Manchester M3 1SX, City Centre",
        coords: { lat: 53.4852373, long: -2.2465376 }
      }
    ],
    history: [
      {
        name: "Champs Elysee",
        date: "21122019",
        id: "545646",
        img:
          "http://3.bp.blogspot.com/--Ed0R-xixsw/T5ISdN55CyI/AAAAAAAAJGw/y0-5tCHYe8A/s320/France_Paris_ChampsElysees2.jpg",
        type: "Landmark",
        address: "Champs-Élysées. Faubourg du Roule., Paris P4 78FF",
        coords: { lat: 48.8683078, long: 2.3000216 }
      },

      {
        name: "Manchester Cathedral",
        id: "545797",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-media2.fl.yelpcdn.com%2Fbphoto%2FebnpeaM5JZbySlcxWCi1kQ%2Fo.jpg&f=1",
        type: "Cathedral",
        date: "22122019",
        address: "Victoria Street, Manchester M3 1SX, City Centre",
        coords: { lat: 53.4852373, long: -2.2465376 }
      }
    ]
  };

  // make check is going from agenda to see see info
  render() {
    return (
      <View style={styles.container}>
        {this.state.going.map(location => {
          return (
            <AgendaCard
              navigation={this.props.navigation}
              location={location}
              key={location.id}
            />
          );
        })}
      </View>
    );
  }
}

AgendaScreen.navigationOptions = {
  title: "Agenda"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default AgendaScreen;
