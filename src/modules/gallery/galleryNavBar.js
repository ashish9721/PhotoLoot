import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {Image} from 'react-native';
import React from 'react';
//Custom Imports

import {vw, color, Images, vh} from '../../Constants';

import {Gallery} from './gallery';
import ImageDetail from './imageDetail';

const NavTabBar = createMaterialTopTabNavigator(
  {
    Gallery: {
      screen: Gallery,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => (
          <Image source={focused ? Images.GRIDFOCUSED:Images.GRID} style={{width: vw(25), height: vw(25)}} />
        ),
      },
    },
    ImageDetail: {
      screen: ImageDetail,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => (
          <Image source={focused?Images.LISTFOCUSED:Images.LISTIMAGE} style={{width: vw(25), height: vw(25)}} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Gallery',
    tabBarOptions: {
      activeTintColor: color.white,
      inactiveTintColor: color.gray,
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: color.white,
        marginBottom:vh(10)
      },
    
      indicatorStyle: {
        backgroundColor:color.TAndC,
        width:vw(100),
        marginLeft:vw(45),
        height:vh(3),
      },
    },
    swipeEnabled: true,
  },
);

export default createAppContainer(NavTabBar);
