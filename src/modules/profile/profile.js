import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
//Custom Imports
import {styles} from './styles';
import {vh, color, Strings, Images} from '../../Constants';
import NavTabBar from './index';
import { Header } from '../../component/headers/header';

export default class Profile extends Component {
  componentDidMount(){
    this.props.navigation.setParams({ name: 'Lucy' })
  }
  renderText = (...rest) => {
    return (
      <Text
        style={{
          fontSize: rest[1],
          fontWeight: rest[2],
          color: rest[3],
          marginTop: rest[4],
        }}>
        {rest[0]}
      </Text>
    );
  };
  render() {
    return (
      <>
      <Header
      title="Patricia.cau88"
      showBackButton={false}
      showVotebutton={false}
      />
        <View style={styles.container}>
          <View style={styles.profileImgStyle} />
          <View style={styles.texts}>
            <View style={styles.editView}>
              {this.renderText('Patricia Caullins', vh(15), '600')}
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Edit')}
                style={styles.editButton}>
                <Image source={Images.EDITIMAGE} resizeMode="contain" />
              </TouchableOpacity>
            </View>
            {this.renderText('patricia_aul@xyz.com', vh(12), '600', color.gray)}
            {this.renderText(
              Strings.profileDescription,
              vh(11),
              '400',
              'black',
              vh(9),
            )}
            <View style={{flexDirection: 'row'}}>
              {this.renderText('250K', vh(11), 'bold', color.TAndC, vh(14))}
              {this.renderText(
                ' votes received till now',
                vh(11),
                '400',
                color.gray,
                vh(14),
              )}
            </View>
          </View>
        </View>
        <NavTabBar 
        />
      </>
    );
  }
}
