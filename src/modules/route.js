import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Custom Imports
import CurrentChallenges from './home/currentChallenges';
import Home from './home/home';
import {Gallery} from './gallery/gallery'
import {Index} from './gallery/index'
import Profile from './profile/profile';
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    CurrentChallenges: {
      screen: CurrentChallenges,
    },
    Gallery: {
      screen: Index,
    },
    
    Profile:{
        screen:Profile
    }
  },
  {
    initialRouteName: 'Gallery',
  },
);
export default createAppContainer(AppNavigator);
