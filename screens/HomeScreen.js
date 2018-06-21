import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native'
import MakeItRain from '../components/MakeItRain.js'
import mehdinu from '../assets/imgs/mehdinu.png'
import styles from '../styles.js'


const B = ({ onPress, children }) =>
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.button}>{children}</Text>
  </TouchableOpacity>


class Memehdiiii extends React.Component {
  state = {
    banana: false
  }

  render() {
    return (
      <View style={[styles.container, { alignItems: 'stretch' }]}>
        { this.state.banana
          ? <MakeItRain />
          : <ImageBackground style={[styles.container, { flex: 1 }]} source={mehdinu}>
              <Text
                onPress={() => this.setState({ banana: true })}
                style={{ marginTop: 100, backgroundColor: 'red', fontSize: 30, padding: 2 }}>scrape here</Text>
            </ImageBackground>
        }
      </View>
    )
  }
}


export class HomeDetailScreen extends React.Component {
  state = {
    modalVisible: false,
  }

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <TouchableHighlight style={{ flex: 1 }} onPress={() => this.setModalVisible(!this.state.modalVisible) }>
            <Memehdiiii />
          </TouchableHighlight>
        </Modal>

        <B onPress={() => this.setModalVisible(true)}>Almost there...</B>
      </View>
    )
  }
}

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'C.SSOS',
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.h}><Text style={{ color: 'pink' }}>CSS</Text>OS</Text>
          <Text style={styles.p}>Le stylesheet' framework des cassos</Text>
        </View>
        <View style={[styles.container, { alignItems: 'flex-start' }]}>
          <B onPress={() => this.props.navigation.navigate('HomeDetailScreen')}>Mehdi tout nu</B>
        </View>
      </View>
    )
  }
}
