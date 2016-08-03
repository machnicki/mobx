import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { observer } from 'mobx-react/native'

@observer
class Products extends Component {
  render() {
    return (
      <Text>
        { this.props.store.products.map(
          product => <Text key={ product.id }>{ product.name }</Text>
        ) }
      </Text>
    )
  }
}

export default Products
