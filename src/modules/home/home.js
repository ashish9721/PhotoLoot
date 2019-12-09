import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {StickerAndImage} from '../../component/functionalComponent/functional';
import {styles} from './styles';
import {homeData} from '../../action/action';
import {Images, vh, vw} from '../../Constants';
import {connect} from 'react-redux';
class Home extends Component {
  constructor(props) {
    super(props);
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
  rendermap() {
    return this.props.HomeTempdata.map((result, index) => {
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
      <ScrollView
        style={styles.scrollViewStyle}
        bounces={true}
        contentContainerStyle={styles.container}>
        {/* //Header */}

        {
          this.props.HomeTempdata && 
          this.rendermap()
        }
      </ScrollView>
    );
  }
}

const Tempdata = [
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
  // {
  //   txt1: 'Hall Of Fame',
  //   img: Images.DOLLAR,
  //   txt2: '2 Ongoing',
  //   goto: 'HallOfFame',
  // },
];

const mapStateToProps = state => {
  console.log('state return is', state.cardReducer);

  const { HomeTempdata } = state.homeReducer;
  console.log('cards data is ', {...state.homeReducer});
  return {
    HomeTempdata,
  };
};

const mapDispatchToProps = dispatch => ({
  homeData: payload => dispatch(homeData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
