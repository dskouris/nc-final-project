import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import firebaseSDK from '../components/firebaseSDK';
import * as api from '../components/api';
import { View } from 'native-base';



// jack.sparrow@dummy.com
// BlackPearl
// barbossa@dummy.com
// 789789

class LoginScreen extends Component {
  state = { name: '', email: '', password: '', avatar: '' };

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
        this.props.navigation.navigate('Home', {
          uid,
          userInfo
        });
      })
      .catch(console.log);
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
      // <ScrollView >
         <ImageBackground style={styles.container} source={require('../components/images/airplane.png')} >
        
        <View style={styles.loginForm}> 
        <Text>Login</Text>
        <Input
          label='Email:'
          placeholder='example@address.com'
          autoCapitalize='none'
          value={this.state.email}
          onChangeText={this.onChangeTextEmail}
        />
        <Input
          label='Password:'
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={this.onChangeTextPassword}
        />
        <Button
          title='Log in'
          onPress={this.onPressLogin}
          buttonStyle={{ width: 200, margin: 10 }}
        />
        <Button
          title='Create new account'
          onPress={() => this.props.navigation.navigate('SignUp')}
          buttonStyle={{ width: 200, margin: 10, backgroundColor: 'green' }}
        />

        </View>
         </ImageBackground>
      // </ScrollView>
    );
  }
}



    const styles = StyleSheet.create({
      container: {
        flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
        backgroundColor: '#fff'
      }, 
      loginForm: {

       width: '80%',
       height: '20%',
        // marginHorizontal: 180,
        
      }
    });

export default LoginScreen;
