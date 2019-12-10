import React from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import Strings from '../../Constants/Strings';
import {styles} from './styles';

notificationData = [
  {
    name: 'Manny Dolores',
    title: Strings.heading1,
    time: Strings.time1ForNotification,
    isRead: 'first',
  },
  {
    name: '',
    moto: 'New Challenge',
    place: '"Roads less travelled"',
    title: Strings.heading2,
    time: Strings.time2ForNotification,
  },
  {
    name: ' Peter Caulins',
    title: Strings.heading3,
    time: Strings.time3ForNotification,
  },
  {
    name: 'Peter Caulins',
    title: Strings.heading4,
    time: Strings.time4ForNotification,
  },
  {
    name: '',
    moto: 'Challenge',
    place: '"7 Wonders of world"',
    title: Strings.heading5,
    time: Strings.time5ForNotification,
  },
];
renderItem = rowData => {
  console.warn(rowData.item.name.length);
  if (rowData.item.name.length > 0) {
    return (
      <>
        <View style={styles.parent}>
          <Image style={styles.notificationImage} />

          <Text style={styles.newText}>
            <Text style={styles.nameText}>{rowData.item.name} </Text>
            {rowData.item.title}
          </Text>
        </View>
        <Text style={styles.timeText}>{rowData.item.time}</Text>
        <View style={styles.line} />
      </>
    );
  } else {
    return (
      <>
        <View style={styles.parent}>
          <Image style={styles.notificationImage} />
          <Text style={styles.startText}>
            {rowData.item.moto}
            <Text style={styles.nameText}> {rowData.item.place}</Text>
            {rowData.item.title}
          </Text>
        </View>
        <Text style={styles.timeText}>{rowData.item.time}</Text>
        <View style={styles.line} />
      </>
    );
  }
};

const Notifications = props => {
  return (
    <SafeAreaView>
      <FlatList
        data={notificationData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
      />
    </SafeAreaView>
  );
};

export default Notifications;
