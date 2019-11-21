import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  StatusBar
} from 'react-native';
import * as api from '../components/api';
import firebaseSDK from '../components/firebaseSDK';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';

class SignUpScreen extends Component {
  static navigationOptions = {
    header: null
  };

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
        const response = await firebaseSDK.createAccount(
          user,
          this.createSuccess,
          this.createFail
        );
      } catch ({ message }) {
        console.log('create account failed. catch error:' + message);
      }
    } else {
      alert('Signup failed - please ensure that passwords match.');
    }
  };

  createSuccess = uid => {
    console.log('firebase create user success', uid);
    newUser = this.createUserObject(uid);
    api
      .addNewUser(newUser)
      .then(postedUser => {
        if (postedUser) {
          alert('Your new profile has been created. Please login.');
          this.props.navigation.navigate('Login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  createFail = () => {
    console.log('error on firebase creation');
    alert('Account creation failed - please try again later');
  };

  createUserObject = uuid => {
    const newUserObj = {
      uuid: uuid,
      email: this.state.email,
      username: this.state.username,
      Profile: {
        firstname: this.state.firstname,
        lastname: this.state.surname,
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
    return JSON.stringify(newUserObj);
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
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <StatusBar barStyle="light-content"></StatusBar>
          <View style={styles.container}>
            <Image
              source={require('./images/wandr.png')}
              style={styles.image}
            />

            <Text style={styles.welcome}>{`W A N D R`}</Text>

            <TouchableOpacity style={{ alignSelf: 'center', marginTop: 12 }}>
              <Text
                style={{ color: '#E9446A', fontWeight: '500', fontSize: 13 }}
                onPress={() => this.props.navigation.navigate('Login')}
              >
                {`<- Cancel`}
              </Text>
            </TouchableOpacity>

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
                  autoCapitalize="none"
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
        </KeyboardAvoidingView>
      </ScrollView>
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
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 20
  },
  form: {
    marginTop: 40,
    marginHorizontal: 60,
    marginBottom: 20,
    justifyContent: 'center',
    // width: 300,
    maxHeight: '80%'
  },
  input: {
    color: '#8A8F9E',
    fontSize: 18,
    textTransform: 'uppercase'
  },

  center: {
    justifyContent: 'center',

    margin: 10
  },
  round: {
    textAlign: 'center',
    height: 30,
    borderWidth: 1,
    borderColor: '#DE4C5D',
    borderRadius: 40,
    backgroundColor: '#FFF'
  },
  button: {
    marginTop: 60,
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
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 60,
    alignSelf: 'center',
    resizeMode: 'contain'
  }
});

export default SignUpScreen;
