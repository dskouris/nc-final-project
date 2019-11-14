import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Map extends Component {
  render() {
    return (
      <View style={this.styles.container}>
        <MapView
          style={this.styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: this.props.userCoords.latitude,
            longitude: this.props.userCoords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    );
  }
  styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 100,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: 400,
      width: '100%'
    }
  });
}
export default Map;
