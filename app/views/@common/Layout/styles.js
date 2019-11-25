//import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';
import {dimensions} from '../../../styles/index';

const HEADER_CONTAINER_MARGIN_TOP = dimensions.fullHeight * 0.04;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  headerContainer: {
    marginTop: HEADER_CONTAINER_MARGIN_TOP,
    backgroundColor: 'green',
    height: 200,
  },
});
