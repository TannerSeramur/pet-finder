import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export class SoloPal extends Component {
  render() {
    console.log(this.props.pal, ' ✅');

    return (
      <View style={{ flexDirection: 'row' }}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ height: 50, width: 50 }} />

        <View>

          <Text> {this.props.pal.text} </Text>
          <Text> {this.props.pal.backgroundColor} </Text>

        </View>
      </View>
    )
  }
}

export default SoloPal


// enter zip
// handleSumbit fires a function to actions
// that action gets the data from the api
// return data as payload
// reducers have payload as allPets