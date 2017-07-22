import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import TopNavigation from './navigation/TopNavigation';
import ArticleCarouselLayout from '../layouts/ArticleCarouselLayout';
import CalendarStrip from 'react-native-calendar-strip';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

import { connect } from 'react-redux'
import { getContent, toggleCalendar } from '../actions'


var REQUEST_URL = 'https://aliyahrcottle.xyz/aiay/wp-json/wp/v2/aiay-post/';


class AIAY extends Component {

   constructor(props) {
    super(props);

    this.state = {
      test: [{
                pillar: 'Love & Relationships', 
                date: '2017-07-10T21:58:49',
                image: 'https://unsplash.it/360/525?image=1083',
                title: 'Who are you? Do you know?',

             }, 
             {  pillar: 'Business Development', 
                date: '2017-07-10T21:58:49',
                image: 'https://unsplash.it/360/525?image=1040',
                title: 'Looking for oppourtunity'
             }, 
             {  pillar: 'Love & Relationships', 
                date: '2017-07-10T21:58:49',
                image: 'https://unsplash.it/360/525?image=974',  
                title: 'Another Cool Title'
             }
            ],
      showCalendar: true
     };
  }

  _toggleCalendar(){ this.setState({showCalendar: !this.state.showCalendar}); }


  _hideCalendar(){ this.setState({showCalendar: false}); }


  renderIf(condition, content){
    if (condition) {
      return content;
    } else {
      return null;
    }

  }

  render() {

    const slides = this.state.test.map((item, index) => {
    return (
      
      <ArticleCarouselLayout 
                key={index}
                pillar={item.pillar}
                imageSource={item.image} 
                date={item.date}
                title={item.title}
                toggleCalendarOnScroll={this._hideCalendar.bind(this)}/>
    );
  });




    return (

    <View style={{flex:1}}>
         
       <TopNavigation toggleCalendar={ this.props.toggleCalendar()}/>

       { this.props.calendar && <CalendarStrip elevation={3} style={{height: 75, backgroundColor:'white'}}/>}

       <Carousel
          ref={(carousel) => {this._carousel = carousel; }}  
          sliderWidth={360}  
          itemWidth={360}>

          { slides }

      </Carousel>

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

export default connect(mapStateToProps, mapDispatchToProps)(AIAY)

