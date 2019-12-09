import React, {Component} from 'react';

import {ScrollView} from 'react-native';
import {cardData} from '../../action/action';
import {connect} from 'react-redux';
import {StickerAndImage} from '../../component/functionalComponent/functional';
import {styles} from './styles';

export class CurrentChallenges extends Component {
  constructor(props) {
    super(props);
    this.cardsToExport();
    console.log("asdas",this.props.Tempdata);
    
  }
  cardsToExport = () => {
    let payload = [
      {txt1: 'Beach Happy', txt2: '3 Days Left', price: '500'},
      {txt1: 'Happy', txt2: '4 Days Left', price: '600'},
      {txt1: 'Summer', txt2: '10 Days Left', price: '300'},
    ];

    this.props.cardData(payload);
  };
  renderData() {
    console.log('tempdata is', this.props.Tempdata);
    return Object.keys(this.props.Tempdata || []).map((key, index) => {
      let result = this.props.Tempdata[key];
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
      <ScrollView
        style={styles.scrollViewStyle}
        bounces={false}
        contentContainerStyle={styles.container}>
        {this.renderData()}
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  console.log('state return is', state.cardReducer);

  const Tempdata = state.cardReducer;
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


