import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Slider from 'react-native-slider';
import * as api from '../components/api';
import firebaseSDK from '../components/firebaseSDK';

export default class App extends React.Component {
  state = {
    slider1: 0.5,
    slider2: 0.5,
    slider3: 0.5,
    slider4: 0.5,
    slider5: 0.5,
    slider6: 0.5,
    wordPool: '',
    personality: null
  };

  changeSlider1 = value => {
    this.setState({ slider1: value });
  };
  changeSlider2 = value => {
    this.setState({ slider2: value });
  };
  changeSlider3 = value => {
    this.setState({ slider3: value });
  };

  changeSlider4 = value => {
    this.setState({ slider4: value });
  };

  changeSlider5 = value => {
    this.setState({ slider5: value });
  };

  createWordPool = async () => {
    const shyArr = new Array(Math.round((1 - this.state.slider1) * 100));
    shyArr.fill('Shy');

    const outgoingArr = new Array(Math.round(this.state.slider1 * 100));
    outgoingArr.fill('Outgoing');

    const indoorsArr = new Array(Math.round((1 - this.state.slider2) * 100));
    indoorsArr.fill('Indoors');

    const outdoorsArr = new Array(Math.round(this.state.slider2 * 100));
    outdoorsArr.fill('Outdoors');

    const cautiousArr = new Array(Math.round((1 - this.state.slider3) * 100));
    cautiousArr.fill('Cautious');

    const adventurousArr = new Array(Math.round(this.state.slider3 * 100));
    adventurousArr.fill('Adventurous');

    const scienceArr = new Array(Math.round((1 - this.state.slider4) * 100));
    scienceArr.fill('Science');

    const artArr = new Array(Math.round(this.state.slider4 * 100));
    artArr.fill('Art');

    const classicalArr = new Array(Math.round((1 - this.state.slider5) * 100));
    classicalArr.fill('Classical');

    const modernArr = new Array(Math.round(this.state.slider5 * 100));
    modernArr.fill('Modern');

    const structureArr = new Array(Math.round((1 - this.state.slider6) * 100));
    structureArr.fill('Structure');

    const explorerArr = new Array(Math.round(this.state.slider6 * 100));
    explorerArr.fill('Explorer');

    const wordPool = [
      ...shyArr,
      ...outgoingArr,
      ...indoorsArr,
      ...outdoorsArr,
      ...cautiousArr,
      ...adventurousArr,
      ...scienceArr,
      ...artArr,
      ...classicalArr,
      ...modernArr,
      ...structureArr,
      ...explorerArr
    ].join(', ');

    // this.setState({ wordPool });
    console.log(wordPool);
    return wordPool;
  };

  successfulCall = data => {
    console.log(data);
    this.setState({ personality: data });
  };

  failedCall = err => {
    console.log(err);
  };

  onPressAction = async () => {
    const uuid = this.props.navigation.state.params.userObj.uuid;
    let words = await this.createWordPool();
    try {
      api
        .getPersonality({ wordpool: words })
        // .then(data => {
        //   this.successfulCall(data);
        //   return data;
        // })
        .then(object => {
          api.addPersonalityToUser(uuid, object).then(returnedUser => {
            console.log('from the function', returnedUser);
            if (returnedUser) {
              alert('Thanks for taking the quiz!');
              this.props.navigation.navigate('Settings', {
                newUserObj: returnedUser
              });
            }
          });
        });
      // .then(returnedUser => {
      //   console.log(returnedUser);
      //   if (returnedUser) {
      //     console.log(returnedUser);
      //     alert('Thanks for taking the quiz!');
      //   }
      // });
    } catch (error) {
      console.log(error);
    }
    // alert('Thanks for taking the quiz');
  };

  render() {
    console.log(this.props.navigation.state);
    return (
      <View style={styles.container}>
        <Text>I am more...</Text>
        <View style={styles.sliderCon}>
          <Text>Shy</Text>
          <Slider
            style={{ width: 150, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            step={0.1}
            value={this.state.slider1}
            onValueChange={this.changeSlider1}
          />
          <Text>Outgoing</Text>
        </View>
        <View style={styles.sliderCon}>
          <Text>Indoorsy</Text>
          <Slider
            style={{ width: 150, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            step={0.1}
            value={this.state.slider2}
            onValueChange={this.changeSlider2}
          />
          <Text>Outdoorsy</Text>
        </View>
        <View style={styles.sliderCon}>
          <Text>Cautious</Text>
          <Slider
            style={{ width: 150, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            step={0.1}
            value={this.state.slider3}
            onValueChange={this.changeSlider3}
          />
          <Text>Adventurous</Text>
        </View>
        <View style={styles.sliderCon}>
          <Text>Sciencey</Text>
          <Slider
            style={{ width: 150, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            step={0.1}
            value={this.state.slider4}
            onValueChange={this.changeSlider4}
          />
          <Text>Arty</Text>
        </View>
        <Text>I want to see...</Text>
        <View style={styles.sliderCon}>
          <Text>Classic Things</Text>
          <Slider
            style={{ width: 150, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            step={0.1}
            value={this.state.slider5}
            onValueChange={this.changeSlider5}
          />
          <Text>Modern Things</Text>
        </View>
        <View style={styles.sliderCon}>
          <Text>Structured Things</Text>
          <Slider
            style={{ width: 150, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            step={0.1}
            value={this.state.slider6}
            onValueChange={this.changeSlider6}
          />
          <Text>Exploratory Things</Text>
        </View>
        <Button title="Submit Choices" onPress={this.onPressAction}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sliderCon: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly'
  }
});
