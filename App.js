import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Font } from 'expo'
import { HomeScreen, HomeDetailScreen } from './screens/HomeScreen'
import styles from './styles.js'
import CameraExemple from './components/CameraExemple.js'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  HomeDetailScreen: HomeDetailScreen
},
{
  headerMode: 'none'
})

const RootTab = createBottomTabNavigator({
  Home: HomeStack,
  // Settings: SettingsScreen,
},
// { initialRouteName: 'Settings' }
)

export default class App extends React.Component {
  state = {
    loading: true,
  }

  async componentWillMount() {
    await Font.loadAsync({
      'klinic': require('./assets/fonts/KlinicSlabLight.otf'),
      'gorditas-b': require('./assets/fonts/Gorditas-Bold.ttf'),
      'gorditas': require('./assets/fonts/Gorditas-Regular.ttf'),
      'modak': require('./assets/fonts/Modak-Regular.ttf'),
      'aksana': require('./assets/fonts/Aksana.ttf'),
    })

    this.setState({ loading: false })
  }

  render() {
    return this.state.loading
      ? <Text>Loading..</Text>
      : <HomeStack />
  }
}
