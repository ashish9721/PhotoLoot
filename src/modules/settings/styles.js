import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Constants/Dimension';
import {color} from '../../Constants';
export const styles = StyleSheet.create({
  commonview: {
    //Settings
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: vw(15),
    marginTop: vh(25),
  },
  changeview: {
    //Settings
    flexDirection: 'row',
  },
  image: {
    //Settings
    width: vw(35),
    height: vw(35),
  },
  notifytext: {
    //Settings
    fontSize: vw(15),
    alignSelf: 'center',
    marginLeft: vw(10),
  },
  switchtoggle: {
    //Settings
    width: vw(51),
    height: vw(31),
    borderRadius: vw(15),
    alignSelf: 'center',
    marginRight: vw(15),
  },
  imgarrow: {
    //Settings
    width: vw(8),
    height: vw(14),
    alignSelf: 'center',
    marginRight: vw(15),
    marginTop: vh(10),
  },

  parent: {
    //ChangePassword
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(25),
  },
  oldpassword: {
    //ChangePassword
    height: vh(45),
    width: vw(315),
    borderRadius: vw(10),
    backgroundColor: '#f5f5f5',
    padding: vw(10),
  },
  input2: {
    //ChangePassword
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    height: vh(45),
    width: vw(315),
    marginTop: vh(20),
    borderRadius: vw(10),
  },
  newpassword: {
    //ChangePassword
    height: vh(45),
    width: vw(290),
    borderRadius: vw(10),
    backgroundColor: '#f5f5f5',
    padding: vw(10),
  },
  eye: {
    //ChangePassword
    height: vw(11),
    width: vw(20),
  },
  Buttonupdate: {
    //ChangePassword
    height: vh(45),
    width: vw(315),
    backgroundColor: '#ff9803',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(10),
    marginTop: vh(25),
  },
  updatestyle: {
    //ChangePassword
    color: '#ffffff',
    fontSize: vw(15),
    fontWeight: '700',
  },
  //FAQ
  FaqAnswerView: {
    marginHorizontal: vw(15),
    backgroundColor: color.white,
    shadowOpacity: 0.1,
    elevation: 5,
    shadowOffset: {
      width: vw(1),
      height: vh(0),
    },
    padding: vw(15),
    borderBottomRightRadius: vw(10),
    borderBottomLeftRadius: vw(10),
  },
  questionView: {
    flexDirection: 'row',
    backgroundColor: color.questionPale,
    marginHorizontal: vw(15),
    padding: vw(15),
    borderTopLeftRadius: vw(10),
    borderTopRightRadius: vw(10),
    marginTop: vh(20),
    justifyContent: 'space-between',
  },
  questionToggleButton: {
    height: vh(14),
    width: vw(14),
  },
  questionText: {
    width: vw(270),
    fontSize: vw(13),
  },
  // TnC
  ParentTnC: {
    //TnC
    paddingHorizontal: vw(15),
    marginTop: vh(10),
  },
  termsTextTnC: {
    //TnC
    fontSize: vw(15),
    color: '#ff9803',
    fontWeight: 'bold',
  },
  userTextTnC: {
    marginTop: vh(20), //TnC
    fontSize: vw(12),
    color: 'black',
    fontWeight: 'bold',
  },
  userDescTnC: {
    //TnC
    fontSize: vw(12),
    color: '#A4A4A4',
    width: vw(344),
    marginTop: vh(13),
  },
  ContentTnC: {
    //TnC
    fontSize: vw(12),
    color: 'black',
    fontWeight: 'bold',
    marginTop: vh(18),
  },
  contDescTnC: {
    //TnC
    fontSize: vw(12),
    color: '#A4A4A4',
    marginTop: vh(13),
  },
  condTextTnC: {
    //TnC
    fontSize: vw(15),
    color: '#ff9803',
    fontWeight: 'bold',
    marginTop: vh(40),
  },
  condDescText: {
    //TnC
    marginTop: vh(15),
    fontSize: vw(12),
    color: '#A4A4A4',
  },

  // About US
  privacyText: {
    //Aboutus
    fontSize: vw(15),
    color: '#ff9803',
    fontWeight: 'bold',
    marginLeft: vw(12),
    marginTop: vh(10),
  },
  middleView: {
    //Aboutus
    marginLeft: vw(15),
    marginTop: vh(15),
  },
  accountText: {
    //Aboutus
    fontSize: vw(12),
    color: 'black',
    fontWeight: 'bold',
  },
  textLorem: {
    //Aboutus
    fontSize: vw(12),
    color: '#A4A4A4',
    width: vw(339),
    marginTop: vh(14),
  },
  ContentText: {
    //Aboutus
    fontSize: vw(12),
    color: 'black',
    fontWeight: 'bold',
    marginTop: vh(19),
  },
  textAmet: {
    //Aboutus
    fontSize: vw(12),
    color: '#A4A4A4',
    width: vw(343),
    marginTop: vh(13),
  },
  // Help And Support
  parentHelpnSupport: {
    //Helpnsupport
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(25),
  },
  name: {
    //Helpnsupport
    height: vh(45),
    width: vw(315),
    borderRadius: vw(10),
    backgroundColor: '#f5f5f5',
    padding: vw(10),
  },
  email: {
    //Helpnsupport
    height: vh(45),
    width: vw(315),
    borderRadius: vw(10),
    backgroundColor: '#f5f5f5',
    padding: vw(10),
    marginTop: vh(15),
  },
  title: {
    //Helpnsupport
    height: vh(45),
    width: vw(315),
    borderRadius: vw(10),
    backgroundColor: '#f5f5f5',
    padding: vw(10),
    marginTop: vh(15),
  },
  description: {
    //Helpnsupport
    height: vh(90),
    width: vw(315),
    borderRadius: vw(10),
    backgroundColor: '#f5f5f5',
    marginTop: vh(15),
    paddingLeft: vw(15),
    paddingTop: vh(17),
  },
  Buttonsubmit: {
    //Helpnsupport
    height: vh(45),
    width: vw(315),
    backgroundColor: '#ff9803',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(10),
    marginTop: vh(25),
  },
  submitstyle: {
    //Helpnsupport
    color: '#ffffff',
    fontSize: vw(15),
    fontWeight: '600',
  },
});
