import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

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
          buttonStyle={{ width: 200, margin: 10 }}
        />
        <Button
          title='Create new account'
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
