import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const { width } = Dimensions.get('window');

const OfflineNotice = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Отсутствует подключение к интернету</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fc3d39',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    zIndex: 100,
    width,
  },
  label: {
    color: '#fff',
  }
});

export default OfflineNotice;
