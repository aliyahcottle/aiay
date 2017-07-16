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
  ScrollView, TouchableHighlight, TouchableWithoutFeedback, Alert, FlatList
} from 'react-native';

import Modal from 'react-native-modal'




var REQUEST_URL = 'https://aliyahrcottle.xyz/aiay/wp-json/wp/v2/aiay-post/';


class TopNavigation extends Component {

  state = {
    dropdownNavigation: false
  }

  _showModal = () => this.setState({ dropdownNavigation: true })

  _hideModal = () => this.setState({ dropdownNavigation: false })


  _onPressButton(){
    Alert.alert('You tapped the button');
  }

  render(){

    return(

      <View style={{padding: 20, zIndex:100, backgroundColor:'#444', flexDirection:'row', justifyContent:'space-between'}}>

        <TouchableHighlight>
            <View><Icon name='search'/></View>
        </TouchableHighlight>


        <TouchableHighlight onPress={this._showModal}>
            <View><Text style={{textAlign: 'center' }}>AIAY</Text></View>
        </TouchableHighlight>


        <TouchableHighlight onPress={this._onPressButton}>
          <View><Icon name='sort'/></View>
        </TouchableHighlight>


<TouchableWithoutFeedback onPress={this._hideModal}>
       <Modal
          style={{flex:1, justifyContent:'center', alignItems:'center'}}
          animationIn={'fadeInDownBig'}
          animationInTiming={500}
          animationOut={'fadeOutUpBig'}
          animationOutTiming={200}
          backdropOpacity={0.90}
          isVisible={this.state.dropdownNavigation}>


          <View style={{marginTop: 22}}>
          <View>
             <TouchableHighlight onPress={this._onPressButton}>
          <View style={{fontSize: 56, color: 'white'}}><Icon name='sort'/></View>
        </TouchableHighlight>

            <Text style={{fontSize: 56, color: 'white'}}>Hello World!</Text>
            <Text style={{fontSize: 56, color: 'white'}}>Hello World!</Text>
            <Text style={{fontSize: 56, color: 'white'}}>Hello World!</Text>
    

          </View>
         </View>
          </Modal>
          </TouchableWithoutFeedback>

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
      <View style={{ margin:30, padding: 10, backgroundColor:'white', flexDirection: 'row'}}>
      
       <Text style={{flex: 1, textAlign: 'center'}}>{this.props.pillar}</Text>

      </View>
    );
  }
}

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
      <View style={{backgroundColor: 'blue', width: 300, zIndex: 1, height: 200}}>

        <ArticleTripleButtons/>

        <ArticleTitle/>

        <ArticleTitleDate date={this.props.date}/>

      </View>
    );
  }
}

class ArticleStory extends Component {

  render(){
    return(

      <View style={{flex:1, padding: 30}}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>

      </View>
    );
  }
}

class ScrollUp extends Component {

  render(){
    return(
      <View style={{zIndex: -1, flexDirection: 'row', backgroundColor: 'green', padding: 10, alignItems: 'center', marginTop: -30}}>

       <Icon style={{flex:1, flexDirection:'row', justifyContent: 'center',  alignItems: 'center', marginTop:25}} reverse name='expand-less'/>

      </View>
    )
  }

}

export default class aiay extends Component {

   constructor(props) {
    super(props);

    this.state = {
      test: [ {pillar: 'Love & Relationships', date: '2017-07-10T21:58:49'}, {pillar: 'Business Development', date: '2017-07-10T21:58:49'}, {pillar: 'Love & Relationships', date: '2017-07-10T21:58:49'}]
    };
  }

  _renderArticles(item){
    return(


      <ScrollView contentContainerStyle={{borderColor: 'black', zIndex: -1, width: 420, marginTop: -20, backgroundColor:'#444'}} stickyHeaderIndices={[0, 6]}>

        <TopicBanner pillar={item.pillar}/>

      
      <View style={{flex: 1, height:520, justifyContent:'flex-end'}}>

        <View style={{alignItems:'center'}}>

        <ArticleTitleCard date={item.date}/>

        <ScrollUp/>

        </View>

      </View>


        <ArticleStory />

         <ArticleStory />

          <ArticleStory />
           <ArticleStory />

        <TopicBanner pillar={'hello'}/>

        <ArticleStory />
   
      <ArticleStory />

        <ArticleStory />
   
  </ScrollView>






    )
  }

  render() {
    return (

    <View style={{flex:1}}>
       <TopNavigation/>
   
      <FlatList 
      style={{flex:1}}
      horizontal
      data={this.state.test}
      renderItem={({ item }) => this._renderArticles(item)}
      />


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
