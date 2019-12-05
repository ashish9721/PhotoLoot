import React, {Component} from 'react';
import {View, Image, ScrollView} from 'react-native';
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
import ChallengesInfo from '../../component/resuableClasses/challengesInfo';
export class Home extends Component {
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
      contentInset={{top:0,left:0,right:0,bottom:500}}
      bounces={true} 
      contentContainerStyle={styles.container}>
        {/* //Header */}
        {/* <View style={styles.headerView}></View> */}
        {/*  pass a 2 images as a prop, one as imagebackground and 2nd as a image  */}
        {/* <StickerAndImage txt1="Current Challenges" img={Images.DOLLAR} txt2="2 Ongoing" innercontainer2={true} />
                <StickerAndImage txt1="Upcoming Challenges" img={Images.DOLLAR} txt2="2 Upcoming" />
               <StickerAndImage txt1="Hall Of Fame" img={Images.DOLLAR} txt2="View Winners" />  */}
        {/* <ThreeStickerContainer txt1="Jungle Safari"/>
               <ThreeStickerContainer txt1="Jungle Safari"/>
               <ThreeStickerContainer txt1="Jungle Safari"/> */}
        {/* <HallOfFame/> */}
        {/* <Notifications/> */}
        {/* <CurrentChallenges/> */}
        {this.rendermap()}
      </ScrollView>
    );
  }
}
const HomeStack = createStackNavigator({
  Home: {screen: Home,navigationOptions:{header:null}},
  CurrentChallenges: {screen: CurrentChallenges},
  HallOfFame: {screen: HallOfFame},
  UpComingChallenges: {screen: UpComingChallenges},
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      header:null,
      title: '',
      tabBarIcon: ({tintColor, focused}) => (
        <Image
          source={focused ? Images.HOME : Images.UNHOME}
          style={styles.bottomTabImg}
          resizeMode="contain"
        />
      ),
    },
  },
  Search: {
    screen: search,
    navigationOptions: {
      title: '',
      tabBarIcon: ({tintColor, focused}) => (
        <Image
          source={focused ? Images.SEARCH : Images.UNSEARCH}
          style={styles.bottomTabImg}
          resizeMode="contain"
        />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: '',
      tabBarIcon: ({tintColor, focused}) => (
        <Image
          source={focused ? Images.PROFILE : Images.UNPROFILE}
          style={styles.bottomTabImg}
          resizeMode="contain"
        />
      ),
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: '',
      tabBarIcon: ({tintColor, focused}) => (
        <Image
          source={focused ? Images.NOTIFICATION : Images.UNNOTIFICATION}
          style={styles.bottomTabImg}
          resizeMode="contain"
        />
      ),
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: '',
      tabBarIcon: ({tintColor, focused}) => (
        <Image
          source={focused ? Images.SETTINGS : Images.UNSETTINGS}
          style={styles.bottomTabImg}
          resizeMode="contain"
        />
      ),
    },
  },
});

export default createAppContainer(TabNavigator);

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

{
  /* const tempData = [{}] */
}
