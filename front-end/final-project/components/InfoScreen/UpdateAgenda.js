import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

class UpdateAgenda extends Component {
  state = {
    date: new Date().toISOString().split('T')[0]
  };
  styles = {
    button: {
      marginTop: 30,
      marginHorizontal: 30,
      backgroundColor: '#E9446A',
      borderRadius: 4,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
  render() {
    return (
      <View>
        {this.props.isGoing ? (
          <TouchableOpacity
            style={this.styles.button}
            onPress={() => this.props.removeFromAgenda(this.state.date)}
          >
            <Text style={{ color: '#FFF', fontWeight: '500' }}>
              Remove from agenda
            </Text>
          </TouchableOpacity>
        ) : (
          <>
            <DatePicker
              style={{ width: 200 }}
              date={this.state.date}
              mode='date'
              placeholder={this.state.date}
              format='YYYY-MM-DD'
              minDate={new Date()}
              maxDate='2025-01-01'
              confirmBtnText='Confirm'
              cancelBtnText='Cancel'
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={date => {
                this.setState({ date });
              }}
            />
            <TouchableOpacity
              style={this.styles.button}
              onPress={() => this.props.addToAgenda(this.state.date)}
            >
              <Text style={{ color: '#FFF', fontWeight: '500' }}>
                Add to agenda
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  }
}

export default UpdateAgenda;
