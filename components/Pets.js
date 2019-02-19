import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import SwiperCards from './SwipeCards'

export class Pets extends Component {
  handleBackClick = () => {
    this.props.getSwiper().scrollBy(-1);
  }
  handlePalsClick = () => {
    this.props.getSwiper().scrollBy(1);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={this.handleBackClick} style={styles.buttons}><Text>BACK</Text></TouchableOpacity>
          <Text>Find a Pal</Text>
          <TouchableOpacity onPress={this.handlePalsClick} style={styles.buttons}><Text>PALS</Text></TouchableOpacity>
        </View>
        <View style={styles.swipeCards}>
          <SwiperCards />
        </View>
      </View>
    )
  }
}
export default Pets

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,

  },
  nav: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttons: {
    padding: 10
  },
  swipeCards: {
    flex: 5,
  },
  bottemBtns: {
    flex: 1,
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  }
})