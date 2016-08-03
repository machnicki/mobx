/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import AppMobile from './js/app-mobile'

class mobx extends Component {
  render() {
    return (
      <AppMobile />
    )
  }
}

AppRegistry.registerComponent('mobx', () => mobx)
