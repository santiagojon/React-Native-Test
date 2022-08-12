import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './src/features/Focus';
import Timer from './src/features/Timer';
import FocusHistory from './src/features/FocusHistory';

import colors from './src/utils/colors';

function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {setHistory(...history, subject)}}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
        // <Text>{currentSubject}</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    color: 'white',
    backgroundColor: '#252250',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  timerText: {
    color: colors.white,
    fontSize: 10,
  },
});

export default App;
