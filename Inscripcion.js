import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Image, StyleSheet } from 'react-native';

export default class Inscripcion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVentana: false,
            nombre: '',
            correo: '',
            contrasena: '',
        };
    }

    render() {
        const correo = () => {
            this.setState({ modalVentana: true });
        }
        const cierraModal = () => {
            this.setState({ modalVentana: false });
            //Codigo para resivir los datos del servidor
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                console.log('status: ' + this.status);
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    console.log(xhttp.responseText);
                }
            };
            xhttp.open("GET", "https://vibronic-components.000webhostapp.com/data.php?nombre=" + this.state.nombre + "&correo=" + this.state.correo + "&contrasena=" + this.state.contrasena, true);
            xhttp.send();
        }
        const face = () => {
            this.setState({ modalVentana: true });
        }
        const ir_a_inicio = () => {
            this.props.navigation.navigate("Inicio");
        }
        return (

            <View style={{
                backgroundColor: "#fca50d",
                width: "95%",
                height: "90%",
                marginLeft: 10,
                marginTop: 10,
                borderRadius: 5,
                shadowColor: "#171717",
                shadowOpacity: 1,
                shadowRadius: 4,
                shadowOffset: { width: -2, heigh: 4 },

            }}>
                <View>
                    <View style={{
                        width: 360,
                        height: 80,
                        backgroundColor: "#edc31c",
                        marginLeft: 5,
                        marginTop: 5,
                    }}>
                        <Text style={{
                            fontSize: 40,
                            textAlign: 'center',
                            fontFamily: "monospace",
                            marginTop: 8,
                        }}> ¡Únete ya! </Text>
                    </View>
                    <TouchableOpacity style={{
                        //borderWidth:2,
                        width: 260,
                        height: 50,
                        backgroundColor: "#5882ed",
                        borderRadius: 40,
                        marginLeft: 50,
                        marginTop: 30,
                    }} onPress={correo}>
                        <Text style={{
                            fontSize: 16,
                            textAlign: "center",
                            marginTop: 12,
                            color: "white",
                            marginLeft: 40,
                        }} >Regístrate por correo</Text>
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                                marginTop: -22,
                                marginLeft: 15,
                            }}
                            source={require("./android/emailLogo.png")}
                        />
                    </TouchableOpacity>
                    <View style={{
                        width: 260,
                        height: 50,
                        //borderWidth:3,
                        marginLeft: 50,
                        marginTop: 30,
                        borderRadius: 40,
                    }}>
                        <TouchableOpacity style={{
                            //--borderWidth:2,
                            width: 260,
                            height: 50,
                            backgroundColor: "#4e4657",
                            borderRadius: 40,
                        }} onPress={face}>
                            <Text style={{
                                fontSize: 15,
                                textAlign: "center",
                                marginTop: 13,
                                color: "white",
                                marginLeft: 40,

                            }} >Regístrate por Facebook</Text>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30,
                                    marginTop: -22,
                                    marginLeft: 15,
                                }}
                                source={require("./android/faceLogo.png")}
                            />
                        </TouchableOpacity>
                        <View>
                        <Text style={[styles.letra2, { color: "black" }]}>¿Ya tienes cuenta?</Text>
                        <TouchableOpacity onPress={ir_a_inicio}>
                            <Text style={[styles.letrita1, { color: "white", textDecorationLine: 'underline' }]}>Inicia Sesión</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <Modal
                        transparent={true}
                        visible={this.state.modalVentana}
                        animationType="fade"
                    >
                        <View style={{
                            borderWidth: 1,
                            width: 300,
                            height: 300,
                            marginLeft: 40,
                            marginTop: 220,
                            backgroundColor: "#f1f1f1",
                            borderRadius: 10,
                        }}>
                            <Text style={{
                                fontSize: 18,
                                marginLeft: 22,
                                marginTop: 10,

                            }}>*Nombre</Text>
                            <TextInput
                                onChangeText={nombre => this.setState({ nombre })}
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    width: 240,
                                    height: 40,
                                    marginLeft: 20,
                                    backgroundColor: "white",
                                }}

                            ></TextInput>

                            <Text style={{
                                fontSize: 18,
                                marginLeft: 22,

                            }}>*Correo</Text>
                            <TextInput style={{
                                borderWidth: 1,
                                borderRadius: 5,
                                width: 240,
                                height: 40,
                                marginLeft: 20,
                                backgroundColor: "white",

                            }}
                                onChangeText={correo => this.setState({ correo })}></TextInput>

                            <Text style={{
                                fontSize: 18,
                                marginLeft: 22,

                            }}>*Password</Text>
                            <TextInput style={{
                                borderWidth: 1,
                                borderRadius: 5,
                                width: 240,
                                height: 40,
                                marginLeft: 20,
                                backgroundColor: "white",

                            }}
                                onChangeText={contrasena => this.setState({ contrasena })}
                                secureTextEntry={true}></TextInput>

                            <TouchableOpacity style={{
                                borderWidth: 1,
                                width: 130,
                                height: 50,
                                marginLeft: 80,
                                borderRadius: 40,
                                fontSize: 20,
                                backgroundColor: "#2b54d9",
                                marginTop: 20,
                            }} onPress={cierraModal}>
                                <Text style={{
                                    textAlign: 'center',
                                    marginTop: 6,
                                    fontFamily: "fantasy",
                                    fontSize: 22,
                                    color: "white",
                                }} >Aceptar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    letra2: {
        fontSize: 18,
        marginTop: 20,
        marginRight: 50,
    },

    letrita1: {
        fontSize: 18,
        marginTop: -24,
        marginLeft: 155,
    },
    

});