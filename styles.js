import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'klinic',
  },
  h: {
    fontFamily: 'gorditas-b',
    fontWeight: '900',
    fontSize: 40,
    padding: 10,
  },
  p: {
    fontFamily: 'gorditas-b',
    fontSize: 20,
    padding: 10,
  },
  button: {
    fontFamily: 'modak',
    fontSize: 30,
    backgroundColor: 'pink',
    color: 'white',
    padding: 3,
    paddingLeft: 10,
    paddingRight: 50,
  }
})

export default styles
