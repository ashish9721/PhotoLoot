import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {galleryData} from '../../action/action';
import {connect} from 'react-redux';

//Custom Imports
import {GalleryModel} from './galleryModel';

 class ImageDetail extends Component {
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetail);
