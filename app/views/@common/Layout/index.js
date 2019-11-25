import React from 'react';
import {View, Text, StatusBar, Platform} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {dimensions} from '../../../styles/index';

const propTypes = {
  header: PropTypes.object,
};

console.log('width', dimensions.fullWidth);
console.log('height', dimensions.fullHeight);

const Layout = ({header}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      </View>
    </View>
  );
};

Layout.propTypes = propTypes;

export default Layout;
