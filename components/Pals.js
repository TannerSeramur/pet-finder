import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import { connect } from 'react-redux';

import SoloPal from './SoloPal';

export class Pals extends Component {
  handleBackClick = () => {
    this.props.getSwiper().scrollBy(-1);
  }
  handlePalsClick = () => {
    this.props.getSwiper().scrollBy(1);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={this.handleBackClick} style={styles.buttons}><Text>BACK</Text></TouchableOpacity>
          <View />
        </View>
        <View style={styles.item}>
          {this.props.myPals.map((pal, idx) => {
            return <SoloPal key={idx} pal={pal} />
          })}


        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state, ' ✅');

  return {
    myPals: state.pets.savedPals
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pals)

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
  item: {
    // backgroundColor: '#cddcdf',
    marginBottom: 10
  }
})