import React from 'react';
import { Container, Text } from 'native-base';
import { StyleSheet, Image } from 'react-native';

const Loading = () => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#fff'
    },
    image: {
      resizeMode: 'contain',
      height: 200,
      width: 200,
      margin: 'auto'
    }
  });

  return (
    <Container style={styles.container}>
      <Image source={require('../images/wandr.png')} style={styles.image} />
    </Container>
  );
};

export default Loading;
