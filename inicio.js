import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVentana: false,
    };
  }


  render() {
    const cierraModal = () => {
     this.setState({ modalVentana: false });
      
      //Codigo para resivir los datos del servidor
      const _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);
          if (xhttp.responseText === '0') {
            Alert.alert(
              'Ha ocurrido un error :(',
              'La contraseña es incorrecta. Intenta de nuevo.'
              );
            return; 
          } else if (xhttp.responseText === '3') {
            Alert.alert(
              'Ha ocurrido un error :(',
              'Cuenta no existente. ¡Crea una cuenta con nosotros!'
              );
              return; 
            }else{
              // Con la referencia del constructor copiada
              _this.props.navigation.navigate('Menu', {name: xhttp.responseText, email: _this.state.email, password: _this.state.password});
            }
          }
      };
      xhttp.open("GET", "https://vibronic-components.000webhostapp.com/verifica.php?correo=" + this.state.correo + "&contrasena=" + this.state.contrasena, true);
      xhttp.send();
    }
    const clickEmail = () => {
      console.log("le diste click al boton email");
      this.setState({ modalVentana: true })
    }
    const clickFace = () => {
      console.log("le diste click al boton Face");
      this.setState({ modalVentana: true })
    }
    const clickregis = () => { console.log("le diste click al boton registrar"); }
    const ir_a_inc = () => {
      this.props.navigation.navigate('Inscripcion')
    }

    return (
      <View style={styles.fondo}>
        <Image
          style={styles.img1}
          source={require("./android/Builder.png")}
        />
        <View style={styles.blob}>
          <Text style={styles.letra}>Welcome to Handyman</Text>
          <TouchableOpacity style={styles.boton1} onPress={clickEmail}>
            <View style={styles.blob1}>
              <Text style={styles.letra1}>Sing in with Email</Text>
              <Image
                style={styles.img2}
                source={require("./android/emailLogo.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton2} onPress={clickFace}>
            <View style={styles.blob2}>
              <Text style={styles.letra1}>Sing in with Facebook</Text>
              <Image
                style={styles.img3}
                source={require("./android/faceLogo.png")}
              />
            </View>
          </TouchableOpacity>
          
         
          <Text style={[styles.letra2, { color: "black" }]}>¿No tienes cuenta aún? </Text>
  <TouchableOpacity onPress={ir_a_inc}>
    <Text style={[styles.letrita1, { color: "white", textDecorationLine: 'underline' }]}>Regístrate</Text>
  </TouchableOpacity>
        </View>
        <Modal
          transparent={true}
          visible={this.state.modalVentana}
          animationType="fade"
        >
          <View style={{
            borderWidth: 1,
            width: 300,
            height: 240,
            marginLeft: 40,
            marginTop: 250,
            backgroundColor: "#f1f1f1",
            borderRadius: 10,
          }}>


            <Text style={{
              fontSize: 18,
              marginLeft: 22,
              marginTop: 15,

            }}>*Email</Text>
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
    );
  }
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: "lightyellow",
    height: 1000,
  },

  img1: {

    width: 400,
    height: 380,
    marginTop: 25,
    alignItems: 'center',
  },

  img2: {
    width: 40,
    height: 38,
    marginTop: -33,
    alignItems: 'center',
    marginLeft: 20,
  },

  img3: {
    width: 40,
    height: 38,
    marginTop: -33,
    alignItems: 'center',
    marginLeft: 20,
  },

  blob: {
    width: "95%",
    height:"30%",
    borderWidth: 3,
    borderColor: "#fca50d",
    backgroundColor: "#fca50d",
    borderRadius: 30,
    marginLeft: 8,
  },

  blob1: {
    width: 340,
    height: 60,
    borderWidth: 3,
    borderColor: "#1a63eb",
    backgroundColor: "#1a63eb",
    borderRadius: 30,
  },

  blob2: {
    width: 340,
    height: 60,
    borderWidth: 3,
    borderColor: "#363c47",
    backgroundColor: "#363c47",
    borderRadius: 30,
    marginTop:-5,
  },

  letra: {
    fontSize: 27,
    textAlign: 'center',
    fontFamily: "monospace",
    color: "white",
    marginTop: 15,
  },

  letra1: {
    fontSize: 19,
    fontFamily: 'Times New Roman',
    color: "white",
    marginTop: 15,
    marginLeft: 100,
  },

  letra2: {
    fontSize: 18,
    marginTop: 10,
    marginLeft:44,
  },

  letrita1:{
    fontSize: 18,
    marginTop: -25,
    marginLeft: 235,
  },

  boton1: {

    width: 345,
    height: 65,
    marginLeft: 20,
    borderRadius: 30,
    marginTop: 20
  },
  boton2: {
    width: 345,
    height: 60,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 30,
  },


});
