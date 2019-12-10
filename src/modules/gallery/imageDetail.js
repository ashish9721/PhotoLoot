import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {galleryData} from '../../action/action';
import {connect} from 'react-redux';//Custom Imports
import {GalleryModel} from './galleryModel';

export class ImageDetail extends Component {
  render() {
    return (
      <FlatList
        data={this.props.imageTempData}
        keyExtractor={(item, index) => index.toString()}
        bounces={false}
        renderItem={({item}) => (
          <GalleryModel
            image={item.key}
            votes={item.votes}
            name={item.name}
            desc={item.desc}
            tags={item.tags}
          />
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log('state return is', state.galleryReducer);

  const {imageTempData} = state.galleryReducer;
  console.log('cards data is ', {...state.galleryReducer});
  return {
    imageTempData,
  };
};

const mapDispatchToProps = dispatch => ({
  galleryData: payload => dispatch(galleryData(payload)),
  updateState: (key, value) => dispatch(addUser(key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetail);



// const detailData = [
//   {
//     image:
//       'https://tse2.mm.bing.net/th?id=OIP.EaCbJ6gidUcJ-Y7-PL6pbgHaE7&pid=Api',
//     votes: '52k Votes',
//     name: 'Samual Mathers',
//     desc: 'Roads less traveled, places less visited, memories less reminisced.',
//     tags: '#travel #mountains #HIKING',
//   },
//   {
//     image:
//       'https://tse1.mm.bing.net/th?id=OIP.F94kObaQAj5_i-loJgy_NQHaEu&pid=Api',
//     votes: '52k Votes',
//     name: 'Samual Mathers',
//     desc: 'Roads less traveled, places less visited, memories less reminisced.',
//     tags: '#travel #mountains #HIKING',
//   },
//   {
//     image:
//       'https://tse2.mm.bing.net/th?id=OIP.HBOdUCW7Qnpu77ylkmwcfAHaE8&pid=Api',
//     votes: '52k Votes',
//     name: 'Samual Mathers',
//     desc: 'Roads less traveled, places less visited, memories less reminisced.',
//     tags: '#travel #mountains #HIKING',
//   },
//   {
//     image:
//       'https://tse4.mm.bing.net/th?id=OIP.CbyIWDBcGHE41N4YH_IzDwHaEK&pid=Api',
//     votes: '52k Votes',
//     name: 'Samual Mathers',
//     desc: 'Roads less traveled, places less visited, memories less reminisced.',
//     tags: '#travel #mountains #HIKING',
//   },
//   {
//     image:
//       'https://tse1.mm.bing.net/th?id=OIP.mylUadRXNCi9zV7EEG2EsgHaFS&pid=Api',
//     votes: '52k Votes',
//     name: 'Samual Mathers',
//     desc: 'Roads less traveled, places less visited, memories less reminisced.',
//     tags: '#travel #mountains #HIKING',
//   },
//   {
//     image:
//       'https://tse4.mm.bing.net/th?id=OIP.Mnd4Nm__snwOzmUZyfcpBAHaE7&pid=Api',
//     votes: '52k Votes',
//     name: 'Samual Mathers',
//     desc: 'Roads less traveled, places less visited, memories less reminisced.',
//     tags: '#travel #mountains #HIKING',
//   },
//   {
//     image:
//       'https://tse3.mm.bing.net/th?id=OIP.sF271bD2SVjZdvHheJA6UwHaE8&pid=Api',
//     votes: '52k Votes',
//     name: 'Samual Mathers',
//     desc: 'Roads less traveled, places less visited, memories less reminisced.',
//     tags: '#travel #mountains #HIKING',
//   },
//   {
//     image:
//       'https://tse2.mm.bing.net/th?id=OIP.RCJ6Ho2tgNMJEaN2RF0J0AHaFS&pid=Api',
//     votes: '52k Votes',
//     name: 'Samual Mathers',
//     desc: 'Roads less traveled, places less visited, memories less reminisced.',
//     tags: '#travel #mountains #HIKING',
//   },
//   {
//     image:
//       'https://tse2.mm.bing.net/th?id=OIP.LCi3JXWSe-Unf0txDApq6AHaE8&pid=Api',
//     votes: '52k Votes',
//     name: 'Samual Mathers',
//     desc: 'Roads less traveled, places less visited, memories less reminisced.',
//     tags: '#travel #mountains #HIKING',
//   },
// ];
