import React from 'react';
import { Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const Loading = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 100,
      backgroundColor: '#DE4C5D',
      color: '#fff'
    },
    text: {
      color: '#fff',
      margin: 'auto'
    }
  });

  return (
    <Container style={styles.container}>
      <Text style={styles.text}>WANDR</Text>
      <Text style={styles.text}>This page is loading</Text>
    </Container>
  );
};

export default Loading;
