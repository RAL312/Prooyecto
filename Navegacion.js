import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';//Navegación
import { createNativeStackNavigator } from '@react-navigation/native-stack';//Navegación
import Inicio from './inicio';
import Inscripcion from './Inscripcion';
import Menu from './Menu';
import Perfil from './Perfil';

export default class Navegacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createNativeStackNavigator(); //Navegación
    return (
        <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} options={{headerShown:false}} />
        <Stack.Screen name="Inscripcion" component={Inscripcion} options={{headerShown:false}} />
        <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}}/>
        <Stack.Screen name="Perfil" component={Perfil} options={{headerShown:true}}/>

      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
