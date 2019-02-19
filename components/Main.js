import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper';

// redux
import { changer } from "../store/actions";
import { connect } from "react-redux";

import Home from './Home';
import Pets from './Pets';
import Pals from './Pals'

export class Main extends Component {

  // state = {
  //   scrollEnabled: 
  // }
  render() {
    return (
      <Swiper ref={e => this.swiper = e} style={styles.wrapper} loop={false} scrollEnabled={false} >
        <Home getSwiper={() => this.swiper} />
        <Pets getSwiper={() => this.swiper} />
        <Pals getSwiper={() => this.swiper} />
      </Swiper>
    )
  }
}


const mapStateToProps = state => {
  return {

  };
};
const mapDispatchToProps = dispatch => {
  return {
    changer: type => dispatch(changer(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);



const styles = StyleSheet.create({
  wrapper: {
    // flex: 1
  },
  slide1: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})