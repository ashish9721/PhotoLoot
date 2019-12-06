import { StyleSheet } from "react-native";
import {vh,vw,DesignWidth} from '../../Constants/Dimension'
export const styles =StyleSheet.create({
    parentstyle: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: vw(29)
    },
    parent: {
        alignItems: 'center',
        marginTop: vh(100),
        justifyContent: 'center'
    },
    main: {
        height: vh(125),
        width: vw(125.5),
        backgroundColor: '#ff9803',
    },
    ForgotPassword: {
        fontSize: vw(25),
        color: 'black',
        fontWeight: 'bold',
        marginTop: vh(30),
        //alignSelf:'flex-start'

    },
    donttext:{
      width:vw(323),
      marginLeft:vh(15)
    },
    starttext: {
        fontSize: vw(15),
        color: '#606060',
        marginTop: vh(16)
    },

    email: {
        height: vh(45),
        width: vw(315),
        borderRadius: vw(10),
        backgroundColor: '#f5f5f5',
        padding: vw(10),
        marginTop: vh(27),
    },
    Buttonsubmit: {
        height: vh(45),
        width: vw(315),
        backgroundColor: '#ff9803',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(10),
        marginTop: vh(25)
    },
    submitstyle: {
        color: '#ffffff',
        fontSize: 15
    },
    parent: {
        marginTop: vh(100),
        paddingHorizontal: vw(29)
    },
    main: {
        height: vw(125),
        width: vw(125),
        alignSelf: 'center'
    },
    signin: {
        fontSize: vw(25),
        color: 'black',
        fontWeight: 'bold',
        marginTop: vh(30),

    },
    Buttonsubmit: {
        height: vh(45),
        width: vw(315),
        backgroundColor: '#ff9803',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    submitstyle: {
        color: '#ffffff',
        fontSize: 15
    },
    middle: {
        marginLeft: 30,
        marginTop: 20
    },
    email: {
        height: vh(45),
        width: vw(315),
        borderRadius: vw(10),
        backgroundColor: '#f5f5f5',
        padding: vw(10)
    },
    input2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        height: vh(45),
        width: vw(315),
        marginTop: vh(20),
        borderRadius: vw(10),
        padding: vw(5)
    },
    show: {
        height: vw(11),
        width: vw(20),
        marginRight: vw(11)
    },
    fpass: {
        marginTop: vh(20),
        fontSize: vw(15),
        color: '#6E6E6E',
        alignSelf: 'flex-end',
        marginRight: vw(30)
    },
    textconnect: {
        fontSize: vw(15),
        color: '#6E6E6E',
        marginTop: vh(30),
        alignSelf: 'center'
    },
    twobutton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: vh(25)
    },
    fbbuttuon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: vh(45),
        width: vw(145),
        borderRadius: vw(10),
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        shadowOpacity: 0.3,
        shadowOffset: { height: vh(5), width: vw(2) },
        shadowColor: 'gray'

    },
    fbicon: {
        height: vw(20),
        width: vw(20),
        marginRight: vw(10)
    },
    fbtext: {
        fontSize: vw(15),
        color: 'black',
        fontWeight: 'bold'
    },
    instbuttuon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: vh(45),
        width: vw(145),
        borderRadius: vw(10),
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.3,
        shadowOffset: { height: vh(5), width: vw(2) },
        shadowColor: 'gray',
        backgroundColor: 'white'
    },
    insticon: {
        height: vw(20),
        width: vw(20),
        marginRight: vw(10),
    },
    insttext: {
        fontSize: vw(15),
        color: 'black',
        fontWeight: 'bold'
    },
    lasttext: {
        fontSize: 15,
        color: '#6E6E6E',
    },
    signup: {
        fontSize: vw(15),
        color: '#ff9803'
    },
    last: {
        marginTop: vh(30),
        alignSelf: 'center'
    },
    parent: {
        alignItems: 'center',
        marginTop: vh(100),
        paddingHorizontal: vw(29)
    },
    main: {
        height: vh(125),
        width: vw(125.5),
        backgroundColor: '#ff9803',
    },
    Verification: {
        fontSize: vw(25),
        color: 'black',
        fontWeight: 'bold',
        marginTop: vh(30),
        alignSelf:'flex-start'
    },
    starttext: {
        fontSize: vw(15),
        color: '#606060',
        marginTop: vh(15),

    },
    middle: {
        marginTop: vh(20)
    },
    otp: {
        height: vh(45),
        width: vw(315),
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        padding: vw(15),
    },
    Buttonsubmit: {
        height: vh(45),
        width: vw(315),
        backgroundColor: '#ff9803',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(10),
        marginTop: vh(25),
    },
    submitstyle: {
        color: '#ffffff',
        fontSize: vw(15)
    },
    last: {
        marginTop: vh(60)
    },
    lasttext: {
        fontSize: vw(15),
        color: '#6E6E6E',
    },
    resend: {
        fontSize: vw(15),
        color: '#ff9803'
    }
})