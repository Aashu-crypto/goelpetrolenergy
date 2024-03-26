import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: 'https://manage.goelpetro.com/'}} style={{flex: 1}} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
