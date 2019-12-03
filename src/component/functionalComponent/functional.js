import React from 'react';
import { View, TextInput, StyleSheet, Text, Image, ImageBackground} from 'react-native';
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
            <ImageBackground style={styles.imageContainer}>
            </ImageBackground>
            <View style={styles.icBaseContainer}>
                <ImageBackground style={styles.icBaseImage} source={Images.ICWHITEBASE}  >
                    { !props.innercontainer2 &&  <View style={styles.innercontainer1}>
                        <Image style={styles.dollarImage} source={Images.DOLLAR} resizeMode='contain' />
                        <View style={styles.textStickerContainer}>
                            <Text style={styles.txt1}>{props.txt1}</Text>
                            <Text style={styles.txt2}>{props.txt2}</Text>
                        </View>
                    </View> }
                    
                    { props.innercontainer2 &&  <View style={styles.innercontainer2}>
                        <View style={styles.innerinnercontainer}>
                            <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>Beach Happy</Text>
                            <Text style={{color:'gray',fontSize:12}}>Total Prize </Text>
                        </View>
                         
                        <View style={styles.innerinnercontainer}>
                        <Text style={{color:'gray',fontSize:12}}><Image source={Images.CLOCK} style={{height:vw(11),width:vw(11)}}/> 2days left</Text>
                        <Text style={{color:color.TAndC,fontSize:12}}>$ <Text style={{fontSize:20,color:color.TAndC}}>Prize</Text></Text>
                        </View>
                    </View>}



                </ImageBackground>
            </View>
        </View>
    )
}

export {
    //  Verify,
    StickerAndImage
}