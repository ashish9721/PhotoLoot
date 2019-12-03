import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity,Image, ImageBackground} from 'react-native';
import { styles } from './styles'
import {Images,vw, vh,color} from '../../Constants'
// import { color } from '../../Constants/colors'
// import {styles} from '../../modules/login/styles.js'



// const Verify = () => {
//     return (
//         <View style={styles.SignUpContainer}>
//             <View style={styles.screenImg}></View>
//             <View style={styles.InputFieldContainer}>
//                 <View style={styles.screenTxtContainer}>
//                     <Text style={styles.screenTxt}>Verification</Text>
//                 </View>
//                 <Text style={styles.verifyTxt}>To verify it’s you please enter the OTP sent to your
// registered email ID.</Text>
//                 <View style={styles.inputTextField2Container}>
//                     <TextInput style={styles.inputTextField2}
//                         placeholder="Enter OTP"
//                         placeholderTextColor={color.placeholderText}
//                     ></TextInput>
//                     <View style={styles.inputTextField2Img}></View>
//                 </View>
//                 <View style={styles.submitBtn}>
//                     <Text style={styles.submitTxt}>Submit</Text>
//                 </View>
//                 <View style={styles.clickableLinkContVerification} >
//                     <Text style={styles.clickableLinkTxt}>Didn't Receive OTP?<Text style={styles.clickableLinkTxt} onPress={() => { console.warn("Resend"); }} style={styles.TAndC}> Resend</Text></Text>
//                 </View>
//             </View>

//         </View>
//     )
// }


const StickerAndImage = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            </View>
            <View style={styles.icBaseContainer}>
                <ImageBackground style={styles.icBaseImage} source={Images.ICWHITEBASE}  >
                    { !props.innercontainer2 &&  <View style={styles.innercontainer1}>
                        
                        <Image style={styles.dollarImage} source={props.img} resizeMode='contain' />
                        <View style={styles.textStickerContainer}>
                            <Text style={styles.txt1}>{props.txt1}</Text>
                            <Text style={styles.txt2}>{props.txt2}</Text>
                        </View>
                    </View> 
                }
                    
                    { props.innercontainer2 &&  <View style={styles.innercontainer2}>
                        <View style={styles.innerinnercontainer}>
                            <Text style={styles.innerinnertxt1}>Beach Happy</Text>
                            <Text style={styles.innerinnertxt2}>Total Prize</Text>
                        </View>
                         
                        <View style={styles.innerinnercontainer}>
                        <Text style={styles.innerinnertxt2}><Image source={Images.CLOCK} style={styles.innerinnerImgclock} resizeMode='contain' /> 2days left</Text>
                        <Text style={styles.innercontainerDollar}>$ <Text style={styles.innerinnerprice}>500</Text></Text>
                        </View>
                    </View>}



                </ImageBackground>
            </View>
        </View>
    )
}
const SmallSticker = (props)=>{
return(
<TouchableOpacity style={styles.smallsticker}>
    <View  style={styles.smallstickerImg}/>
     <View style={styles.smallstickerCard}>
        <View style={styles.smallcardContainer}>
            <Image style={styles.smallcardImg} source={Images.GOLDMEDAL}/>
            <Text style={styles.innerinnertxt2}>{props.place}</Text>
        </View>
     </View>
</TouchableOpacity>
)
}


const ThreeStickerContainer=(props)=>{
    return( <View style={styles.container}>
        <View style={styles.imageContainer}>
            <View style={styles.smallstickerContainer}>
                    <SmallSticker place="1st"/>
                    <SmallSticker place="2nd"/>
                    <SmallSticker place="3rd"/>
            </View>

        </View>
        <View style={styles.icBaseContainer}>
            <ImageBackground style={styles.icBaseImage} source={Images.ICWHITEBASE}  >
                <View style={styles.innercontainer1}>
                     <View style={styles.textStickerContainer}>
                        <Text style={styles.txt1}>{props.txt1}</Text>
                        <Text style={styles.smallStickerDate}><Image source={Images.CLOCK} style={styles.innerinnerImgclock} resizeMode='contain' /> 1st Jan 2018 - 20th Jan 2018</Text>

                    </View>
                </View> 
            
            </ImageBackground>
        </View>
    </View>
)
}

export {
    //  Verify,
    StickerAndImage,
    ThreeStickerContainer
}