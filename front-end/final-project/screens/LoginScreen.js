import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar
} from "react-native";

import firebaseSDK from "../components/firebaseSDK";
import * as api from "../components/api";

class LoginScreen extends Component {
  // this should get rid of the line on top/header
  static navigationOptions = {
    header: null
  };
  state = {
    name: "",
    email: "",
    password: "",
    avatar: ""
  };

  onPressLogin = async () => {
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      avatar: this.state.avatar
    };

    const response = firebaseSDK.login(
      user,
      this.loginSuccess,
      this.loginFailed
    );
  };

  loginSuccess = uid => {
    api
      .getUserData(uid)
      .then(userInfo => {
        this.props.navigation.navigate("Home", {
          uid,
          userInfo
        });
      })
      .catch(console.log);
  };

  loginFailed = () => {
    alert(
      "Login failure. Username or password not recognised, please try again."
    );
  };

  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../components/images/landmarks.png")}
      >
        <ScrollView>
          <Image source={require("./images/wandr.png")} style={styles.image} />
          <StatusBar barStyle="light-content"></StatusBar>

          <Text style={styles.welcome}>{`Welcome to \n Wandr`}</Text>
          <View style={styles.loginForm}>
            <View>
              <Text style={styles.name}>Email</Text>
              <TextInput
                // label='Email:'
                placeholder="example@address.com"
                autoCapitalize="none"
                value={this.state.email}
                onChangeText={this.onChangeTextEmail}
                style={styles.textinput}
              ></TextInput>
            </View>

            <View style={{ marginTop: 30 }}>
              <Text style={styles.name}>Password</Text>
              <TextInput
                secureTextEntry={true}
                autoCapitalize="none"
                value={this.state.password}
                onChangeText={this.onChangeTextPassword}
                style={styles.textinput}
              ></TextInput>
            </View>

            <TouchableOpacity style={styles.button} onPress={this.onPressLogin}>
              <Text style={{ color: "#FFF", fontWeight: "500" }}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}>
              <Text
                style={{ color: "#414959", fontSize: 13 }}
                onPress={() => this.props.navigation.navigate("SignUp")}
              >
                New to Wandr?
                <Text
                  style={{
                    fontWeight: "500",
                    color: "#E9446A"
                  }}
                >
                  Sign Up
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // justifyContent: 'center'
  },
  welcome: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center"
  },
  loginForm: {
    marginTop: 120,
    width: 300,
    maxWidth: "70%",
    marginBottom: 48,
    marginHorizontal: 50
  },
  name: {
    color: "#8A8F9E",
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "400"
  },
  textinput: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"
  },
  button: {
    marginTop: 30,
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 120,
    alignSelf: "center"
  }
});

export default LoginScreen;
