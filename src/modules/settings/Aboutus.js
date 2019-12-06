import React from 'react';
import { View,Text,ScrollView } from 'react-native';
import { styles } from './styles'
export default class Aboutus extends React.Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.privacytext}>Privacy Policy</Text>
                    <View style={styles.middleview}>
                        <Text style={styles.accounttext}>Your Account Information</Text>
                        <View style={styles.firsttext}>
                            <Text style={styles.middletext}>{'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. Vulputate odio ut enim blandit volutpat maecenas volutpat. Quisque egestas diam in arcu.Cursus euismod quis viverra. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Consequat interdum varius sit amet mattis vulputate. Vel facilisis volutpat est velit egestas dui id. Purus non enim praesent elementum facilisis leo vel.{'\n\n'}    Sed felis eget velit aliquet.Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Vitae semper quis lectus nulla. Consequat id porta nibh venenatis cras sed felis.Sed pulvinar proin gravida hendrerit lectus a. Turpis egestas maecenas pharetra convallis.</Text>
                        </View>
                        <Text style={styles.Contenttext}>Your Content</Text>
                        <View style={styles.secondtextview}>
                            <Text style={styles.middletext}>{'\n'}Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. Vulputate odio ut enim blandit volutpat maecenas volutpat. Quisque egestas diam in arcu.Cursus euismod quis viverra. Fames ac turpis egestas maecenas pharetra convallis posuere morbi.Consequat interdum varius sit amet.{'\n\n'}                                                             Rulit egestas dui id. Purus non enim praesent elementum facilisis leo vel. Sed felis eget velit aliquet.Posuere lorem ipsum dolor sit amet consectetur iscing elit duis. Vitae semper quis lectus nulla. Consequat id porta nibh venenatis cras sed feli. Sed pulvinar proin gravida hendrerit lectus a. Turpis egestas maecenas pharetra convallis. </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )

    }
}