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

class ArticleTitleDate extends Component {


  render(){
    return(

          <View style={{flexDirection:'row', justifyContent: 'space-between', padding: 10}}>

          <Text>{this.props.date}</Text>
          <Icon name='bookmark'/>

          </View>
    
    );
  }
}

export default ArticleTitleDate;