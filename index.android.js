/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Icon } from 'react-native-elements'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView, TouchableHighlight, Alert, Modal, FlatList
} from 'react-native';


var REQUEST_URL = 'https://aliyahrcottle.xyz/aiay/wp-json/wp/v2/aiay-post/';



class TopNavigation extends Component {

  _onPressButton(){
    Alert.alert('You tapped the button');
  }

  render(){

    return(

      <View style={{ width: 300, paddingTop: 20, backgroundColor: 'transparent', flexDirection:'row', justifyContent:'space-between'}}>

        <TouchableHighlight style={{}} onPress={this._onPressButton}>
            <View><Icon name='search'/></View>
        </TouchableHighlight>


        <TouchableHighlight onPress={this._onPressButton}>
            <View><Text style={{textAlign: 'center' }}>AIAY</Text></View>
        </TouchableHighlight>


        <TouchableHighlight onPress={this._onPressButton}>
          <View><Icon name='sort'/></View>
        </TouchableHighlight>


      </View>
    );
  }
}

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

class TopicBanner extends Component {

  render(){
    return(
      <View style={{margin:30,  width: 290,  padding: 10, backgroundColor:'white', flexDirection: 'row'}}>
      
       <Text style={{flex: 1, textAlign: 'center'}}>Business Development</Text>

      </View>
    );
  }
}

class ArticleTitleDate extends Component {


  render(){
    return(

          <View style={{flexDirection:'row', justifyContent: 'space-between', padding: 10}}>

          <Text style={{fontSize: 12}}>12 Hours Ago</Text>
          <Icon name='bookmark'/>

          </View>
    
    );
  }
}

class ArticleTitle extends Component {

  render(){
    return(
        <View style={{justifyContent: 'center', alignItems:'center', flex:1}}>

          <Text style={{fontSize: 26}}>Who Are You?</Text>

        </View>
    );
  }
}

class ArticleTitleCard extends Component {

  render(){
    return(
      <View style={{flex:1, backgroundColor: 'blue', width: 300, height: 200, justifyContent:'space-between'}}>

        <ArticleTripleButtons/>

        <ArticleTitle/>

        <ArticleTitleDate/>

      </View>
    );
  }
}

class ArticleStory extends Component {

  render(){
    return(

      <View style={{flex:1}}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>

      </View>
    );
  }
}

class ScrollUp extends Component {

  render(){
    return(
      <View style={{ width: 300, flexDirection: 'row', backgroundColor: 'green', padding: 10, alignItems: 'center', marginTop: -30}}>

       <Icon style={{justifyContent: 'center',  alignItems: 'center', marginTop:25}} reverse name='expand-less'/>

      </View>
    )
  }

}

export default class aiay extends Component {

   constructor(props) {
    super(props);

    this.state = {
      test: [ {pillar: 'Love & Relationships', date: 'TODAY'}, {pillar: 'Love & Relationships', date: 'TODAY'}, {pillar: 'Love & Relationships', date: 'TODAY'}]
    };
  }

  _renderArticles(item){
    return(



      <ScrollView contentContainerStyle={{flex:1, width: 450, backgroundColor:'red'}}>

        <TopNavigation/>

        <TopicBanner/>


        <ArticleTitleCard/>


        <ScrollUp/>

        <ArticleStory />


      

  </ScrollView>




    )
  }

  render() {
    return (

    <View style={{flex:1, backgroundColor:'yellow'}}>
    <ScrollView contentContainerStyle={{flex:1}}>
      <FlatList 
      style={{flex:1}}
      horizontal
      data={this.state.test}
      renderItem={({ item }) => this._renderArticles(item)}
      />

      </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('aiay', () => aiay);
