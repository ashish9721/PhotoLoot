// import React from 'react';
// import {
//   View,
//   StyleSheet,
//   Image,
//   Text,
//   Dimensions,
//   ImageBackground,
// } from 'react-native';
// import {Images} from '../../Constants'

//  const ThreeStickerComponent = () => {
//   return (
//     <View style={Style.MainViewStyle}>
//       <View style={Style.childViewStyle}>
//         <View style={{flexDirection: 'row'}}>
//           <View>
//             <Image
//               style={Style.imgStyle}
//               source={{
//                 uri:
//                   'https://tse4.mm.bing.net/th?id=OIP.C_aYl6j5rmlhzPBYMR34cAHaE8&pid=Api',
//               }}
//             />
//             <View style={Style.shadowViewStyle}>
//               <Image
//                 style={Style.prizeImageStyle}
//                 source={Images.GOLDMEDAL}
//               />
//               <Text>1st</Text>
//             </View>
//           </View>
//           <View>
//             <Image
//               style={Style.imgStyle}
//               source={{
//                 uri:
//                   'https://tse4.mm.bing.net/th?id=OIP.90zkV02ejqMcFwVTMtN5twHaLL&pid=Api',
//               }}
//             />
//             <View style={Style.shadowViewStyle}>
//               <Image
//                 style={Style.prizeImageStyle}
//                 source={Images.GOLDMEDAL}
//               />
//               <Text>2nd</Text>
//             </View>
//           </View>
//           <View>
//             <Image
//               style={Style.imgStyle}
//               source={{
//                 uri:
//                   'https://tse2.mm.bing.net/th?id=OIP.14i3kOGZNf8g7EiuzASeLgHaE8&pid=Api',
//               }}
//             />
//             <View style={Style.shadowViewStyle}>
//               <Image
//                 style={Style.prizeImageStyle}
//                 source={Images.GOLDMEDAL}
//               />
//               <Text>3rd</Text>
//             </View>
//           </View>
//         </View>
//         <ImageBackground
//         source={Images.WHITEBACKIMAGE}
//         style={Style.whiteBackground}>
//             <Text style={Style.txtStyle}>Jungle Safari</Text>
//             <Text style={Style.txtStyle2}>1st Jan 2018 - 20th Jan 2018 </Text>
//         </ImageBackground>
//       </View>          
//     </View>
//   );
// };
// const Style = StyleSheet.create({
//   MainViewStyle: {
//     // backgroundColor: 'red',
//     marginTop: 10,
//     alignItems: 'center',
//     height: Dimensions.get('screen').height / 3,
//   },
//   childViewStyle: {
//     backgroundColor: '#FEEED3',
//     flex: 0.8,
//     margin: 10,
//     borderRadius: 10,
//   },
//   imgStyle: {
//     width: Dimensions.get('window').width / 3 - 30,
//     height: 100,
//     margin: 10,
//     borderRadius: 10,
//   },
//   shadowViewStyle: {
//     flexDirection: 'row',
//     marginLeft: 25,
//     marginTop: 100,
//     width: 70,
//     height: 50,
//     position: 'absolute',
//     shadowColor: 'gray',
//     borderRadius: 5,
//     backgroundColor: 'white',
//     shadowOpacity: 0.4,
//     elevation: 12,
//     shadowOffset: {width: 0, height: 10},
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//   },
//   imgViewStyle: {
//     // backgroundColor: 'green',
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   prizeImageStyle: {
//     width: 30,
//     height: 30,
//   },
//   overlappingView: {
//     flexDirection: 'row',
//     position: 'absolute',
//   },
//   whiteBackground: {
//     width: "100%",
//     height: 90,
    
//     marginTop: 190,
//     position: 'absolute',
//   },
//   txtStyle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     paddingLeft: 50,
//     paddingTop: 10,
//   },
//   txtStyle2: {
//     fontWeight: '200',
//     paddingLeft: 50,
//     paddingTop: 10,
//   },
// });


// export {ThreeStickerComponent}




// the prizeView Component 
import React from 'react';
import {View,Text,TouchableOpacity,Image,Button,StyleSheet,Dimensions} from 'react-native'
import Images from '../../Constants/Images';
import { vw, DesignWidth, vh } from '../../Constants';

export {PrizeViews};

const Styles=StyleSheet.create({
    // this is 1st
    mainViewStyle:{
        flexDirection:'row',
        width:vw(DesignWidth),
        height: 120,
        alignItems:'center',
        justifyContent:'space-between',
        // might edit or not
        paddingHorizontal:vw(15)
        
    },
    // 2nd 
    shadowViewStyle:{
        flexDirection:'row',
        width: vw(105),
        height:vh(58),
        shadowColor:'gray',
        borderRadius:5,
        backgroundColor:'white',
        shadowOpacity:0.5,
        elevation:12,
        shadowOffset:{width: 1,height: 4},
        justifyContent:'space-evenly',
        alignItems:'center'
    },
      // 3rd
      imgStyle:{
        width:30,
        height:30,
        marginRight:10
    },
    // 4th
    grayTextStyle:{
        color:'gray',
        fontSize:12,
        marginRight:5
    },
    // 5th
    colorTextStyle:{
        color:'#66D680',
        fontWeight:'bold',
        fontSize:16
    },
    
})




 const PrizeViews=()=>{

    return(
        <View style={Styles.mainViewStyle}>
            <View style={Styles.shadowViewStyle}>
                <Image style={Styles.imgStyle}
                source={Images.GOLDMEDAL}/>
                <View >
                    <Text style={Styles.grayTextStyle}>1st Prize</Text>
                    <Text style={Styles.colorTextStyle}>$125</Text>
                </View>
            </View>
            <View style={Styles.shadowViewStyle}>
                <Image style={Styles.imgStyle}
                source={Images.GOLDMEDAL}/>
                <View>
                    <Text style={Styles.grayTextStyle}>2nd Prize</Text>
                    <Text style={Styles.colorTextStyle}>$60</Text>
                </View>
            </View>
            <View style={Styles.shadowViewStyle}>
                <Image style={Styles.imgStyle}
                 source={Images.GOLDMEDAL}/>
                <View>
                    <Text style={Styles.grayTextStyle}>3rd Prize</Text>
                    <Text style={Styles.colorTextStyle}>$35</Text>
                </View>
            </View>
        </View>
    )
}


export const Description=()=>{
    return(
        <View >
            <View style={Styles.container}>
            <Image style={Styles.imgStyle}
            source={Images.DESCRIPTIONICON} />
            <Text style={Styles.headingStyle}>
                    Description
                </Text>
                </View>
                <Text style={Styles.descriptionStyle}>
                    {DataToShow.Description}
                </Text>
           
        </View>
    )
}

export const Rules=()=>{

    return(
        <View >
            <View style={Styles.container}>
            <Image style={Styles.imgStyle}
            source={Images.RULESICON} />
            <Text style={Styles.headingStyle}>
                    Rules
                </Text>
                </View>
                <View style={Styles.rulesStyle}>
                    <Image source={Images.CHECKMARK}/>
                <Text style={Styles.descriptionStyle}>
                    {DataToShow.Rules[0]}
                </Text>
                </View>
                <View style={Styles.rulesStyle}>
                    <Image source={Images.CHECKMARK}/>
                <Text style={Styles.descriptionStyle}>
                   {DataToShow.Rules[1]}
                </Text>
                </View>
                <View style={Styles.rulesStyle}>
                    <Image source={Images.CHECKMARK}/>
                <Text style={Styles.descriptionStyle}>
                    {DataToShow.Rules[2]}
                </Text>
                </View>
                <View style={Styles.rulesStyle}>
                    <Image source={Images.CHECKMARK}/>
                <Text style={Styles.descriptionStyle}>
                    {DataToShow.Rules[3]}
                </Text>
                </View>
                <View style={Styles.rulesStyle}>
                    <Image source={Images.CHECKMARK}/>
                <Text style={Styles.descriptionStyle}>
                    {DataToShow.Rules[4]}
                </Text>
                </View>

        </View>
    )
}




const DataToShow = {"Rules": ["You must own the image you submit.",
"No nudity/inappropriate content.",
"Stick to the theme of the challange.",
"No voting with fake accounts.",
"To receive prizes, you must have a legitimate PayPal account.",
"Photos that violate any of the rules will be removed."], 
"Description": 
["This challenge is all about uploading the posts about your recent travels to places usually less travelled. Post more of your travelling pictures and get the chance to win."]}