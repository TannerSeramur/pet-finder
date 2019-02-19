import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import {mainStyles} from '../assets/styles';

import { connect } from "react-redux";
import { getPets } from "../store/actions";

export class Home extends Component {

  state = {
    zip: ''
  }

  handleSubmit = () => {
    console.log(this.state, ' 😏');

    this.props.getPets(this.state.zip).then(res => {
      this.props.getSwiper().scrollBy(1);

    })
  }

  handleOnChange = e => {

    //check to see if zip is number
    this.setState({ zip: e.nativeEvent.text })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >Perfect Pal</Text>
        <TextInput type="text" style={styles.input} value={this.state.zip} onChange={this.handleOnChange} />
        <TouchableOpacity onPress={this.handleSubmit} style={styles.button}><Text style={styles.buttonText}>Find</Text></TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => {
  console.log(state, 'state in swipercard')
  return {

  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPets: zip => dispatch(getPets(zip))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    // justifyContent: 'center',
    paddingTop: 160,
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'red',
    padding: 10,
    fontSize: 20,
    width: '80%'
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 20,
    paddingHorizontal: 40,
    margin: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  },
  title: {
    fontSize: 40,
    marginBottom: 50
  }
})