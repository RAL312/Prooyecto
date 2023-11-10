import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, DrawerLayoutAndroid, FlatList } from 'react-native';

export default class Tab1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
    }

    openDrawer = () => {
        this.drawer.openDrawer();
    };

    openPerfil = () => {

    }

    componentDidMount() {
        var xhttp = new XMLHttpRequest();
        _this = this;
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(xhttp.responseText);
                var Temporal = JSON.parse(xhttp.responseText);
                _this.setState({ dataSource: Temporal });
            }
        };
        xhttp.open("GET", "https://dcc2.000webhostapp.com/2023B/datos.json", true);
        xhttp.send();
    };
    render() {
        console.log('MENU');
        const navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                {/* Agrega los elementos del menú lateral aquí */}
                <Text> Nice</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Inicio')}>
                    <Text>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        );

        return (

            <DrawerLayoutAndroid
                ref={(drawer) => (this.drawer = drawer)}
                drawerWidth={300}
                drawerPosition={"left"}
                renderNavigationView={() => navigationView}
            >
                <View style={styles.root}>
                    <View style={{
                    width:'100%',
                   
                    backgroundColor: "#ffb300",
                    }}>
                     <View style={styles.header}>
                     <View style={styles.drawerMenu}>
                            <TouchableOpacity onPress={this.openDrawer}>
                                <Image
                                    style={{ width: 30, height: 30 }}
                                    source={require('./android/lateMenu.png')}
                                />
                            </TouchableOpacity>
                        </View>

                    <View style={styles.profileInMenu}>
                            <Text style={{ color: 'black', fontSize: 20 }}>
                            {this.props.route.params.name}
                            </Text>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('./android/usuario.png')}
                            />

                        </View>
                       

                    

                       
                     </View>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.container}></View>
                    </View>
                    <View>
                        <Text style={{ color: 'blue', fontSize: 30 }}> Trabajadores </Text>
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={({ item }) =>
                                <TouchableOpacity onPress={() => {
                                    console.log("Perro" + item.id)
                                    this.props.navigation.navigate('Perfil', { perfil: item })
                                }}>

                                    <View style={{ width: 400, heigth: 80 }}>
                                        <Text style={{ color: 'black', marginLeft: 20 }}>{item.Nombre} </Text>
                                        <Text style={{ color: 'black', marginLeft: 20 }}>{item.Profesion} </Text>
                                        <Text style={{ color: 'black', marginLeft: 20 }}>{item.Telefono} </Text>


                                        <Image
                                            source={{ uri: item.Imagen }}
                                            style={{ width: 100, height: 100, marginLeft: 20 }}
                                        />
                                        <View style={{
                                            width: 300,
                                            height: 6,
                                            backgroundColor: 'black',
                                            marginLeft: 20,
                                            marginTop: 10,
                                        }}>
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            }
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>


            </DrawerLayoutAndroid>



        );
    }
}
const styles = StyleSheet.create({
    body: {

    },
    contariner: {
    }
    ,

    cart: {
        marginLeft: 350,
        marginTop: -70,
    },

    profileInMenu: {
        marginLeft:'48%',
        marginTop: -25,
    },

    drawerMenu: {
    },

    root: {

    },

    header: {

    },




});