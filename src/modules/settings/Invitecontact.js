import React, {Component} from 'react';
//import { StyleSheet, View} from 'react-native';
import Share from 'react-native-share';
export default class Invitecontact extends Component {
  state = {
    result: [],
  };
  shareApp = async () => {
    const shareOptions = {
      title: 'Share Via',
      message: 'some message',
      url: 'some share url',
      social: Share.Social.WHATSAPP,
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log('data', ShareResponse);
      this.setState({
        result: JSON.stringify(ShareResponse),
      });
    } catch (error) {
      console.log('Error =>', error);
      this.setState({
        result: getErrorString(error),
      });
    }
  };
}

//   render() {
//     return (
//     <View></View>
//     )
//   }
// }
// const styles = StyleSheet.create({});
