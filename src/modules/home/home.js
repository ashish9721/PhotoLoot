import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
//Custom Imports
import {StickerAndImage} from '../../component/functionalComponent/functional';
import {styles} from './styles';
import {homeData} from '../../action/action';
import {Images} from '../../Constants';
import {Header} from '../../component/headers/header'
class Home extends Component {
  constructor(props) {
    super(props);
    this.cardsToExport();
  }
  componentDidMount() {
    this.cardsToExport();
  }
  cardsToExport = () => {
    let payload = [
      {
        txt1: 'current Challenges',
        img: Images.DOLLAR,
        txt2: '2 Ongoing',
        goto: 'CurrentChallenges',
      },
      {
        txt1: 'Upcoming Challenges',
        img: Images.CALENDER,
        txt2: '2 Upcoming',
        goto: 'UpComingChallenges',
      },
      {
        txt1: 'Hall Of Fame',
        img: Images.HOMETROPHY,
        txt2: '2 Ongoing',
        goto: 'HallOfFame',
      },
    ];

    this.props.homeData(payload);
  };
  rendermap = () => {
    return this.props.HomeTempdata.map((result, index) => {
      console.log('render data', result);

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
  };

  render() {
    console.log(' props.homedata', this.props.HomeTempdata);

    return (
      <>
      <Header
      showBackButton={false}
      title="Home"
      showVotebutton={true}
      
      />
      <ScrollView
      showsVerticalScrollIndicator={false}
        style={styles.scrollViewStyle}
        bounces={true}
        contentContainerStyle={styles.container}>
        {/* //Header */}

        {this.props.HomeTempdata && this.rendermap()}
      </ScrollView>
      </>
    );
  }
}

// const Tempdata = [
//   {
//     txt1: 'current Challenges',
//     img: Images.DOLLAR,
//     txt2: '2 Ongoing',
//     goto: 'CurrentChallenges',
//   },
//   {
//     txt1: 'Upcoming Challenges',
//     img: Images.CALENDER,
//     txt2: '2 Upcoming',
//     goto: 'UpComingChallenges',
//   },
//   {
//     txt1: 'Hall Of Fame',
//     img: Images.HOMETROPHY,
//     txt2: '2 Ongoing',
//     goto: 'HallOfFame',
//   },
// {
//   txt1: 'Hall Of Fame',
//   img: Images.DOLLAR,
//   txt2: '2 Ongoing',
//   goto: 'HallOfFame',
// },
// ];

const mapStateToProps = state => {
  // console.log('state return is', state.cardReducer);
  console.log('data is ', {...state.homeReducer});

  const {HomeTempdata} = state.homeReducer;
  console.log(' hnhnhn is ', HomeTempdata);
  return {
    HomeTempdata,
  };
};

const mapDispatchToProps = dispatch => ({
  homeData: payload => dispatch(homeData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
