import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Constants/Dimension';
import {color} from '../../Constants';
export const styles = StyleSheet.create({
  SignUpContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: color.white,
    alignItems: 'center',
  },
  screenImg: {
    height: vw(125),
    width: vw(125),
    marginTop: vh(31),
  },
  screenTxtContainer: {
    width: vw(315),
    marginTop: vh(30),
    marginBottom: vh(10),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  screenTxt: {
    fontSize: vw(25),
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'flex-start',
    marginTop:vh(30)
  },
  InputFieldContainer: {
    alignItems: 'center',
  },
  inputTextField2Container: {
    marginTop: vh(15),
    borderRadius: 10,
    backgroundColor: color.inputTextField,
    height: vh(45),
    width: vw(315),
    flexDirection: 'row',
    paddingHorizontal: vw(15),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputTextField2: {
    fontSize: vw(15),
    fontWeight: '500',
    textAlign: 'left',
    marginRight: vw(5),
    width: vw(250),
  },
  inputTextField2Img: {
    height: vh(11),
    width: vw(20),
  },
  checkBoxAndClickableLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(30),
    width: vw(315),
  },
  checkboxButtonContainer: {
    height: vw(19),
    width: vw(19),
    borderRadius: vw(10),
    marginRight: vw(10),
    borderWidth: vw(0.3),
  },
  checkBoxImg: {
    height: vw(20),
    width: vw(20),
  },
  clickableLinkTxt: {
    fontSize: vw(12),
    color: color.brownishGray,
    textAlign: 'left',
  },
  submitBtn: {
    backgroundColor: color.TAndC,
    height: vh(45),
    width: vw(315),
    borderRadius: vh(10),
    shadowOffset: {height: vh(8), width: vw(1)},
    shadowColor: color.TAndC,
    elevation: 10,
    shadowOpacity: 0.4,
    marginTop: vh(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  TAndC: {
    fontSize: vw(12),
    textAlign: 'left',
    fontWeight: '500',
    color: color.TAndC,
  },
  submitTxt: {
    fontSize: vw(15),
    fontWeight: 'bold',
    color: color.white,
  },
  clickableLinkContVerification: {
    alignItems: 'center',
    marginTop: vh(30),
  },
  verifyTxt: {
    width: vw(315),
    marginTop: vh(10),
    marginBottom: vh(12),
    fontSize: vw(15),
    color: color.brownishGray,
  },
  createAccountContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAccountUserImgContainerout: {
    marginTop: vh(30),
    marginBottom: vh(15),
    borderRadius: vw(50),
    borderColor: color.TAndC,
    borderWidth: 2,
    padding: vw(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImgOuterContainer: {
    height: vh(80),
    width: vh(80),
    backgroundColor: 'gray',
    borderRadius: vh(40),
  },
  // Sign In
  SignInContainer: {
    justifyContent:'center',
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    paddingHorizontal: vw(29),
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: vh(20),
  },
  forgotText: {
    fontSize: vw(15),
    fontWeight: '700',
    color: color.gray,
  },
  connectText: {
    fontSize: vw(15),
    color: color.gray,
    marginTop: vh(20),
  },
  socialView: {
    flexDirection: 'row',
    width: vw(315),
    justifyContent: 'space-between',
    marginTop: vh(20),
  },
  socialButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    width: vw(145),
    height: vh(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(10),
    elevation: 5,
    shadowOffset: {
      width: vw(1),
      height: vh(1),
    },
    shadowOpacity: vw(0.3),
  },
  sociaImage: {
    width: vw(20),
    height: vh(20),
    marginRight: vw(10),
  },
  socialText: {
    fontSize: vw(15),
    fontWeight: '600',
  },
  dontHaveText: {
    fontSize: vw(15),
    color: color.brownishGray,
    textAlign: 'left',
  },
  SignUpText: {
    fontSize: vw(15),
    fontWeight: '700',
    textAlign: 'left',
    color: color.TAndC,
  },
 
});
