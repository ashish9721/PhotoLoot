import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {styles} from './styles';
import {Images, vh, color} from '../../Constants';

const StickerAndImage = props => {
  console.log('StickerImage', props.navProps);
  // navigate to next screen
  return (
    <TouchableOpacity
      style={styles.stickerAndImageContainer}
      activeOpacity={0.85}
      onPress={() => {
        console.log('StickerImage', props.navProps);
        props.navProps.navigation.navigate(props.goto);
      }}>
      <Image
        style={styles.imageContainer}
        source={{
          uri:
            'https://tse1.mm.bing.net/th?id=OIP.ZWCd2N3EHatubQsFCYKwrQHaFj&pid=Api',
        }}></Image>
      <View style={styles.icBaseContainer}>
        <ImageBackground style={styles.icBaseImage} source={Images.ICWHITEBASE}>
          {!props.innercontainer2 && (
            <View style={styles.innercontainer1}>
              <Image
                style={styles.dollarImage}
                source={props.img}
                resizeMode="contain"
              />
              <View style={styles.textStickerContainer}>
                <Text style={styles.txt1}>{props.heading}</Text>
                <Text style={styles.txt2}>{props.current}</Text>
              </View>
            </View>
          )}

          {props.innercontainer2 && (
            <View style={styles.innercontainer2}>
              <View style={styles.innerinnercontainer}>
                <Text style={styles.innerinnertxt1}>{props.heading}</Text>
                <Text style={styles.innerinnertxt2}>Total Prize</Text>
              </View>

              <View style={styles.innerinnercontainer}>
                <Text style={styles.innerinnertxt2}>
                  <Image
                    source={Images.CLOCK}
                    style={styles.innerinnerImgclock}
                    resizeMode="contain"
                  />
                  {props.time}
                </Text>
                <Text style={styles.innercontainerDollar}>
                  $ <Text style={styles.innerinnerprice}>{props.price}</Text>
                </Text>
              </View>
            </View>
          )}
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
const SmallSticker = props => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.smallsticker}>
      <View style={styles.smallstickerImg} />
      <View style={styles.smallstickerCard}>
        <View style={styles.smallcardContainer}>
          <Image style={styles.smallcardImg} source={Images.GOLDMEDAL} />
          <Text style={styles.innerinnertxt2}>{props.place}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ThreeStickerContainer = props => {
  return (
    <View style={styles.threeStickerContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.smallstickerContainer}>
          <SmallSticker place="1st" />
          <SmallSticker place="2nd" />
          <SmallSticker place="3rd" />
        </View>
      </View>
      <View style={styles.icBaseContainer}>
        <ImageBackground style={styles.icBaseImage} source={Images.ICWHITEBASE}>
          <View style={styles.innercontainer1}>
            <View style={styles.textStickerContainer}>
              <Text style={styles.txt1}>{props.heading}</Text>
              <Text style={styles.smallStickerDate}>
                <Image
                  source={Images.CLOCK}
                  style={styles.innerinnerImgclock}
                  resizeMode="contain"
                />{' '}
                {props.time}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
const ViewGallery = props => {
  return (
    <View style={styles.buttonView}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.prop.navigation.navigate('Gallery')}
        style={styles.galleryBackground}>
        <Text style={styles.galleryTextColor}>View Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.plusBackground}>
        <Image
          style={styles.plusIcon}
          source={Images.PLUS}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const Rules = props => {
  renderItem = rowData => {
    return (
      <>
        <View style={styles.rulesStyle}>
          <Image
            style={styles.checkImgStyle}
            source={Images.CHECKMARK}
            resizeMode="contain"
          />
          <Text style={styles.descriptionStyle}>{rowData.item.Rules}</Text>
        </View>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Image style={styles.imgStyle} source={Images.RULESICON} />
        <Text style={styles.Heading}>Rules</Text>
      </View>
      <FlatList
        data={DataToShow}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
        renderItem={this.renderItem}
      />
    </View>
  );
};
const Description = () => {
  return (
    <View style={styles.descriptionContainer}>
      <View style={styles.headingContainer}>
        <Image style={styles.imgStyle} source={Images.DESCRIPTIONICON} />
        <Text style={styles.Heading}>Description</Text>
      </View>
      <Text style={styles.descriptionStyle}>{description}</Text>
    </View>
  );
};

const PrizeViews = () => {
  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.shadowViewStyle}>
        <Image
          style={styles.prizeimgStyle}
          source={Images.GOLDMEDAL}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.grayTextStyle}>1st Prize</Text>
          <Text style={styles.colorTextStyle}>$125</Text>
        </View>
      </View>
      <View style={styles.shadowViewStyle}>
        <Image
          style={styles.prizeimgStyle}
          source={Images.SILVERMEDAL}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.grayTextStyle}>2nd Prize</Text>
          <Text style={styles.colorTextStyle}>$60</Text>
        </View>
      </View>
      <View style={styles.shadowViewStyle}>
        <Image
          style={styles.prizeimgStyle}
          source={Images.BRONZEMEDAL}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.grayTextStyle}>3rd Prize</Text>
          <Text style={styles.colorTextStyle}>$35</Text>
        </View>
      </View>
    </View>
  );
};
const CityLights = () => {
  renderText = (...rest) => {
    return (
      <Text
        style={{
          fontWeight: rest[1],
          fontSize: rest[2],
          color: rest[3],
          alignSelf: rest[4],
          marginTop: rest[5],
        }}>
        {rest[0]}
      </Text>
    );
  };
  return (
    <View style={styles.topView}>
      <View style={styles.alignView}>
        {this.renderText('City Lights in Night', '700', vh(15))}
        {this.renderText('Total Prize', '400', vh(15), color.gray)}
      </View>
      <View style={styles.alignView}>
        <View style={styles.alignView}>
          <Image
            style={styles.clockImage}
            source={Images.CLOCK}
            resizeMode="contain"
          />
          {this.renderText(
            '1 day to start',
            '700',
            vh(11),
            color.gray,
            'center',
          )}
        </View>
        <View style={styles.moneyTextView}>
          {this.renderText('$', '700', vh(13), color.TAndC, 'flex-end')}
          {this.renderText(
            '220',
            '700',
            vh(20),
            color.TAndC,
            'flex-end',
            vh(7),
          )}
        </View>
      </View>
    </View>
  );
};
const DataToShow = [
  {Rules: 'You must own the image you submit.'},
  {Rules: 'No nudity/inappropriate content.'},
  {Rules: 'Stick to the theme of the challange.'},
  {Rules: 'No voting with fake accounts.'},
  {Rules: 'To receive prizes, you must have a legitimate PayPal account.'},
  {Rules: 'Photos that violate any of the rules will be removed.'},
];

const description =
  'This challenge is all about uploading the posts about your recent travels to places usually less travelled. Post more of your travelling pictures and get the chance to win.';

export {
  //  Verify,
  StickerAndImage,
  ThreeStickerContainer,
  ViewGallery,
  Rules,
  Description,
  PrizeViews,
  CityLights,
};
