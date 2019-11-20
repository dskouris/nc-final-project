import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import * as api from '../components/api';
import firebaseSDK from '../components/firebaseSDK';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';

class SignUpScreen extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    surname: '',
    username: '',
    url: '',
    confirmPassword: ''
  };

  onPressCreate = async () => {
    if (this.state.password === this.state.confirmPassword) {
      try {
        const user = {
          email: this.state.email,
          password: this.state.password
        };
        await firebaseSDK.createAccount(user);
      } catch ({ message }) {
        console.log('create account failed. catch error:' + message);
      }
      this.props.navigation.navigate('Login');
    } else {
      alert('Signup failed - please ensure that passwords match.');
    }
  };

  createUserObject = uuid => {
    return {
      uuid: uuid,
      email: this.state.email,
      username: this.state.username,
      Profile: {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        img: '',
        user_description: '',
        age: '',
        gender: ''
      },
      Agenda: {
        history: [],
        going: []
      }
    };
  };

  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });
  onChangeTextFirstName = firstname => this.setState({ firstname });
  onChangeTextSurname = surname => this.setState({ surname });
  onChangeTextUsername = username => this.setState({ username });
  onChangeTextProfilePicture = url => this.setState({ url });
  onChangeTextConfirmPassword = confirmPassword =>
    this.setState({ confirmPassword });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{`Hello Sign up for New Account!`}</Text>

        <View style={styles.form}>
          <View style={styles.center}>
            <TextInput
              placeholder="Name"
              style={styles.round}
              onChangeText={this.onChangeTextFirstName}
            />
          </View>

          <View style={styles.center}>
            <TextInput
              placeholder="Surname"
              onChangeText={this.onChangeTextSurname}
              style={styles.round}
            />
          </View>

          <View style={styles.center}>
            <TextInput
              placeholder="Email"
              onChangeText={this.onChangeTextEmail}
              style={styles.round}
            />
          </View>

          <View style={styles.center}>
            <TextInput
              placeholder="Username"
              onChangeText={this.onChangeTextUsername}
              style={styles.round}
            />
          </View>

          <View style={styles.center}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={this.onChangeTextPassword}
              style={styles.round}
            />
          </View>

          <View style={styles.center}>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={this.onChangeTextConfirmPassword}
              style={styles.round}
            />
          </View>

          {/* 
           <TouchableOpacity style={styles.button} onPress={this.onPressCreate}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Create Account</Text>
                </TouchableOpacity> */}
          <View style={styles.button}>
            <TouchableOpacity style={styles.update}>
              <MaterialIcons
                name="arrow-forward"
                size={35}
                color="white"
                style={{ marginTop: 1, marginLeft: 2 }}
                onPress={this.onPressCreate}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    backgroundColor: '#FFFF'
  },
  welcome: {
    fontSize: 20,
    fontWeight: '200',
    textAlign: 'center',
    marginTop: 20
  },
  form: {
    marginTop: 50,
    marginHorizontal: 30,
    marginBottom: 20,
    justifyContent: 'center'
  },
  input: {
    color: '#8A8F9E',
    fontSize: 17,
    textTransform: 'uppercase'
  },
  // inputText: {
  //   borderBottomColor: "#8A8F9E",
  //   // borderBottomWidth: StyleSheet.hairlineWidth,
  //   height: 40,
  //   fontSize: 15,
  //   color: "#161F3D",
  //   justifyContent: 'center'
  // },
  center: {
    justifyContent: 'center',
    // flex:1,
    margin: 10
  },
  round: {
    textAlign: 'center',
    height: 40,
    borderWidth: 2,
    borderColor: '#DE4C5D',
    borderRadius: 30,
    backgroundColor: '#FFF'
  },
  button: {
    marginTop: 60,
    //  marginHorizontal: 60,
    // backgroundColor: "#DE4C5D",
    // borderRadius: 20,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },
  update: {
    backgroundColor: '#DE4C5D',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 70,
    height: 70,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SignUpScreen;
