import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from './store'
import Products from './components/products'

export default class Setup extends Component {
  render() {
    return (
      <Products store={ store } />
    )
  }
}
