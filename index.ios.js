 /* @flow */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class AwesomeProject extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
               Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              Cmd+D or shake for dev menu
            </Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)
