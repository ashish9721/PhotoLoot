import React from 'react';
import {Animated,View,StyleSheet,Image} from 'react-native';

const Falling=(props)=>{
    const [fall] = UseState(new Animated.Value(0))
    React.useEffect(({})

    return(
        <Animated.View  >
        {props.children}
        </Animated.View>
    )
}
