import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Strings from '../../Constants/Strings';
import Images from '../../Constants/Images';
import {styles} from './styles';
notifydata = [
  {
    title: Strings.CHANGEPASSWORD,
    image: Images.LOCK,
    sign: Images.ARROW,
    goto: 'ChangePassword',
  },

  {
    title: Strings.TERMS,
    image: Images.TERMS,
    sign: Images.ARROW,
    goto: 'TnC',
  },
  {
    title: Strings.FAQs,
    image: Images.FAQ,
    sign: Images.ARROW,
    goto: 'FAQ',
  },
  {
    title: Strings.ABOUTUS,
    image: Images.ABOUT,
    sign: Images.ARROW,
  },
  {
    title: Strings.HELPSUPPORT,
    image: Images.HELP,
    sign: Images.ARROW,
    goto: 'HelpnSupport',
  },
  {
    title: Strings.INVITECONTACT,
    image: Images.INVITE,
    sign: Images.ARROW,
  },
  {
    title: Strings.NOTIFICATION,
    image: Images.NOTIFY,
    isNotification: true,
  },
  {
    title: Strings.HISTORY,
    image: Images.CLEARSEARCH,
    sign: null,
    goto: 'showConfirmationModal',
  },
  {
    title: Strings.ACCOUNT,
    image: Images.DEACTIVATE,
    sign: null,
    goto: 'showConfirmationModal',
  },
  {
    title: Strings.SIGNOUT,
    image: Images.SIGN,
    sign: null,
    goto: 'showConfirmationModal',
  },
];

class Settings extends React.Component {
  state = {switchValue: false};
  toggleSwitch = value => {
    this.setState({switchValue: value});
  };
  sendData = rowData => {
    switch (rowData.item.title) {
      case 'Clear History':
        this.props.navigation.navigate(rowData.item.goto,{title:rowData.item.title});
        break;
      case 'Deactivate Account':
        this.props.navigation.navigate(rowData.item.goto);
      default:
        this.props.navigation.navigate(rowData.item.goto);
    }
  };
  render() {
    return (
      <FlatList
        data={notifydata}
        keyExtractor={index => index.toString()}
        renderItem={rowData => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => this.sendData(rowData)}
                activeOpacity={0.7}
                style={styles.commonview}>
                <View style={styles.changeview}>
                  <Image style={styles.image} source={rowData.item.image} />
                  <Text style={styles.notifytext}>{rowData.item.title}</Text>
                </View>
                {rowData.item.isNotification ? (
                  <Switch
                    style={styles.switchtoggle}
                    onValueChange={this.toggleSwitch}
                    value={this.state.switchValue}
                  />
                ) : (
                  <Image style={styles.imgarrow} source={rowData.item.sign} />
                )}
              </TouchableOpacity>
            </View>
          );
        }}
      />
    );
  }
}
export default Settings;
