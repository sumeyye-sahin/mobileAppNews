import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 9,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  description: {
    marginTop: 3,
    color: 'black',
    fontSize: 16,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
    color: 'black',
    marginTop: 3,
  },
  inner_container: {
    padding: 10,
  },
});
