import React, {Component} from 'react';

import {ScrollView} from 'react-native';
import {cardData} from '../../action/action';
import {connect} from 'react-redux';
//Custom Imports
import {StickerAndImage} from '../../component/functionalComponent/functional';
import {styles} from './styles';
import {Header} from '../../component/headers/header'
 class CurrentChallenges extends Component {
  componentDidMount() {
    this.cardsToExport();
  }
  cardsToExport = () => {
    let payload = [
      {
        txt1: 'Beach Happy',
        txt2: '3 Days Left',
        price: '500',
        goto: 'ChallengesInfo',
      },
      {
        txt1: 'Happy',
        txt2: '4 Days Left',
        price: '600',
        goto: 'ChallengesInfo',
      },
      {
        txt1: 'Summer',
        txt2: '10 Days Left',
        price: '300',
        goto: 'ChallengesInfo',
      },
    ];

    this.props.cardData(payload);
  };
  renderData() {
    return this.props.Tempdata.map((result, index) => {
      return (
        <StickerAndImage
          key={index}
          heading={result.txt1}
          img={result.img}
          current={result.txt2}
          navProps={this.props}
          goto={result.goto}
        />
      );
    });
  }
  render() {
    return (
      <>
      <Header 
      showBackButton={true}
      title="Current Challenges"
      showVotebutton={true}
      navProps={this.props.navigation}
      />
      <ScrollView
        style={styles.scrollViewStyle}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.container}>
        {this.props.Tempdata && this.renderData()}
      </ScrollView>
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log('state return is', state.cardReducer);

  const {Tempdata} = state.cardReducer;
  console.log('cards data is ', {...state.cardReducer});
  return {
    Tempdata,
  };
};

const mapDispatchToProps = dispatch => ({
  cardData: payload => dispatch(cardData(payload)),
  updateState: (key, value) => dispatch(addUser(key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChallenges);
