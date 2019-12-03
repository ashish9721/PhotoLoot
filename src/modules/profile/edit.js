import React, { Component } from 'react'
import { Text, View, Image, TextInput } from 'react-native'
//Custom Imports
import { Images } from '../../Constants'
import { styles } from './styles'

export default class Edit extends Component {
    render() {
        return (
            <View style={styles.editContainer}>
                <Image style={styles.editImage}
                    source={Images.TRANSCAMERA} resizeMode="contain" />
                <TextInput
                    style={styles.editTextInput}
                    placeholder="Name" />
                <TextInput
                    style={styles.editTextInput}
                    placeholder="Username" />
                <TextInput style={styles.editTextView}
                    multiline={true}
                    placeholder="Bio" />
                <TextInput
                    value="email"
                    style={styles.emailEmailInput} />

            </View>
        )
    }
}
