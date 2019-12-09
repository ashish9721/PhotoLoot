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
  },

  {
    title: Strings.TERMS,
    image: Images.TERMS,
    sign: Images.ARROW,
  },
  {
    title: Strings.FAQs,
    image: Images.FAQ,
    sign: Images.ARROW,
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
    sign: null
  },
  {
    title: Strings.ACCOUNT,
    image: Images.DEACTIVATE,
    sign:null
  },
  {
    title: Strings.SIGNOUT,
    image: Images.SIGN,
    sign:null
  },
];

class Settings extends React.Component {
  state = {switchValue: false};
  toggleSwitch = value => {
    this.setState({switchValue: value});
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
                    activeOpacity={0.7}
                    style={styles.commonview}>
                    <View style={styles.changeview}>
                      <Image style={styles.image} source={rowData.item.image} />
                      <Text style={styles.notifytext}>
                        {rowData.item.title}
                      </Text>
                    </View>
                    {rowData.item.isNotification ? (
                      <Switch
                        style={styles.switchtoggle}
                        onValueChange={this.toggleSwitch}
                        value={this.state.switchValue}
                      />
                    ) : (
                      <Image
                        style={styles.imgarrow}
                        source={rowData.item.sign}
                      />
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