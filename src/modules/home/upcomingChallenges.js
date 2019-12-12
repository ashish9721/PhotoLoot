import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {StickerAndImage} from '../../component/functionalComponent/functional';
import {styles} from './styles';
import { Header } from '../../component/headers/header';
export default class UpComingChallenges extends Component {
  renderData() {
    return Tempdata.map((result, index) => {
      return (
        <StickerAndImage
          key={index}
          heading={result.txt1}
          img={result.img}
          time={result.txt2}
          price={result.price}
          innercontainer2={true}
          navProps={this.props}
          goto={'ChallengesInfo'}
        />
      );
    });
  }

  render() {
    return (
      <>
      <Header
       showBackButton={true}
       title="Upcoming Challenges"
       showVotebutton={true}
       navProps={this.props.navigation}
      />
      <ScrollView
        style={styles.scrollViewStyle}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.container}>
        {this.renderData()}
      </ScrollView>
      </>
    );
  }
}

const Tempdata = [
  {txt1: 'Beach Happy', txt2: '2 Days Left', price: '500'},
  {txt1: 'Beach Happy', txt2: '2 Days Left', price: '500'},
  {txt1: 'Beach Happy', txt2: '2 Days Left', price: '500'},
];
