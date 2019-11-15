import React, { Component } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Input, Button } from "react-native-elements";

class SignUpScreen extends Component {
  state = {
    user: {
      firstName: "",
      surname: "",
      email: "",
      username: "",
      img: "",
      age: "",
      gender: "",
      dob: ""
    }
  };
  render() {
    return (
      <ScrollView style={this.styles.container}>
        <Text>Create account</Text>
        <Input label="First Name:" />
        <Input label="Surname:" />
        <Input label="Email:" />
        <Input label="Username:" />
        <Input label="Profile Picture URL:" />
        <Input label="Password:" secureTextEntry={true} />
        <Input label="Confirm Password:" secureTextEntry={true} />
        <Button
          title="Create Account"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </ScrollView>
    );
  }
  styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: "#fff"
    }
  });
}

export default SignUpScreen;
