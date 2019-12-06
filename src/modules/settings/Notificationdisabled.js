import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Strings from '../../Constants/Strings';
import {styles} from './styles';
notifydata = [
  {
    title: Strings.text1,
    image: require('../../../src/Images/TermsCon.png'),
    image1: require('../../../src/Images/Arr.png'),
  },
  {
    title: Strings.text2,
    image: require('../../../src/Images/Faq.png'),
    image1: require('../../../src/Images/Arr.png'),
  },
  {
    title: Strings.text3,
    image: require('../../../src/Images/AboutUs.png'),
    image1: require('../../../src/Images/Arr.png'),
  },
  {
    title: Strings.text4,
    image: require('../../../src/Images/HelpNSupport.png'),
    image1: require('../../../src/Images/Arr.png'),
  },
  {
    title: Strings.text5,
    image: require('../../../src/Images/Invite.png'),
    image1: require('../../../src/Images/Arr.png'),
  },
  {
    title: Strings.text6,
    image: require('../../../src/Images/Notif.png'),
    image1: require('../../../src/Images/ToggleOff.png'),
    isNotification: true,
  },
  {title: Strings.text7, image: require('../../../src/Images/ClearSearch.png')},
  {title: Strings.text8, image: require('../../../src/Images/Deactivate.png')},
  {title: Strings.text9, image: require('../../../src/Images/SignOut.png')},
];
const Notificationdisabled = props => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.header}>
          <Text style={styles.textsettings}>Settings</Text>
        </View>
        <View style={styles.firstview}>
          <View style={styles.changeview}>
            <Image
              style={styles.image}
              source={require('../../../src/Images/ChangPass.png')}
            />
            <Text style={styles.notifytext}>Change Password</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.imgarrow}
              source={require('../../../src/Images/Arr.png')}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={notifydata}
          keyExtractor={index => index.toString()}
          renderItem={rowData => {
            return (
              <View>
                <View style={styles.commonview}>
                  <View style={{flexDirection: 'row'}}>
                    <Image style={styles.image} source={rowData.item.image} />
                    <Text style={styles.notifytext}>{rowData.item.title}</Text>
                  </View>
                  {rowData.item.isNotification ? (
                    <Image
                      style={styles.imgtoggle}
                      source={rowData.item.image1}
                    />
                  ) : (
                    <TouchableOpacity>
                      <Image
                        style={styles.imgarrow}
                        source={rowData.item.image1}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Notificationdisabled;
