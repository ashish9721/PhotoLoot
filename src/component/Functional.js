import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, } from 'react-native';
import { vh, vw, DesignWidth } from '../../Constants/Dimension';
const Functinal = (props) => {
    return(
        <View>
        <View style={styles.commonview}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.image}
                    source={rowData.item.image}
                />
                <Text style={styles.text}>{rowData.item.title}</Text>
            </View>
            <Image style={styles.imgarrow}
                source={rowData.item.image1}
            />
        </View>
    </View>
    )
}
export default Functional;