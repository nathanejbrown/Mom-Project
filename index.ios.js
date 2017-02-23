/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const styles = require('./styles/homepage.js');

class BackgroundImage extends Component {

  render() {
    return (
      <Image source={require('./styles/images/mom.jpg')} style={styles.container}>
        <TestText />
      </Image>
    )
  }
}

class TestText extends Component {

  render() {
    return (
      <Text style={styles.welcome}>This is a test</Text>
    )
  }
}

export default class MomProject extends Component {

  render() {
    return (
        <BackgroundImage>
        </BackgroundImage>
    );
  }
}

AppRegistry.registerComponent('MomProject', () => MomProject);
