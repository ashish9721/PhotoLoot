import React, {Component} from 'react';
import { Image, ScrollView} from 'react-native';
import {StickerAndImage} from '../../component/functionalComponent/functional';
import {styles} from './styles';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import CurrentChallenges from './currentChallenges';
import {Images, vh, vw} from '../../Constants';
import HallOfFame from './hallOfFame';
import UpComingChallenges from './upcomingChallenges';
import Profile from '../profile/profile';
import Notifications from '../notification/Notifications';
import Settings from '../settings/settings';
import search from '../search/search';
export default class Home extends Component {
  rendermap() {
    return Tempdata.map((result, index) => {
      return (
        <StickerAndImage
          key={index}
          heading={result.txt1}
          img={result.img}
          current={result.txt2}
          navProps={this.props}
          goto={result.goto}
        />
      );
    });
  }

  render() {
    return (
      <ScrollView
      style={styles.scrollViewStyle}
      bounces={true} 
      contentContainerStyle={styles.container}>
        {/* //Header */}
        
        {this.rendermap()}
      </ScrollView>
    );
  }
}


const Tempdata = [
  {
    txt1: 'current Challenges',
    img: Images.DOLLAR,
    txt2: '2 Ongoing',
    goto: 'CurrentChallenges',
  },
  {
    txt1: 'Upcoming Challenges',
    img: Images.DOLLAR,
    txt2: '2 Upcoming',
    goto: 'UpComingChallenges',
  },
  {
    txt1: 'Hall Of Fame',
    img: Images.DOLLAR,
    txt2: '2 Ongoing',
    goto: 'HallOfFame',
  },
  // {
  //   txt1: 'Hall Of Fame',
  //   img: Images.DOLLAR,
  //   txt2: '2 Ongoing',
  //   goto: 'HallOfFame',
  // },
];


