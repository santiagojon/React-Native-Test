import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import colors from '../utils/colors';
import spacing from '../utils/sizes';

import RoundedButton from '../components/RoundedButton';

export const Focus = (props) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on?"
          value={subject}
          onChangeText={setSubject}
          style={styles.textInput}></TextInput>
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            style={styles.button}
            onPress={() => props.addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 0.1,
  },
  button: {
    alignSelf: 'center',
    fontSize: 0.4,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'top',
    // alignItems: 'top',
    flexDirection: 'row',
  },
});
