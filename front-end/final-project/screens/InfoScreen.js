import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";

import UpdateAgenda from '../components/InfoScreen/UpdateAgenda'


export default class InfoScreen extends Component {
  state = {
    location: {
      name: "Manchester Cathedral",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-media2.fl.yelpcdn.com%2Fbphoto%2FebnpeaM5JZbySlcxWCi1kQ%2Fo.jpg&f=1",
      type: "Cathedral",
      address: "Victoria Street, Manchester M3 1SX, City Centre",
      coords: { lat: 53.4852373, long: -2.2465376 }
    },
    isGoing: false,
    usersGoing: [
      { name: "Tom", uuid: "jjfdjfd294ikvnknv" },
      { name: "Dimitris", uuid: "jjfdjfdff294ikvnknv" },
      { name: "Poulina", uuid: "jjfdjf55554i390" },
      { name: "Sara", uuid: "j55djfd294i390" },
      { name: "Krishan", uuid: "jj66jfd294i390" }
    ],
    userLocation: { lat: 53.4852373, long: -2.2465376 }
  };

  addToAgenda = (date) => {

    this.setState((currentState) => {
    return {  isGoing: !currentState.isGoing }
    })
    alert(date)
  }

  removeFromAgenda = () => {
    this.setState((currentState) => {
      return {  isGoing: !currentState.isGoing }
      })
      // filerring the location place from agenda
      alert('removed from agenda')
  }


  render() {
    const { location, isGoing, usersGoing } = this.state;
    

    return (
      <View style={styles.container}>
        <Button
          title="go back"
          onPress={() =>
            this.props.navigation.navigate(navigation.getParam("back", "Home"))
          }
        />
        <View>
          <Text>{location.name}</Text>
          <Image
            source={{ uri: location.img }}
            style={{ width: "80%", height: 200 }}
          />
          <Text>{usersGoing.length} Going</Text>
          <Text>{isGoing ? "You Are Going" : "You Are Not Going"}</Text>
         
        </View>

        <View> 
        <Text>{location.type}</Text>
        <Text>{location.address}</Text>
        <Text>One km from Location</Text>
        </View>
        <View>
          <UpdateAgenda     isGoing={this.state.isGoing} addToAgenda= {this.addToAgenda}   removeFromAgenda={this.removeFromAgenda}/>
        </View>
      </View>
    );
  }
}

InfoScreen.navigationOptions = {
  title: "Info"
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
