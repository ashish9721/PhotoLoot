import React from 'react';
import {FlatList} from 'react-native';

import {faqDataList} from '../../action/action';
import {connect} from 'react-redux';
// Custom Imports
import QuestionAnswerList from './questionAnswerList';
import {Header} from '../../component/headers/header';

class Faq extends React.Component {
  render() {
    return (
      <>
        <Header
          title="FAQ"
          showBackButton={true}
          navProps={this.props.navigation}
        />
        <FlatList
          data={this.props.faqData}
          keyExtractor={(item, index) => index.toString}
          bounces={false}
          renderItem={({item, index}) => (
            <QuestionAnswerList index={index} item={item} />
          )}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log('state return is', state.faqReducer);
  const {faqData} = state.faqReducer;
  console.log('cards data is ', {...state.faqReducer});
  return {
    faqData,
  };
};
const mapDispatchToProps = dispatch => ({
  faqDataList: payload => dispatch(faqDataList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Faq);
