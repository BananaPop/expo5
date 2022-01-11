import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity ,Image,StatusBar} from 'react-native'
import firebase from "firebase"
import Fire from "../Fire";
import UserPermissions from '../utilities/UserPermission';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";



export default class RegisterScreen extends Component {
    
    
    state = {
        user:{
        name: "",
        email: "",
        password: "",
        avtar:null
        },
        errorMessage: null
    };
    

    handleSignUp = () => {
        Fire.shared.createUser(this.state.user)


     /*   firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));*/
    };


    handlePickAvatar = async () => {
        UserPermissions.getCameraPermission();
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]   //4:3 , 16:9, 16:10, 1:1
        });

        if (!result.cancelled) {
            this.setState({ user: { ...this.state.user, avatar: result.uri } });
        }
    };



    render() {
        return (
            <View style={styles.container}>


                <Text style={{ textAlign: "center" }}><h1>สมัครสมาชิกสิ!</h1></Text>

                <View>
                    {this.state.errorMessage && <Text style={StyleSheet.error}>{this.state.errorMessage}</Text>}
                </View><br />

                <TouchableOpacity  style={{ alignItems: "center" }} onPress={this.handlePickAvatar}>
                <Image  source={{ uri: this.state.user.avatar }} style={styles.avatar} />
                <Ionicons 
                        name="ios-add"
                        size={80}
                        color="#FCC"
                    />
                </TouchableOpacity>             <br/><br/><br/>

                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text >Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={name => this.setState({ user:{...this.state.user,name} })}
                        value={this.state.name} />
                </View>                         <br/>

                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text >Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={email => this.setState({ user:{...this.state.user,email} })}
                        value={this.state.email} />
                </View>                         <br/>

                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text>PassWord</Text>
                    <TextInput style={styles.input}
                        onChangeText={password => this.setState({ user:{...this.state.user,password} })}
                        value={this.state.password} />
                </View>                         <br /><br /><br />

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{ fontWeight: 700, fontSize: 50 }} >Signup</Text>
                </TouchableOpacity>             <br />

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}
                    style={{ textAlign: "center" }}>
                    <Text>มีบัญชีอยู่แล้ว <Text style={{ color: 'red', fontWeight: 700 }}>Login</Text></Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    error: {
        color: "#E9446A",
        textAlign: "center",
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    avatar: {
        position: "absolute",
        width: 100,
        height: 100,
        borderRadius: 50
    },
})
