import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import store from './store'
import Products from './components/products'

export default class AppMobile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Products store={ store } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
