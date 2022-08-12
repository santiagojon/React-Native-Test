import React from 'react';
import { View, StyleSheet } from 'react-native';
import RoundedButton from '../components/RoundedButton';

const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="30" onPress={() => {onChangeTime(30)}} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="40" onPress={() => {onChangeTime(40)}} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="50" onPress={() => {onChangeTime(50)}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Timing;
