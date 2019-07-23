/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen1 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      payload => {
        console.debug('didBlur', payload);
      }
    );
    const didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        console.debug('didFocus', payload);
      }
    );

    const willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      payload => {
        console.debug('willBlur', payload);
      }
    );
    const willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => {
        console.debug('willFocus', payload);
      }
    );
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen 1</Text>
        <Button
          title="button1"
          onPress={() => this.props.navigation.navigate('Home2')}
        />
      </View>
    );
  }
}
class HomeScreen2 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      payload => {
        console.debug('didBlur', payload);
      }
    );
    const didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        console.debug('didFocus', payload);
      }
    );

    const willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      payload => {
        console.debug('willBlur', payload);
      }
    );
    const willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => {
        console.debug('willFocus', payload);
      }
    );
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen 2</Text>
        <Button
          title="button1"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home1: {
    screen: HomeScreen1,
  },
  Home2: {
    screen: HomeScreen2,
  },
});

export default createAppContainer(AppNavigator);
