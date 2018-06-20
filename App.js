import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TouchableHighlight,
} from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Font } from 'expo'

class HomeDetailsScreen extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    )
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Mehdi le sauveur!</Text>
        <Button
          title="Mehdi tout nu"
          onPress={() => this.props.navigation.navigate('HomeDetailsScreen')}
        />
      </View>
    )
  }
}

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      // title: 'Home',
      headerVisible: false
    },
  },
  HomeDetailsScreen: HomeDetailsScreen
})

const RootTab = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsScreen,
})

export default class App extends React.Component {
  state = {
    loading: true,
  }

  async componentWillMount() {
    await Font.loadAsync({
      'klinic': require('./assets/fonts/KlinicSlabLight.otf'),
    })

    this.setState({ loading: false })
  }

  render() {
    return this.state.loading
      ? <Text>Loading..</Text>
      : <RootTab />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hotpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'klinic',
    color: 'white',
  }
})
