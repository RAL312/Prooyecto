import React, { Component } from 'react';
import MapViewDirections from 'react-native-maps-directions';
import {PERMISSIONS} from 'react-native-permissions';
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
const llaveapi = "AIzaSyCueV-w_VdQxaxjrmRmZD_RFA7wX0CoM-o";

export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
async function requestGeolocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'La app requiere de tu localizacion',
        'message': 'Danos acceso a tu ubicacion'
      });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the geolocation")
    } else {
      console.log("Geolocation permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}
requestGeolocationPermission();

    return (
        <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude:20.6568,
            longitude: -103.3245,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
        >
          <Marker
          coordinate={{ latitude:20.6568, longitude: -103.3245}}
          title='CUSEX'
          description='Centro de estudihambres'

          />
 <MapViewDirections
    origin={{latitude:20.6568, longitude: -103.3245}}
    destination={{latitude:20.765138, longitude: -103.390194}}
    strokeWidth={5}
    strokeColor="red"
    apikey={llaveapi}
    onReady={result => {
      console.log("La distancia es de: "+result.distance+"km")
      console.log("El tiempo transcurrido será de: "+result.duration+"min")
    }}
  />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });