import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';

class UpdateAgenda extends Component {
  state = {
    date: ''
  };
  render() {
    return (
      <View>
        {this.props.isGoing ? (
          <Button
            title='Cancel'
            onPress={() => this.props.removeFromAgenda(this.state.date)}
          />
        ) : (
          <>
            <DatePicker
              style={{ width: 200 }}
              date={this.state.date}
              mode='date'
              placeholder='select date'
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
                this.setState({ date: date });
              }}
            />

            <Button
              title='Add'
              onPress={() => this.props.addToAgenda(this.state.date)}
            />
          </>
        )}
      </View>
    );
  }
}

export default UpdateAgenda;
