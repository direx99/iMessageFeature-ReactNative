import React, {useRef, useState} from 'react';
import {
  Dimensions,
  
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import wall from './wall.png';
import ContentView from './View/ContentView';

function App() {
  const screenHeight = Dimensions.get('window').height;
  const backgroundStyle = {
    backgroundColor: '#000',
  };


  
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ContentView/>

    
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  TopView: {
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 100,
    backgroundColor: '#757575',
  },
  SendMsg: {
    backgroundColor: '#1C8AFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    borderRadius: 10,
    marginRight: 20,
    marginTop: 10,
    maxWidth: '45%',
  },
  RecMsg: {
    backgroundColor: '#3B3B3D',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 10,
    maxWidth: '45%',
  },
  SendMsgTxt: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
  },
});

export default App;


