import { StyleSheet } from 'react-native'

const pinkLace = '#ffe4fa'
const aquamarine = '#8ef8ce'
const lavender = '#f1a1fd'
const lightBlue = '#6360f7'
const darkJet = '#352e31'

export const colors = {
  pinkLace,
  aquamarine,
  lavender,
  lightBlue,
  darkJet,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    fontFamily: 'aksana',
    color: 'white',
  },
  h: {
    fontFamily: 'aksana',
    fontWeight: '900',
    fontSize: 40,
    padding: 10,
  },
  p: {
    fontFamily: 'aksana',
    fontSize: 20,
    padding: 10,
  },
  button: {
    fontFamily: 'aksana',
    fontSize: 40,
    backgroundColor: lightBlue,
    color: 'white',
    padding: 3,
    paddingLeft: 10,
    paddingRight: 50,
  }
})

export default styles
