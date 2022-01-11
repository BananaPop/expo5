import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'

export class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.h}> <h1>PROFILE</h1> </Text><hr/>
                <Text> ProfileScreen </Text>
                
            
            </View>
        )
    }
}

export default ProfileScreen


const styles = StyleSheet.create({
    h:{
        blackgroundColor:"#E9446A",
        color:"#E9446A",
        textAlign: "center",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
})