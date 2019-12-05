import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Custom Imports
import CurrentChallenges from './modules/home/currentChallenges';
import Home from './modules/home/home';
import { Index } from './modules/gallery/index'
import Profile from './modules/profile/profile';
import { Edit } from './modules/profile/edit'
import search from './modules/search/search';
import Notifications from './modules/notification/Notifications';
import Settings from './modules/settings/settings';
import ChallengesInfo from './component/resuableClasses/challengesInfo'
import Signin from './modules/login/Signin';
import ForgotPassword from './modules/login/ForgotPassword';
import Verification from './modules/login/verification';
import Resend from './modules/login/Resend';
import SignUp from './modules/login/SignUp';
import Splash from './splash'

const AppNavigator = createStackNavigator(
  {
    Splash:{
      screen:Splash,
      header:null
    },
    Login: {
      screen: Signin,
      navigationOptions:{
        header:null
      }
    },
    ForgotPassword: {
      screen: ForgotPassword,
    },
    Verification: {
      screen: Verification,
    },
    Resend: {
      screen: Resend,
    },
    SignUp:{
      screen:SignUp
    },
    Home: {
      screen: Home,
      navigationOptions:null

    },
    CurrentChallenges: {
      screen: CurrentChallenges,
      navigationOptions:null

    },
    Gallery: {
      screen: Index,
      navigationOptions:null
    },

    Profile: {
      screen: Profile,
      navigationOptions:null

    },
    Edit: {
      screen: Edit,
      navigationOptions:null

    },
    ChallengesInfo: {
      screen: ChallengesInfo,
      navigationOptions:null

    },
    Signin:{screen:Signin},
    Search: { screen: search,
      navigationOptions:null
    },
    Notification: { screen: Notifications ,
      navigationOptions:null
    },
    Settings: { screen: Settings ,
      navigationOptions:null
    },

  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
   },
    initialRouteName: 'Splash',
  },
  
);
export default createAppContainer(AppNavigator);