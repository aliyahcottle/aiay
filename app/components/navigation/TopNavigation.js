import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView, TouchableHighlight, TouchableWithoutFeedback, Alert, FlatList, Image
} from 'react-native';
import { Icon, SocialIcon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';

import Modal from 'react-native-modal';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getContent, toggleCalendar } from '../../actions'



class TopNavigation extends Component {

  componentDidMount(){

    let { dispatch } = this.props

    let action = toggleCalendar()

  }

  state = {
    dropdownNavigation: false,
 
 }

  _showModal = () => this.setState({ dropdownNavigation: true })

  _hideModal = () => this.setState({ dropdownNavigation: false })

  render(){

    let {dispatch} = this.props

    return(

      <View elevation={this.props.elevation} style={{padding: 20, paddingBottom: 10, zIndex:100, backgroundColor:'#FFF', flexDirection:'row', justifyContent:'space-between'}}>

        <TouchableHighlight>
            <View><Icon name='search'/></View>
        </TouchableHighlight>


        <TouchableHighlight onPress={this._showModal}>
            <View><Text style={{textAlign: 'center' }}>AIAY</Text></View>
        </TouchableHighlight>


        <TouchableWithoutFeedback onPress={() => this.props.toggleCalendar}>
          <View><Icon name='date-range'/></View>
        </TouchableWithoutFeedback>


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
          <View><Icon name='sort'/></View>
        </TouchableHighlight>

        <View style={{margin: 5}}>
            <TouchableHighlight onPress={this._onPressButton}>
              <Text style={{fontSize: 48, fontFamily: 'Roboto-Thin', color: 'white'}}>Discovery</Text>
             </TouchableHighlight>

          <TouchableHighlight onPress={this._onPressButton}> 
            <Text style={{fontSize: 48, fontFamily: 'Roboto-Thin', color: 'white'}}>Daily Clogs</Text>
             </TouchableHighlight>
          
          <TouchableHighlight onPress={this._onPressButton}>
            <Text style={{fontSize: 48, fontFamily: 'Roboto-Thin', color: 'white'}}>Blog</Text>
             </TouchableHighlight>
          
          <TouchableHighlight onPress={this._onPressButton}>
            <Text style={{fontSize: 48, fontFamily: 'Roboto-Thin', color: 'white'}}>About</Text>
             </TouchableHighlight>
          
          <TouchableHighlight onPress={this._onPressButton}>
            <Text style={{fontSize: 48, fontFamily: 'Roboto-Thin', color: 'white'}}>Shop</Text>
             </TouchableHighlight>

        </View>

             <View style={{flexDirection:'row'}}>

             <LinearGradient elevation={2} colors={['#ff7e5f','#feb47b']} locations={[0.1,0.8]} style={{margin: 5, flexDirection:'row', justifyContent:'center', alignItems:'center', width: 40, height:40, opacity:0.9, backgroundColor: 'white', borderRadius:50}}>
               
               <SocialIcon style={{backgroundColor:'transparent'}}iconSize={16} raised={false} type='instagram'/>

            </LinearGradient>

            
             <LinearGradient elevation={2} colors={['#ff7e5f','#feb47b']} locations={[0.1,0.8]} style={{margin: 5, flexDirection:'row', justifyContent:'center', alignItems:'center', width: 40, height:40, borderRadius:50}}>
               
               <SocialIcon style={{backgroundColor:'transparent'}} iconSize={16} raised={false} type='facebook'/>

            </LinearGradient>


             <LinearGradient elevation={2} colors={['#ff7e5f','#feb47b']} locations={[0.1,0.8]} style={{margin: 5, flexDirection:'row', justifyContent:'center', alignItems:'center', width: 40, height:40, borderRadius:50}}>
               
               <SocialIcon style={{backgroundColor:'transparent'}}iconSize={16} raised={false} type='twitter'/>

            </LinearGradient>


             <LinearGradient elevation={2} colors={['#ff7e5f','#feb47b']} locations={[0.1,0.8]} style={{margin: 5, flexDirection:'row', justifyContent:'center', alignItems:'center', width: 40, height:40, borderRadius:50}}>
               
               <SocialIcon style={{backgroundColor:'transparent'}}iconSize={16} raised={false} type='pinterest'/>

            </LinearGradient>


             <LinearGradient elevation={2} colors={['#ff7e5f','#feb47b']} locations={[0.1,0.8]} style={{margin: 5, flexDirection:'row', justifyContent:'center', alignItems:'center', width: 40, height:40, borderRadius:50}}>
               
               <SocialIcon style={{backgroundColor:'transparent'}}iconSize={16} raised={false} type='youtube'/>

            </LinearGradient>
        </View>

          </View>
         </View>
          </Modal>


</TouchableWithoutFeedback>

      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    calendar: state.content.showCalendar
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getContent: () => dispatch(getContent()),
    toggleCalendar: () => dispatch(toggleCalendar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavigation);