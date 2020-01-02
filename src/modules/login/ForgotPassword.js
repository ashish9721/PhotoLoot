import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
// Custom Imports
import {Images} from '../../Constants';
import {styles} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
export default class ForgotPassword extends React.Component {
  state = {
    email: '',
  };
  onSubmit = () => {
    AsyncStorage.getItem('email', (err, res) => {
      if (this.state.email === res) {
        this.props.navigation.navigate('Verification');
      } else {
        Alert.alert('Email Address does not exist.');
      }
    });
  };
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.SignInContainer}>
          <Image
            style={styles.screenImg}
            source={Images.LOGOORANGE}
            resizeMode="contain"
          />
          <Text style={styles.screenTxt}>Forgot Password?</Text>
          <Text style={styles.verifyTxt}>
            Don't worry! enter your registered email ID in order to recieve rest
            password instructions.
          </Text>

          <TextInput
            style={styles.inputTextField2Container}
            value={this.state.email}
            onChangeText={text =>
              this.setState({
                email: text,
              })
            }
            placeholder="Email Address"
            placeholderTextColor="#b3b3b3"
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.onSubmit}
            style={styles.submitBtn}>
            <Text style={styles.submitTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   parentstyle: {
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingHorizontal: vw(29),
//   },
//   parent: {
//     alignItems: 'center',
//     marginTop: vh(100),
//     justifyContent: 'center',
//   },
//   main: {
//     height: vh(125),
//     width: vw(125),
//   },
//   ForgotPassword: {
//     fontSize: vw(25),
//     color: 'black',
//     fontWeight: 'bold',
//     marginTop: vh(30),
//   },
//   starttext: {
//     fontSize: vw(15),
//     color: '#606060',
//     marginTop: vh(16),
//   },

//   email: {
//     height: vh(45),
//     width: vw(315),
//     borderRadius: vw(10),
//     backgroundColor: '#f5f5f5',
//     padding: vw(10),
//     marginTop: vh(27),
//   },
//   Buttonsubmit: {
//     height: vh(45),
//     width: vw(315),
//     backgroundColor: '#ff9803',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: vw(10),
//     marginTop: vh(25),
//   },
//   submitstyle: {
//     color: '#ffffff',
//     fontSize: 15,
//   },
// });
