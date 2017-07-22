import { Icon } from 'react-native-elements'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView, TouchableHighlight, TouchableWithoutFeedback, Alert, FlatList, Image
} from 'react-native';

import Modal from 'react-native-modal';
import CalendarStrip from 'react-native-calendar-strip';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

class ArticleTitle extends Component {

  render(){
    return(
        <View style={{justifyContent: 'center', alignItems:'center', flex:1, margin: 10}}>

          <Text style={{fontSize: 20, color: '#ff7e5f', fontFamily: 'Roboto-Thin', textAlign:'center'}}>{this.props.title.toUpperCase()}</Text>

        </View>
    );
  }
}

export default ArticleTitle;