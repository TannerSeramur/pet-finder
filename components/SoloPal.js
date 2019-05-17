import React, { Component } from 'react'
import { Text, View, Image, Modal, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

export class SoloPal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <TouchableOpacity onPress={() => this.setModalVisible(!this.state.modalVisible)}>
          <View style={{ flexDirection: 'row', margin: 10, backgroundColor: 'rgba(205,220,223, 0.5)', width: 500, padding: 5, borderRadius: 5 }}>
            <Image source={{ uri: this.props.pal.photos[0].small }} style={{ height: 60, width: 60, borderRadius: 25 }} />
            <View style={styles.smallBio}>
              <Text >Name: {this.props.pal.name} </Text>
              <Text>Age: {this.props.pal.age} </Text>
              <Text>Breed: {this.props.pal.breeds.primary}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <ScrollView style={{ flux: 1 }}>
            <View style={styles.modalContainer}>
              <Text style={styles.name}>{this.props.pal.name}</Text>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 20,
                  top: 10
                }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ fontSize: 25 }}>X</Text>
              </TouchableOpacity>
              <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: this.props.pal.photos[0].large }} style={styles.image} />
              </View>
              <Text style={{ paddingHorizontal: 20, paddingTop: 20 }}>{this.props.pal.age}</Text>
              <Text style={{ paddingHorizontal: 20 }}>Gender: {this.props.pal.sex}</Text>
              <Text style={{ paddingHorizontal: 20 }}>{this.props.pal.breeds.primary}</Text>
              <Text style={styles.text}>{this.props.pal.description}</Text>
              <Text style={styles.text}>Contact:</Text>
              <Text style={styles.text}>Phone: {this.props.pal.contact.phone}</Text>
              <Text style={styles.text}>Email: {this.props.pal.contact.email}</Text>

              <View style={{ alignItems: 'center', width: '100%' }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#527590',
                    width: 60,
                    padding: 5,
                    borderRadius: 20,
                    paddingVertical: 5,
                    paddingHorizontal: 5,
                    margin: 30,
                    alignItems: 'center'

                  }}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={{ color: '#feb29b' }}>close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </Modal>

      </View>

    )
  }
}

export default SoloPal

const styles = StyleSheet.create({
  container: {

  },
  image: {
    height: '100%',
    width: '90%',
    borderRadius: 10,

  },
  modalContainer: {
    flex: 2,
    marginTop: 50,
  },
  name: {
    fontSize: 40,
    textAlign: 'center',
    padding: 15
  },
  smallBio: {
    paddingLeft: 15
  },
  text: {
    paddingHorizontal: 20,
    paddingTop: 10
  }


})

// #eeefea
// #cddcdf
// #527590
// #feb29b
// .
// #f2e1cd
// .