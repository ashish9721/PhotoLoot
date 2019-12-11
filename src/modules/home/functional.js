// the prizeView Component 
import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native'
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