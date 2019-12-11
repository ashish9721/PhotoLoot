import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Strings from '../../Constants/Strings';
import {styles} from './styles';
import {Images} from '../../Constants';
Searchdata = [
  {title: Strings.search3, showone: false},
  {title: Strings.search1, showone: true},
  {title: Strings.search2, showone: true},
];
const Search = props => {
  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.imgSearch}
          source={Images.WHITESEARCH}
          resizeMode="contain"
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#BDBDBD"
        />
      </View>
      <Text style={styles.recentSearch}>Recent Searches</Text>

      <FlatList
        data={Searchdata}
        keyExtractor={(item, index) => index.toString()}
        renderItem={rowData => {
          return rowData.item.showone ? (
            <TouchableOpacity style={styles.commonView}>
              <View style={styles.image} />
              <Text style={styles.commonText}>{rowData.item.title}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.firstView}>
              <View style={styles.firstImage} />
              <Text style={styles.text}>{rowData.item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};
export default Search;
