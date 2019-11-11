import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Button } from 'react-native';
import { Input } from 'react-native-elements';

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <ScrollView style={this.styles.container}>
        <Text>Login</Text>
        <Input label='Username:' />
        <Input label='Password:' secureTextEntry={true} />
        <Button
          title='Log in'
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title='Create new account'
          onPress={() => this.props.navigation.navigate('SignUp')}
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
