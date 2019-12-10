import React, { Component } from 'react'
import Signin from './src/modules/login/Signin';
import ForgotPassword from './src/modules/login/ForgotPassword';
import Verification from './src/modules/login/Verification';
import ChangePassword from './src/modules/settings/ChangePassword';
import TnC from './src/modules/settings/TnC';
import Helpnsupport from './src/modules/settings/Helpnsupport';
import Faq from './src/modules/settings/Faq';
import Notifications from './src/modules/notification/Notifications'
import Search from './src/modules/search/Search';
import Aboutus from './src/modules/settings/Aboutus';
import Settings from './src/modules/settings/Settings';
export default class App extends Component {
  render() {
    return (
      //  <Signin/>
      //<ForgotPassword/>
      // <Verification/>
      // <ChangePassword/>
      // <Helpnsupport/>
      //  <TnC/>
      // <Faq/>
      <Notifications />
      // <Search/>
      // <Aboutus/>
    //  <Settings/>
    )
  }
}

