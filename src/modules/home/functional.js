
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet,TouchableOpacity } from 'react-native'
import Images from '../../Constants/Images';
import { vw, vh, color } from '../../Constants';



const CityLights = () => {
    renderText = (...rest) => {
        return (
            <Text style={{
                fontWeight: rest[1],
                fontSize: rest[2],
                color: rest[3],
                alignSelf: rest[4],
                marginTop: rest[5]
            }}>
                {rest[0]}
            </Text>
        )
    }
    return (
        <View style={Styles.topView}>
            <View style={Styles.alignView}>
                {this.renderText("City Lights in Night", '700', vh(15))}
                {this.renderText("Total Prize", '400', vh(15), color.gray)}


            </View>
            <View style={Styles.alignView}>
                {this.renderText("1 day to start", '700', vh(11), color.gray, '', vh(13))}
                <View style={Styles.moneyTextView}>
                    {this.renderText("$", '700', vh(13), color.TAndC, 'flex-end')}
                    {this.renderText("220", '700', vh(20), color.TAndC, 'flex-end', vh(7))}
                </View>
            </View>
        </View>
    )
}

const PrizeViews = () => {

    return (
        <View style={Styles.mainViewStyle}>
            <View style={Styles.shadowViewStyle}>
                <Image style={Styles.imgStyle}
                    source={Images.GOLDMEDAL} />
                <View>
                    <Text style={Styles.grayTextStyle}>1st Prize</Text>
                    <Text style={Styles.colorTextStyle}>$125</Text>
                </View>
            </View>
            <View style={Styles.shadowViewStyle}>
                <Image style={Styles.imgStyle}
                    source={Images.SILVERMEDAL} />
                <View>
                    <Text style={Styles.grayTextStyle}>2nd Prize</Text>
                    <Text style={Styles.colorTextStyle}>$60</Text>
                </View>
            </View>
            <View style={Styles.shadowViewStyle}>
                <Image style={Styles.imgStyle}
                    source={Images.BRONZEMEDAL} />
                <View>
                    <Text style={Styles.grayTextStyle}>3rd Prize</Text>
                    <Text style={Styles.colorTextStyle}>$35</Text>
                </View>
            </View>
        </View>
    )
}


const Description = () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.headingContainer}>
                <Image style={Styles.imgStyle}
                    source={Images.DESCRIPTIONICON} />
                <Text style={Styles.Heading}>
                    Description
                </Text>
            </View>
            <Text style={Styles.descriptionStyle}>
                {description}
            </Text>

        </View>
    )
}

const Rules = () => {

    renderItem = (rowData) => {
        return (

            <View>
                <View style={Styles.rulesStyle}>
                    <Image
                        style={Styles.checkImgStyle}
                        source={Images.CHECKMARK} resizeMode='contain' />
                    <Text style={Styles.descriptionStyle}>
                        {rowData.item.Rules}
                    </Text>
                </View>
            </View>
        )
    }
    return (
        <View style={Styles.container}>
            <View style={Styles.headingContainer}>
                <Image style={Styles.imgStyle}
                    source={Images.RULESICON} />
                <Text style={Styles.Heading}>
                    Rules
                </Text>
            </View>
            <FlatList
                data={DataToShow}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
                renderItem={this.renderItem} />
                <View style={Styles.buttonView}>
                        <TouchableOpacity style={Styles.galleryBackground}>
                            <Text style={Styles.galleryTextColor}>View Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.plusBackground}>
                            <Image
                                style={Styles.plusIcon}
                                source={Images.PLUS} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>

        </View>
    )
}




const DataToShow = [
    { Rules: "You must own the image you submit." },
    { Rules: "No nudity/inappropriate content." },
    { Rules: "Stick to the theme of the challange." },
    { Rules: "No voting with fake accounts." },
    { Rules: "To receive prizes, you must have a legitimate PayPal account." },
    { Rules: "Photos that violate any of the rules will be removed." },

]

const description = "This challenge is all about uploading the posts about your recent travels to places usually less travelled. Post more of your travelling pictures and get the chance to win.";


const Styles = StyleSheet.create({
    //Prize View
    // this is 1st
    mainViewStyle: {
        flexDirection: 'row',
        marginTop: vh(22),
        justifyContent: 'space-between',

    },
    // 2nd 
    shadowViewStyle: {
        flexDirection: 'row',
        width: vw(105),
        height: vh(58),
        shadowColor: 'gray',
        borderRadius: vw(5),
        backgroundColor: 'white',
        shadowOpacity: 0.5,
        elevation: 12,
        shadowOffset: { width: 1, height: 4 },
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    // 3rd
    imgStyle: {
        width: vw(24),
        height: vh(30),
        marginRight: vw(10)
    },
    // 4th
    grayTextStyle: {
        color: 'gray',
        fontSize: 12,
        marginRight: 5
    },
    // 5th
    colorTextStyle: {
        color: '#66D680',
        fontWeight: 'bold',
        fontSize: 16
    },
    //Description Style
    container: {
        marginTop: vh(28)
    },
    Heading: {
        fontSize: vw(13),
        fontWeight: '700',
        marginLeft: vw(7),
    },
    imgStyle: {
        width: vw(14),
        height: vh(16)
    },
    headingContainer: {
        flexDirection: 'row',
        marginBottom: vh(12),
    },
    rulesStyle: {
        flexDirection: 'row',
        marginLeft:vw(10),
        marginBottom:vh(20)
    },
    descriptionStyle: {
        color: color.description,
        marginLeft:vw(8)
    },
    //CityLights
    topView: {
        marginTop: vh(15),
        justifyContent: 'space-around'
    },
    alignView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    moneyTextView: {
        flexDirection: 'row'
    },
    checkImgStyle:{
        width:vw(10),
        height:vh(9)
    },
    //Gallery
    buttonView: {
        marginTop: vh(30),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    plusBackground: {
        backgroundColor: color.TAndC,
        width: vw(55),
        height: vh(45),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(10)
    },
    plusIcon: {
        width: vw(20),
        height: vw(20),
        paddingHorizontal: vw(18),
        paddingVertical: vh(12)
    },
    galleryTextColor: {
        color: color.TAndC,
        fontSize: vh(15),
        fontWeight: '600'
    },
    galleryBackground: {
        width: vw(125),
        height: vh(45),
        shadowColor: 'gray',
        borderRadius: vw(10),
        backgroundColor: 'white',
        shadowOpacity: 0.5,
        elevation: 12,
        shadowOffset: { width: 1, height: 4 },
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: vh(50)

    }


})
export { PrizeViews, Rules, Description, CityLights };