import * as React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';

export default class T09_Inicio extends React.Component {
  render() {
    return (
    	<View style={styles.fundo}>
    	<TouchableOpacity onPress={() => this.props.navigation.navigate('T22_Menu')}>
    		<Image source={require('../img/menu.png')} style={styles.menu}/>
    	</TouchableOpacity>
    	<TouchableOpacity onPress={() => this.props.navigation.navigate('T17_BuscarMotorista')}>
    		<Image source={require('../img/pessoa.png')} style={styles.local}/>
    	</TouchableOpacity>
      <View style={{flexDirection: 'row',alignSelf:'flex-end'}}>
      <TouchableOpacity>
        <Image source={require('../img/bussola.png')} style={styles.icon}/>
      </TouchableOpacity>
    	<TouchableOpacity onPress={() => this.props.navigation.navigate('T10_OpcaoViagem')}>
    		<Image source={require('../img/logo.png')} style={styles.image}/>
    	</TouchableOpacity>
      </View>
        </View>
       );
  }
}


const styles = StyleSheet.create({
      fundo: {
      backgroundColor:'#00000070',
      flex:1,
    },

       image:{
         width:120,
         height:120,
         marginTop:525,
         marginRight:10,
        },

        menu:{
            width:50,
            height:50,
            marginTop:50,
            marginRight:20,
            alignSelf:'flex-end',
        },

        icon:{
            width:30,
            height:30,
            marginTop:580,
            marginRight:15,
        },

        local:{
            width:60,
            height:60,
            marginLeft:100,
            marginTop:20,
            position:'relative',
        },
    });