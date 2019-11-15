import React, { Component } from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps';

class Map extends Component {
  styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
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
    },
    markerWrap: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    marker: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#F6EF0F'
    },
    ring: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: '#F6EF0F',
      position: 'absolute',
      borderWidth: 1,
      borderColor: '#F6EF0F'
    }
  });
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
        >
          {this.props.locations.map((location, index) => {
            let coords = location.geometry.location;
            return (
              <>
                <MapView.Marker
                  key={index}
                  title={location.name}
                  coordinate={{ latitude: coords.lat, longitude: coords.lng }}
                >
                  <Animated.View style={[this.styles.markerWrap]}>
                    <Animated.View style={[this.styles.ring]} />
                    <View style={this.styles.marker} />
                  </Animated.View>
                </MapView.Marker>
              </>
            );
          })}
        </MapView>
      </View>
    );
  }
}
export default Map;
