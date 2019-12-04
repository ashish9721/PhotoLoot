import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
//Custom Imports
import {GalleryModel} from './galleryModel';

export default class ImageDetail extends Component {
  render() {
    return (
      <FlatList
        data={detailData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <GalleryModel
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

const detailData = [
  {
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
  {
    votes: '52k Votes',
    name: 'Samual Mathers',
    desc: 'Roads less traveled, places less visited, memories less reminisced.',
    tags: '#travel #mountains #HIKING',
  },
];
