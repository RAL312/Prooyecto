import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openDrawer = () => {
    this.drawer.openDrawer();
  };

  render() {
    const Tab = createBottomTabNavigator();
   

    return (
      <Tab.Navigator initialRouteName="Tilines"> 
      <Tab.Screen 
      name="Tab1" 
      component={Tab1} 
      initialParams={{name: this.props.route.params.name}}
      options={{
        tabBarIcon:({color, size})=>{
         return <Icon name="eye-outline" color={'black'} size={30}></Icon>
        }
      }}
      />
      <Tab.Screen 
      name="El pepe" 
      component={Tab2} 
      options={{
        tabBarIcon:({color, size})=>{
          return <Icon name="skull-outline" color={'black'} size={28}></Icon>
        }
      }}
      />

<Tab.Screen 
      name="Mapa" 
      component={Tab3} 
      options={{
        tabBarIcon:({color, size})=>{
          return <Icon name="map-outline" color={'black'} size={28}></Icon>
        }
      }}
      />
    </Tab.Navigator>
    );
  }
}
