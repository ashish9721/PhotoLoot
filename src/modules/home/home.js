import React, { Component } from 'react'
import {  View,  } from 'react-native'
import {StickerAndImage} from '../../component/functionalComponent/functional'
import {styles} from './styles'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CurrentChallenges from './currentChallenges';
import { Images } from '../../Constants';
import HallOfFame from './hallOfFame';
import UpComingChallenges from './upcomingChallenges';
import Profile from '../profile/profile'
export  class Home extends Component {

    rendermap (){
      return  Tempdata.map((result, index) => { 
            return (     
                <StickerAndImage heading={result.txt1} img={result.img} current={result.txt2} navProps={this.props} goto={result.goto}/> 

             )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/* //Header */}
                {/* <View style={styles.headerView}></View> */}
               {/*  pass a 2 images as a prop, one as imagebackground and 2nd as a image  */}
                 {/* <StickerAndImage txt1="Current Challenges" img={Images.DOLLAR} txt2="2 Ongoing" innercontainer2={true} />
                <StickerAndImage txt1="Upcoming Challenges" img={Images.DOLLAR} txt2="2 Upcoming" />
               <StickerAndImage txt1="Hall Of Fame" img={Images.DOLLAR} txt2="View Winners" />  */}
               {/* <ThreeStickerContainer txt1="Jungle Safari"/>
               <ThreeStickerContainer txt1="Jungle Safari"/>
               <ThreeStickerContainer txt1="Jungle Safari"/> */}
               {/* <HallOfFame/> */}
               {/* <CurrentChallenges/> */}
                          {/* {                  
                            this.rendermap()
                        }   */}
                        <Profile/>



            </View>
        )
    }
}
const HomeStack = createStackNavigator({Home:{screen:Home},
    CurrentChallenges:{screen:CurrentChallenges},
    HallOfFame:{screen:HallOfFame},
    UpComingChallenges:{screen:UpComingChallenges}
});

const TabNavigator = createBottomTabNavigator({
    Home:{screen:HomeStack},
    Profile:{screen:Profile}    
})


export default createAppContainer(TabNavigator);


const Tempdata = [{txt1:"current Challenges",img:Images.DOLLAR,txt2:"2 Ongoing",goto:"CurrentChallenges"},
{txt1:"Upcoming Challenges",img:Images.DOLLAR,txt2:"2 Upcoming",goto:"UpComingChallenges"},
{txt1:"Hall Of Fame",img:Images.DOLLAR,txt2:"2 Ongoing",goto:"HallOfFame"}
]

{/* const tempData = [{}] */}