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

class ArticleTripleButtons extends Component {

  state = {
    tldrModalVisible: false,
    infoModalVisible: false,
    stepsModalVisible: false,

  }

  setTldrModalVisible(visible) {
    this.setState({tldrModalVisible: visible});
  }

  setInfoModalVisible(visible) {
    this.setState({infoModalVisible: visible});
  }

  setStepsModalVisible(visible) {
    this.setState({stepsModalVisible: visible});
  }

  render(){
    return(
     <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor: 'white', padding: 10}}>
       

        <TouchableHighlight style={{flex:1}} onPress={() => {this.setTldrModalVisible(true)}}>
          <View><Text style={{textAlign: 'center'}}>TL;DR</Text></View>
        </TouchableHighlight>



        <TouchableHighlight style={{flex:1}} onPress={() => {this.setInfoModalVisible(true)}}>
          <View><Icon name='info'/></View>
        </TouchableHighlight>



        <TouchableHighlight style={{flex:1}} onPress={() => {this.setStepsModalVisible(true)}}>
          <View><Icon name='timeline'/></View>
        </TouchableHighlight>

      
          <Modal
          style={{flex:1}}
          animationType={"fade"}
          transparent={false}
          visible={this.state.tldrModalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}>


          <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setTldrModalVisible(!this.state.tldrModalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
          </Modal>


        <Modal
          style={{flex:1}}
          animationType={"slide"}
          transparent={false}
          visible={this.state.infoModalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}>


          <View style={{marginTop: 22}}>
          <View>
            <Text>Info Modal</Text>

            <TouchableHighlight onPress={() => {
              this.setInfoModalVisible(!this.state.infoModalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
          </Modal>


          <Modal
          style={{flex:1}}
          animationType={"slide"}
          transparent={false}
          visible={this.state.stepsModalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}>


          <View style={{marginTop: 22}}>
          <View>
            <Text>Steps Modal</Text>

            <TouchableHighlight onPress={() => {
              this.setStepsModalVisible(!this.state.stepsModalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
          </Modal>

      </View>
    );
  }
}

export default ArticleTripleButtons;