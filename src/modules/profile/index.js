import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

//Custom Imports
import { vh, vw, color } from '../../Constants';
import Posts from './posts'
import Followers from './follower'
import Following from './following'

const NavTabBar = createMaterialTopTabNavigator({

    Posts: {
        screen: Posts,
    },
    Followers: {
        screen: Followers
    },
    Following: {
        screen: Following
    }
},
    {
        initialRouteName: 'Followers',
        tabBarOptions: {
            activeTintColor: color.white,
            inactiveTintColor: color.gray,
            style: {
                backgroundColor: color.TAndC,
            },
            labelStyle: {
                color: color.white,
                fontSize: vw(16)
            },
            indicatorStyle: {
                backgroundColor: null,

            },
        },
        swipeEnabled: false,
    },
)

export default createAppContainer(NavTabBar);