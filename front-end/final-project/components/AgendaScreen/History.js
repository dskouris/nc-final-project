import React, { Component } from 'react';
import { ScrollView, ImageBackground, StyleSheet, Text } from 'react-native';
import firebaseSDK from '../firebaseSDK';
import HistoryCard from './HistoryCard';
import Loading from '../HomeScreen/Loading';
import * as api from '../api';

class History extends Component {
  state = { user: {}, isLoading: true };
  componentDidMount() {
    const uid = firebaseSDK.uid;
    return api
      .getUserData(uid)
      .then(user => this.setState({ user, isLoading: false }));
  }
  render() {
    return this.state.isLoading ? (
      <Loading />
    ) : (
      <ImageBackground
        style={styles.container}
        source={require('../images/landmarks.png')}
      >
        <ScrollView>
          {this.state.user.Agenda.history.length ? (
            this.state.user.Agenda.history.map(place => {
              return (
                <HistoryCard
                  place={place}
                  key={place.id}
                  navigation={this.props.navigation}
                />
              );
            })
          ) : (
            <Text style={{ textAlign: 'center', marginTop: 50 }}>
              You need to visit some places first!{' '}
            </Text>
          )}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // justifyContent: 'center'
  }
});

export default History;
