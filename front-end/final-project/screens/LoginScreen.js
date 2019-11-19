import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import firebaseSDK from '../components/firebaseSDK';
import * as api from '../components/api';

class LoginScreen extends Component {
  state = { name: '', email: '', password: '', avatar: '' };

  onPressLogin = async () => {
    console.log('pressed');
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
    console.log(uid);
    console.log('login successful, navigate to chat.');
    api.getUserData(uid).then(userInfo => {
      console.log(userInfo);
      this.props.navigation.navigate('Home', {
        uid,
        userInfo
      });
    });
    // this.props.navigation.navigate('Home', {
    //   uid,
    //   name: this.state.name,
    //   email: this.state.email,
    //   avatar: this.state.avatar
    // });
  };

  loginFailed = () => {
    alert(
      'Login failure. Username or password not recognised, please try again.'
    );
  };

  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });

  render() {
    return (
      <ScrollView style={this.styles.container}>
        <Text>Login</Text>
        <Input
          label="Email:"
          placeholder="example@address.com"
          autoCapitalize="none"
          value={this.state.email}
          onChangeText={this.onChangeTextEmail}
        />
        <Input
          label="Password:"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={this.onChangeTextPassword}
        />
        <Button
          title="Log in"
          onPress={this.onPressLogin}
          buttonStyle={{ width: 200, margin: 10 }}
        />
        <Button
          title="Create new account"
          onPress={() => this.props.navigation.navigate('SignUp')}
          buttonStyle={{ width: 200, margin: 10, backgroundColor: 'green' }}
        />
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

export default LoginScreen;
