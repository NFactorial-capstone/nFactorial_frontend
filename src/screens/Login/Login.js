import React from "react";
import {Text, Button, View, StyleSheet} from "react-native"

const Login = () => {
    return (
        <View style={styles.outerContainer}>
            <Text>Login Scren</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems: 'center'
    }
})