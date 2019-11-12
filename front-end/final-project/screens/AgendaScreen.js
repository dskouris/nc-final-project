import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import AgendaCard from '../components/AgendaScreen/AgendaCard';

class AgendaScreen extends React.Component {
  state = { locations: [] };
  render() {
    return (
      <ScrollView style={styles.container}>
        <AgendaCard navigation={this.props.navigation} />
        <AgendaCard navigation={this.props.navigation} />
        <AgendaCard navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

AgendaScreen.navigationOptions = {
  title: 'Agenda'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});

export default AgendaScreen;
