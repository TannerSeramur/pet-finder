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
          <TouchableOpacity onPress={this.handleBackClick} style={styles.buttons}><Text style={styles.text}>BACK</Text></TouchableOpacity>
          <Text style={{ fontSize: 20, color: '#527590' }}>p e r f e c t   p a l .</Text>
          <TouchableOpacity onPress={this.handlePalsClick} style={styles.buttons}><Text style={styles.text}>PALS</Text></TouchableOpacity>
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
    backgroundColor: '#eeefea',
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
  },
  text: {
    color: '#527590'
  }
})