/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App() {

  return (
    <View style={styles.body}>
      <Text style={styles.text}>APCS Academy</Text>
      <Button title='Click Here' color="#841584" onPress={()=>Linking.openURL('https://www.youtube.com/')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: .30,
    backgroundColor: '#221ff2',
    paddingVertical: 20,
    alignItems: 'center'
  },
  text: {
    color: '#ffffff',
    // textAlign: 'center'
  }

});

export default App;
