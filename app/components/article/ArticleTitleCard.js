import { Icon } from 'react-native-elements'
import React, { Component } from 'react';
import { View } from 'react-native';

import ArticleTripleButtons from './ArticleTripleButtons';
import ArticleTitle from './ArticleTitle';
import ArticleTitleDate from './ArticleTitleDate';
import ElevatedView from 'react-native-elevated-view';

class ArticleTitleCard extends Component {

  render(){
    return(
      <View elevation={5} style={{backgroundColor: 'white', width: 250, zIndex: 1, height: 200}}>
   
        <ArticleTripleButtons/>

        <ArticleTitle title={this.props.title}/>

        <ArticleTitleDate date={this.props.date}/>

      </View>
    );
  }
}

export default ArticleTitleCard;