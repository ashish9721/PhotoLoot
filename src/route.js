import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import {Image} from 'react-native';
//Custom Imports
import {Images} from './Constants';
import {styles} from './styles';
import CurrentChallenges from './modules/home/currentChallenges';
import Home from './modules/home/home';
import {Index} from './modules/gallery/index';
import Profile from './modules/profile/profile';
import {Edit} from './modules/profile/edit';
import search from './modules/search/search';
import Notifications from './modules/notification/Notifications';
import Settings from './modules/settings/settings';
import ChallengesInfo from './component/resuableClasses/challengesInfo';
import Signin from './modules/login/Signin';
import ForgotPassword from './modules/login/ForgotPassword';
import Verification from './modules/login/verification';
import Resend from './modules/login/Resend';
import SignUp from './modules/login/SignUp';
import Splash from './splash';
import HallOfFame from './modules/home/hallOfFame';
import UpComingChallenges from './modules/home/upcomingChallenges';
import ChangePassword from './modules/settings/ChangePassword';
import {
  VerificationModal,
  Congratulations,
  OutOfVotes,
  ImageRemove,
  UpdateAvailable,
  showConfirmationModal,
} from './modals/verificationModal';

import {color} from './Constants';
import TermsAndCondition from './modules/settings/TnC';
import Faq from './modules/settings/Faq';
import HelpnSupport from './modules/settings/Helpnsupport';

const HomeStack = createStackNavigator(
  {
    Home: {screen: Home, navigationOptions: {header: null}},
    CurrentChallenges: {screen: CurrentChallenges},
    HallOfFame: {screen: HallOfFame},
    UpComingChallenges: {screen: UpComingChallenges},
  },
);

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      header: null,
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

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Signin,
      navigationOptions: {
        header: null,
      },
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        header: null,
      },
    },
    Verification: {
      screen: Verification,
      navigationOptions: {
        header: null,
      },
    },
    Resend: {
      screen: Resend,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },

    Home: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      },
    },
    CurrentChallenges: {
      screen: CurrentChallenges,
      // navigationOptions: null,
    },
    Gallery: {
      screen: Index,
      // navigationOptions: null,
    },

    Profile: {
      screen: Profile,
      // navigationOptions: null,
    },
    Edit: {
      screen: Edit,
      // navigationOptions: null,
    },
    ChallengesInfo: {
      screen: ChallengesInfo,
      navigationOptions: null,
    },
    Search: {screen: search, navigationOptions: null},
    Notification: {screen: Notifications, navigationOptions: null},
    Settings: {screen: Settings, navigationOptions: null},
    ChangePassword:{screen:ChangePassword},
    TnC:{screen:TermsAndCondition},
    FAQ:{screen:Faq},
    HelpnSupport:{screen:HelpnSupport}
  },
  {
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName: 'Splash',
  },
);

const ModalStack = createStackNavigator(
  {
    Main: {screen: AppNavigator},
    VerificationModal: {screen: VerificationModal},
    // ResetPasswordModal: {screen: ResetPasswordModal},
    Congratulations: {screen: Congratulations},
    OutOfVotes: {screen: OutOfVotes},
    ImageRemove: {screen: ImageRemove},
    UpdateAvailable: {screen: UpdateAvailable},
    showConfirmationModal:{screen:showConfirmationModal}
  },
  {
    headerMode: 'none',
    mode: 'modal',
    transparentCard: true,
    cardStyle: {
      backgroundColor: color.transparentColorBlack,
      opacity:1
    },
  },
);
export default createAppContainer(ModalStack);
