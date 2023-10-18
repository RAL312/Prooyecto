import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';   
import Menu from './Menu';
import { NavigationContainer } from '@react-navigation/native';

export default class drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const Drawer = createDrawerNavigator();

        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" component={Menu}  />
                    {/* <Drawer.Screen name="Article" component={Article} /> */}
                </Drawer.Navigator>
            </NavigationContainer>


        );
    }
}
