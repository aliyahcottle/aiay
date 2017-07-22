import { Icon } from 'react-native-elements'
import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Text, TouchableWithoutFeedback, Alert} from 'react-native';


import ArticleTitleCard from '../components/article/ArticleTitleCard';
import ArticleStory from '../components/article/ArticleStory';
import TopicBanner from '../components/topic/TopicBanner';
import LinearGradient from 'react-native-linear-gradient';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import ElevatedView from 'react-native-elevated-view';
import Tags from '../components/tags/Tags';



class ArticleCarouselLayout extends Component {

  render(){
    return(
 
   <ParallaxScrollView
      contentBackgroundColor="pink"
      backgroundColor="white"
      fadeOutForeground={false}
      contentContainerStyle={{width: 360, backgroundColor: 'white'}} 
      parallaxHeaderHeight={575}

      renderBackground={() => (

        <View style={{zIndex: -1, height: 525, marginTop: -20, margin: 20, alignItems:'center', backgroundColor: 'white', justifyContent:'space-between'}}>
              

          <Image source={{uri: this.props.imageSource }} 
                 style={{flex:1, height: 525, width: 360, marginBottom:-190}}/>

         </View>
          
        )}
      renderForeground={() => (
      
        <View style={{height: 555, paddingTop: 5, alignItems: 'center'}}>

          <TopicBanner pillar={this.props.pillar}/>


          <View style={{justifyContent:'space-between', height: 450}}>

          <View style={{flexDirection:'row', justifyContent:'center'}}>
            <Tags tag='love'/>  
            <Tags tag='relationships'/>   
            <Tags tag='date night'/>
          </View>

          <ArticleTitleCard 
              date={this.props.date} 
              title={this.props.title}/>

          </View>

        </View>

      )}>


      <ArticleStory />

      <ArticleStory />

      <ArticleStory />
      
      <ArticleStory />

      <TopicBanner pillar={'hello'}/>
      <ArticleStory />
   
      <ArticleStory />

      <ArticleStory />

    </ParallaxScrollView>
  );
  }
}

export default ArticleCarouselLayout;