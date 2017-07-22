import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Text, TouchableWithoutFeedback, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Tags extends Component {

  render(){
    return(

<TouchableWithoutFeedback onPress={() => Alert.alert('You pressed the button')}>
  <LinearGradient  elevation={2} colors={['#ff7e5f','#feb47b']} locations={[0.1,0.8]} style={{margin:10, padding:10, borderRadius: 40, backgroundColor: 'white', opacity: 0.9, flexDirection: 'row'}}>
    <Text style={{fontFamily: 'Roboto-Thin', fontSize:10, color: 'white'}}>{this.props.tag}</Text>
  </LinearGradient>
  </TouchableWithoutFeedback>

    );
  }
}

export default Tags;