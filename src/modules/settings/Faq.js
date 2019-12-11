import React from 'react';
import {
  FlatList,
} from 'react-native';
import QuestionAnswerList from './questionAnswerList';

export default class Faq extends React.Component {
  render() {
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString}
        bounces={false}
        renderItem={({item,index}) => <QuestionAnswerList 
        index={index}
        item={item} />}
      />
    );
  }
}
const data = [
  {
    que: 'When does a new challenge start and how can I know?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
  },
  {
    que:
      'How will I know I have won the challenge and how will I get the prize money?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
  },
  {
    que:
      'How do I upload a picture in any challenge and what are the basic rules of submissions?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
  },
  {
    que:
      'Lorem ipsum dolor sit amet, consectetur piscing elit, sed do eiusmod tempor?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
  },
  {
    que:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
  },
];
