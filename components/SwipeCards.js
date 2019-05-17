// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import { savedPal, getPets, removeCard } from "../store/actions";
import { connect } from "react-redux";

import SwipeCards from 'react-native-swipe-cards';
// import { LocalTile } from 'react-native-maps';

// /////////////////////////////////////////////////////////
class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this is props',this.props);
    let img =  this.props.photos.length && this.props.photos[0] ? this.props.photos[0].full : "https://via.placeholder.com/420x320/ff7f7f/333333?text=Sample";
    return (
      <View style={[styles.card, { backgroundColor: this.props.backgroundColor }]}>
        {/* <Text>{this.props.text}</Text> */}
        {console.log('⭐️ ', img, 'HERE ⭐️')}
        <Image style={styles.thumbnail} source={{ uri: img}} />
      </View>
    )
  }
}

// /////////////////////////////////////////////////////////
class NoMoreCards extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

// /////////////////////////////////////////////////////////
class SwiperCards extends React.Component {
  constructor(props) {
    super(props);

  }


  handleYup = card => {
    this.props.savedPal(card)
  }
  handleNope = card => {
  }

  handleCardRemoved = () => {
    console.log('removing!!');
    this.props.removeCard();


  }
  render() {
    return (
      < SwipeCards
        cards={this.props.allPals}
        renderCard={(cardData) => <Card {...cardData} />
        }
        renderNoMoreCards={() => <NoMoreCards />}
        yupStyle={{ top: 10 }}
        yupText={'SAVE!'}
        nopeStyle={{ top: 10 }}
        nopeText={'No THANKS'}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.handleCardRemoved}

      />
    )
  }
}


const mapStateToProps = state => {
  console.log('👻', state.pets.cardsLeft);

  return {
    allPals: state.pets.allPals
  };
};
const mapDispatchToProps = dispatch => {
  return {
    savedPal: card => dispatch(savedPal(card)),
    getPets: data => dispatch(getPets(data)),
    removeCard: () => dispatch(removeCard())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SwiperCards);

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    // // flex: 1
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 40,
    height: '90%'
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  }
})

// #eeefea
// #cddcdf
// #527590
// #feb29b
// .
// #f2e1cd
// .