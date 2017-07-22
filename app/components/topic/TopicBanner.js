import { Icon } from 'react-native-elements'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView, TouchableHighlight, TouchableWithoutFeedback, Alert, FlatList, Image
} from 'react-native';
import ElevatedView from 'react-native-elevated-view';


class TopicBanner extends Component {

  render(){
    return(
      <View  elevation={2} style={{zIndex: 100, margin:30, padding: 10, backgroundColor: 'white', opacity: 0.9, flexDirection: 'row'}}>
      
       <Text style={{flex: 1, textAlign: 'center', color: '#373737', fontFamily: 'Roboto-Thin', fontSize: 11}}>{this.props.pillar.toUpperCase()}</Text>

      </View>
    );
  }
}

export default TopicBanner;
