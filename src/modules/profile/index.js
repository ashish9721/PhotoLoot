import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

//Custom Imports
import {vw, color, vh} from '../../Constants';
import Posts from './posts';
import Followers from './follower';
import Following from './following';

const NavTabBar = createMaterialTopTabNavigator(
  {
    Posts: {
      screen: Posts,
      navigationOptions: ({navigation}) => {
          
          console.log("navigation state",navigation.state)
          return ({
        title: "Posts"
      })},
    },
    Followers: {
      screen: Followers,
    },
    Following: {
      screen: Following,
    },
  },
  {
    initialRouteName: 'Posts',
    tabBarOptions: {
      activeTintColor: color.white,
      inactiveTintColor: color.gray,
      style: {
        marginTop: vh(20),
        backgroundColor: color.whiteTwo,
      },
      labelStyle: {
        color: color.TAndC,
        fontSize: vw(15),
      },
      indicatorStyle: {
        backgroundColor: null,
      },
    },
    swipeEnabled: false,
  },
);

export default createAppContainer(NavTabBar);
