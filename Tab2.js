import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        'https://www.youtube.com/watch?v=VGcfyPd-mQs&pp=ygUHZ2FvbGFuZw%3D%3D',
        'https://www.youtube.com/watch?v=E2Q52cVx7Bo',
        'https://www.youtube.com/watch?v=E5yFcdPAGv0',
      ],
    };
  }
  openDrawer = () => {
    this.drawer.openDrawer();
  };
  render() {
    
    return (
   

      <View style={styles.background}>
        <View style={styles.box1}>
          <Text style = {styles.H1}>
            Una prueba con algunos videos
          </Text>
          <Text>Aquí le dejamos unos videos para poder apreciar mejor el tema. </Text>
        </View>
        <FlatList
          data={this.state.videos}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.videoStyle}>
              <WebView source={{ uri: item }} />
            </View>
          )}
        />
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({

    videoStyle:{  
      width: 400,
      height: 185,
      marginTop: '30%',
      
    },

    background:{
      backgroundColor:'#fff',
      width: '100%',
      height: '100%',
    },

    box1:{
      flex:1,
      justifyContent: 'center',
      borderRadius: 10,
      color: 'blue',
    },

    H1:{
      fontSize:30,
      textAlign: 'center',
      color: 'black',
    },

    subs:{
      fontSize:15,
      color:'black',
  
      textAlign: 'center',
      
    }
});