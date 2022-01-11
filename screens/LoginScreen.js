import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import firebase from "firebase"


export class LoginScreen extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}><h1>สวัสดีครับ</h1></Text>

                <View>
                    {this.state.errorMessage && <Text style={StyleSheet.error}>{this.state.errorMessage}</Text>}
                </View><br />

                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text >Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email} />
                </View><br />

                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text>PassWord</Text>
                    <TextInput style={styles.input}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password} />
                </View><br /><br /><br />
                
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{ fontWeight: 700, fontSize: 50 }} >Login</Text>
                </TouchableOpacity><br />

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}
                    style={{ textAlign: "center" }}>
                    <Text>ยังไม่ได้ลงทะเบียน <Text style={{ color: 'red', fontWeight: 700 }}>Singup</Text></Text>
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

})

export default LoginScreen
