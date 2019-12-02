import React from 'react';
import { View, TextInput, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import { styles } from './styles'
import {Images} from '../../Constants'
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
            <ImageBackground style={styles.imageContainer}>
            </ImageBackground>
            <View style={styles.icBaseContainer}>
                <ImageBackground style={styles.icBaseImage} source={Images.ICWHITEBASE}  >
                    <View style={styles.innercontainer1}>
                        <Image style={styles.dollarImage} source={Images.DOLLAR} resizeMode='contain' />
                        <View style={styles.textStickerContainer}>
                            <Text style={styles.txt1}>{props.txt1}</Text>
                            <Text style={styles.txt2}>{props.txt2}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export {
    //  Verify,
    StickerAndImage
}