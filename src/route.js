import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Custom Imports
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
import {
  VerificationModal,
  Congratulations,
  ResetPasswordModal,
  OutOfVotes,
  ImageRemove,
  UpdateAvailable,
} from './modals/verificationModal';

import {color} from './Constants';

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
      screen: Home,
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
    Signin: {screen: Signin},
    Search: {screen: search, navigationOptions: null},
    Notification: {screen: Notifications, navigationOptions: null},
    Search: {screen: search, navigationOptions: null},
    Notification: {screen: Notifications, navigationOptions: null},
    Settings: {screen: Settings, navigationOptions: null},
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
    ResetPasswordModal: {screen: ResetPasswordModal},
    Congratulations: {screen: Congratulations},
    OutOfVotes: {screen: OutOfVotes},
    ImageRemove: {screen: ImageRemove},
    UpdateAvailable: {screen: UpdateAvailable},
  },
  {
    headerMode: 'none',
    mode: 'modal',
    transparentCard: true,
    cardStyle: {
      backgroundColor: color.transparentColorBlack,
    },
  },
);

export default createAppContainer(ModalStack);
