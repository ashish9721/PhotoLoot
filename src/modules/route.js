import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Custom Imports
import CurrentChallenges from './home/currentChallenges';
import Home from './home/home';
import {Index} from './gallery/index'
import Profile from './profile/profile';
import {Edit} from './profile/edit'
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
    },
    Edit:{
      screen:Edit
    }
  },
  {
    initialRouteName: 'CurrentChallenges',
  },
);
export default createAppContainer(AppNavigator);
