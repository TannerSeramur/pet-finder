import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import {mainStyles} from '../assets/styles';

import { connect } from "react-redux";
import { getPets, saveZip } from "../store/actions";

export class Home extends Component {

  state = {
    zip: ''
  }

  handleSubmit = () => {
    this.props.saveZip(this.state.zip);
    this.props.getPets(this.state.zip).then(res => {
      this.props.getSwiper().scrollBy(1);

    })
  }

  handleOnChange = e => {
    this.setState({ zip: e.nativeEvent.text })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >perfect pal.</Text>
        <TextInput type="text" style={styles.input} value={this.state.zip} onChange={this.handleOnChange} placeholder='Enter A Zip Code' />
        <TouchableOpacity onPress={this.handleSubmit} style={styles.button}><Text style={styles.buttonText}>Find</Text></TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPets: zip => dispatch(getPets(zip)),
    saveZip: zip => dispatch(saveZip(zip))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeefea',
    // justifyContent: 'center',
    paddingTop: 160,
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    fontSize: 20,
    width: '80%'
  },
  button: {
    backgroundColor: '#feb29b',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 45,
    margin: 30
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  },
  title: {
    color: '#527590',
    fontSize: 40,
    marginBottom: 50
  }
})