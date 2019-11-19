import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as api from '../components/api';
import firebaseSDK from '../components/firebaseSDK';

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
      <ScrollView style={this.styles.container}>
        <Text>Create account</Text>
        <Input label="First Name:" onChangeText={this.onChangeTextFirstName} />
        <Input label="Surname:" onChangeText={this.onChangeTextSurname} />
        <Input
          label="Email:"
          onChangeText={this.onChangeTextEmail}
          autoCapitalize="none"
        />
        <Input label="Username:" onChangeText={this.onChangeTextUsername} />
        <Input
          label="Profile Picture URL:"
          onChangeText={this.onChangeTextProfilePicture}
        />
        <Input
          label="Password:"
          secureTextEntry={true}
          onChangeText={this.onChangeTextPassword}
        />
        <Input
          label="Confirm Password:"
          secureTextEntry={true}
          onChangeText={this.onChangeTextConfirmPassword}
        />
        <Button title="Create Account" onPress={this.onPressCreate} />
      </ScrollView>
    );
  }
  styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#fff'
    }
  });
}

export default SignUpScreen;
