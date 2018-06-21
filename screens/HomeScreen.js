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
  ScrollView,
  StatusBar,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Dimensions } from 'react-native'
import MakeItRain from '../components/MakeItRain.js'
import mehdinu from '../assets/imgs/mehdinu.png'
import cocos from '../assets/imgs/cocos.jpg'
import flex from '../assets/imgs/flex.jpg'
import aero1 from '../assets/imgs/aero1.gif'
import aero2 from '../assets/imgs/aero2.gif'
import aero3 from '../assets/imgs/aero3.gif'
import aero4 from '../assets/imgs/aero4.gif'
import homeBg from '../assets/imgs/home-bg.png'
import logo from '../assets/imgs/logo.png'

import styles, { colors } from '../styles.js'


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
                style={{ marginTop: 100, backgroundColor: colors.aquamarine, color: colors.darkJet, fontSize: 20, padding: 5 }}>scrape here</Text>
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
    this.setState({ modalVisible: visible })
  }

  render() {
    const { goBack } = this.props.navigation

    return (
      <View>
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <TouchableHighlight style={{ flex: 1 }} onPress={() => this.setModalVisible(!this.state.modalVisible) }>
            <Memehdiiii />
          </TouchableHighlight>
        </Modal>

        <ScrollView>
          <B onPress={() => goBack()}>back</B>
          <Image style={{ width: '100%' }} source={aero1} />
          <Image style={{ width: '100%' }} source={aero2} />
          <Image style={{ width: '100%' }} source={aero3} />
          <Image style={{ width: '100%' }} source={aero4} />
          <B onPress={() => this.setModalVisible(true)}>Almost there..</B>
        </ScrollView>
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
      <ImageBackground style={styles.container} source={homeBg}>
        <StatusBar barStyle="light-content" />
          <Animatable.View style={styles.container} animation="slideOutDown" iterationCount={'infinite'} duration={1000} direction="alternate">
            <Image style={{ width: Dimensions.get('window').width, marginTop: -300 }} resizeMode="contain" source={logo} />
          </Animatable.View>
        <View style={[{ flex: 1, marginTop: -110 }]}>
          <Animatable.View animation="rubberBand" iterationCount={'infinite'} iterationDelay={1000} duration={1000} direction="normal">
            <Text style={[styles.text, { width: 100, textAlign: 'center', lineHeight: 30 }]}
              onPress={() => this.props.navigation.navigate('HomeDetailScreen')}>touch to enter</Text>
          </Animatable.View>
        </View>
      </ImageBackground>
    )
  }
}
