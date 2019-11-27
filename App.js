
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {};

    let firebaseConfig = {
      apiKey: "AIzaSyDHwMpUfXp8tBtxcnyQh36QuL78GB5CvgQ",
      authDomain: "myapp-b66a3.firebaseapp.com",
      databaseURL: "https://myapp-b66a3.firebaseio.com",
      projectId: "myapp-b66a3",
      storageBucket: "myapp-b66a3.appspot.com",
      messagingSenderId: "471767399829",
      appId: "1:471767399829:web:6e7c576eef36751a1f0a9c",
      measurementId: "G-V1L8QNZ1SW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
