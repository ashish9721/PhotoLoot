import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Constants/Dimension';
export const styles = StyleSheet.create({
  parent: {                         //ChangePassword
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(89),
  },
  oldpassword: {                     //ChangePassword
    height: vh(45),
    width: vw(315),
    borderRadius: vw(10),
    backgroundColor: '#f5f5f5',
    padding: vw(10),
  },
  input2: {                           //ChangePassword
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    height: vh(45),
    width: vw(315),
    marginTop: vh(20),
    borderRadius: vw(10),
  },
  newpassword: {                       //ChangePassword
    height: vh(45),
    width: vw(290),
    borderRadius: vw(10),
    backgroundColor: '#f5f5f5',
    padding: vw(10),
  },
  eye: {                               //ChangePassword
    height: vw(11),
    width: vw(20),
  },
  Buttonupdate: {                       //ChangePassword
    height: vh(45),
    width: vw(315),
    backgroundColor: '#ff9803',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(10),
    marginTop: vh(25),
  },
  updatestyle: {                          //ChangePassword
    color: '#ffffff',
    fontSize: vw(15),
    fontWeight:'700'
  },
  privacyText: {                          //Aboutus
    fontSize: vw(15),
    color: '#ff9803',
    fontWeight: 'bold',
    marginLeft: vw(12),
    marginTop: vh(106),
  },
  middleView: {                           //Aboutus
    marginLeft: vw(15),
    marginTop: vh(15),
  },
  accountText: {                         //Aboutus
    fontSize: vw(12),
    color: 'black',
    fontWeight: 'bold',
  },
  textLorem: {                            //Aboutus
    fontSize: vw(12),
    color: '#A4A4A4',
    width: vw(339),
    marginTop:vh(14)
  },
  ContentText: {                           //Aboutus
    fontSize: vw(12),
    color: 'black',
    fontWeight: 'bold',
    marginTop: vh(19),
  },
  textAmet:{                               //Aboutus
    fontSize: vw(12),
    color: '#A4A4A4',
    width: vw(343),
    marginTop:vh(13)
  },
  parentHelpnSupport: {                               //Helpnsupport
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(25),
  },
  name: {                                    //Helpnsupport
    height: vh(45),
    width: vw(315),
    borderRadius: vw(10),
    backgroundColor: '#f5f5f5',
    padding: vw(10),
  },
  email: {                                     //Helpnsupport
    height: vh(45),
    width: vw(315),
    borderRadius: vw(10),
    backgroundColor: '#f5f5f5',
    padding: vw(10),
    marginTop: vh(15),
  },
  title: {                                       //Helpnsupport
    height: vh(45),
    width: vw(315),
    borderRadius: vw(10),
    backgroundColor: '#f5f5f5',
    padding: vw(10),
    marginTop: vh(15),
  },
  description: {                                   //Helpnsupport
    height: vh(90),
    width: vw(315),
    borderRadius: vw(10),
    backgroundColor: '#f5f5f5',
    marginTop: vh(15),
    paddingLeft: vw(15),
    paddingTop: vh(17),
  },
  Buttonsubmit: {                                    //Helpnsupport
    height: vh(45),
    width: vw(315),
    backgroundColor: '#ff9803',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(10),
    marginTop: vh(25),
  },
  submitstyle: {                                        //Helpnsupport
    color: '#ffffff',
    fontSize: vw(15),
    fontWeight: '600',
  },
  
  commonview: {                                   //Settings
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: vw(15),
    marginTop: vh(25),
  },
  changeview: {                                   //Settings
    flexDirection: 'row',
  },
  image: {                                        //Settings
    width: vw(35),
    height: vw(35),
  },
  notifytext: {                                   //Settings
    fontSize: vw(15),
    alignSelf: 'center',
    marginLeft: vw(10),
  },
  switchtoggle: {                                 //Settings
    width: vw(51),
    height: vw(31),
    borderRadius: vw(15),
    alignSelf: 'center',
    marginRight: vw(15),
  },
  imgarrow: {                                      //Settings
    width: vw(8),
    height: vw(14),
    alignSelf: 'center',
    marginRight: vw(15),
    marginTop:vh(10)
  },
  ParentTnC:{                                     //TnC
    paddingHorizontal: vw(15), 
    marginTop: vh(25)
  },
  termsTextTnC: {                                  //TnC
    fontSize: vw(15),
    color: '#ff9803',
    fontWeight: 'bold',
  },
  userTextTnC: {   
    marginTop:vh(20),                                 //TnC
    fontSize: vw(12),
    color: 'black',
    fontWeight: 'bold',
  },
  userDescTnC: {                             //TnC
    fontSize: vw(12),
    color: '#A4A4A4',
    width: vw(344),
    marginTop: vh(13),
  },
  ContentTnC: {                                     //TnC
    fontSize: vw(12),
    color: 'black',
    fontWeight: 'bold',
    marginTop: vh(18),
  },
  contDescTnC: {                                //TnC
    fontSize: vw(12),
    color: '#A4A4A4',
    marginTop:vh(13)
  },
  condTextTnC: {                                      //TnC
    fontSize: vw(15),
    color: '#ff9803',
    fontWeight: 'bold',
    marginTop: vh(40),
    marginLeft: vw(13),
  },
  condDescText: {                                       //TnC
    marginTop: vh(15),
    fontSize: vw(12),
    color: '#A4A4A4',
  },
  parent1: {                                       //Faq
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(80),
  },
  first: {                                          //Faq
    width: vw(345),
    borderRadius: vw(10),
    shadowOpacity: 0.3,
    shadowOffset: {height: vh(5), width: vw(2)},
    shadowColor: 'gray',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  whenview: {                                         //Faq
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff0d9',
    borderTopLeftRadius: vw(10),
    borderTopRightRadius: vw(10),
    width: vw(345),
    alignItems: 'center',
    paddingRight: vw(10),
  },
  whentext: {                                           //Faq
    fontSize: vw(12),
    width: vw(267),
    marginLeft: vw(10),
    marginTop: vh(10),
    marginBottom: vh(10),
  },
  crossimg: {                                         //Faq
    width: vw(15),
    height: vh(15),
    marginTop: vh(10),
    marginRight: vw(12),
  },
  Loremview: {                                    //Faq
    width: vw(305),
    marginTop: vh(10),
  },
  Loremtext: {                               //Faq
    fontSize: vw(12.5),
    color: '#A4A4A4',
    marginVertical: vh(15),
  },
  common: {                                   //Faq
    width: vw(345),
    borderRadius: vw(10),
    backgroundColor: '#fff0d9',
    marginTop: vh(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: vh(15),
  },
  textchallenge: {                           //Faq
    fontSize: vw(12),
    alignSelf: 'center',
    marginLeft: vw(15),
    width: vw(252),
  },
  textupload: {                               //Faq
    fontSize: vw(12),
    alignSelf: 'center',
    marginLeft: vw(15),
    width: vw(261),
  },
  textipsum: {                                //Faq
    fontSize: vw(12),
    alignSelf: 'center',
    marginLeft: vw(15),
    width: vw(270),
  },
  addimg: {                                       //Faq
    width: vw(19),
    height: vh(19),
    marginTop: vh(10),
    marginRight: vw(30),
    alignSelf: 'center',
  },
  textExc: {                                   //Faq
    fontSize: vw(12),
    marginLeft: vw(10),
    marginTop: vh(10),
    width: vw(269),
  },
});
