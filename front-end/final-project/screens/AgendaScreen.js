import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import AgendaCard from '../components/AgendaScreen/AgendaCard';

class AgendaScreen extends React.Component {
  state = {
    locations: [
      { name: 'Eiffel tower', time: 1230, id: 25454656 },
      { name: 'Champs Elysee', time: 1300, id: 5456465 },
      { name: 'Louvre', time: 1400, id: 54646546 }
    ]
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.locations.map(location => {
          return (
            <AgendaCard
              navigation={this.props.navigation}
              location={location}
              key={location.id}
            />
          );
        })}
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
