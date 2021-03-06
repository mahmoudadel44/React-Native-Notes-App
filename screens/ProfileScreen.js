import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
             <View style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}>Profile</Text>
        </View>
        <Animatable.Text style={styles.TextStyle}   animation="fadeIn" iterationCount={4}>Profile Screen</Animatable.Text>
    </View>
  );
}

export default ProfileScreen


const styles = StyleSheet.create({
  container: {
    flex:1,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerStyle:{
    backgroundColor:'#009387',
    width:'100%',
    height:50,
    alignItems:'center',
    paddingVertical:15,
    justifyContent:'flex-start',
    },
    TextStyle:{
      fontSize:18,
      fontWeight:'bold',
      color:'#009387',
      marginTop:200
    },
    headerTextStyle:{
      fontSize:18,
      fontWeight:'bold',
      color:'#fff',
    }


});