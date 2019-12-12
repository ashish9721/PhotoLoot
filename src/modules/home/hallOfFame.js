import React, {Component} from 'react';
import {Text, View, SectionList} from 'react-native';
import {vh, vw} from '../../Constants';
import {styles} from './styles';
import {ThreeStickerContainer} from '../../component/functionalComponent/functional';
import { Header } from '../../component/headers/header';

export default class HallOfFame extends Component {
  renderData(result) {
    console.log('my result is ', result);
    return (
      <ThreeStickerContainer
        heading={result.item.txt1}
        img={result.item.img}
        time={result.item.txt2}
        price={result.item.price}
        innercontainer2={true}
        navProps={this.props}
      />
    );
  }

  render() {
    return (
      <>
      <Header
       showBackButton={true}
       title="Hall of Fame"
       showVotebutton={true}
       navProps={this.props.navigation}
      />
      <View style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={index => index.toString()}
          renderItem={this.renderData}
          renderSectionHeader={({
            section: {
              header: {title, challenges},
            },
          }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: vw(15),
                height: vh(30),
                backgroundColor: 'white',
                alignItems:'center',
              }}>
              <Text
                style={{color: 'black', fontWeight: 'bold', fontSize: vw(18)}}>
                {title}
              </Text>
              <Text
                style={{color: 'black', textAlign: 'right', fontSize: vw(12)}}>
                {challenges} challenges
              </Text>
            </View>
          )}
        />
      </View>
      </>
    );
  }
}

const Tempdata = [
  {txt1: 'Jungle Safari', txt2: '1st Jan 2018 - 20th Jan 2018'},
  {txt1: 'Roads Travelled', txt2: '5st Jan 2018 - 20th Jan 2018'},
  {txt1: 'Beach ', txt2: '2st Jan 2018 - 20th Jan 2018'},
];

const DATA = [
  {
    header: {title: 'January', challenges: '3'},
    data: Tempdata,
  },
  {
    header: {title: 'February', challenges: '2'},
    data: Tempdata,
  },
  {
    header: {title: 'April', challenges: '4'},
    data: Tempdata,
  },
  {
    header: {title: 'November', challenges: '5'},
    data: Tempdata,
  },
];
