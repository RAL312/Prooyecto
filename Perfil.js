import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, DrawerLayoutAndroid } from 'react-native';

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  openDrawer = () => {
    this.drawer.openDrawer();
};

openPerfil = () => {

}


render() {
    console.log('MENU');
    const navigationView = (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* Agrega los elementos del menú lateral aquí */}
            <Text> Nice</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Inicio')}>
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
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('./android/usuario.png')}
                        />
                        <Text style={{ color: '#f1f1f1', fontSize: 18}}>
                            {this.props.route.params.nombre}
                        </Text>
                    </View>

                    <View style={styles.cart}>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('./android/cart.png')}
                        />
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.container}></View>
                </View>
                <View>
      <Text style={{ 
        color: 'orange', 
        fontSize: 30,
        textAlign:"center",
        marginTop:10,

        }}> Trabajador </Text>
    

<View style={{ width: 400, heigth: 80 }}>
                  <Text style={{ color: 'black', textAlign:"center" }}>{this.props.route.params.perfil.Nombre} </Text>
                  <Text style={{ color: 'black', textAlign:"center" }}>{this.props.route.params.perfil.Profesion} </Text>
                  <Text style={{ color: 'black', textAlign:"center" }}>{this.props.route.params.perfil.Telefono} </Text>

                   
                  <Image
                    source={{ uri: this.props.route.params.perfil.Imagen }}
                    style={{ width: 100, height: 100, marginLeft:150, borderRadius:10 }}
                    />
                  <View style={{
                      width: 350,
                      height: 6,
                      backgroundColor: 'black',
                      marginLeft: 20,
                      marginTop: 10,
                    }}>
                  </View>
              </View>

                 
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
    marginLeft: 190,


},

drawerMenu: {

},

root: {

},

header: {

},




});