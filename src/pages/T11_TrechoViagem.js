import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native';


export default class T11_TrechoViagem extends React.Component {
  render() {
    return (
    	<View style={styles.fundo}>
      <TouchableOpacity onPress={() =>this.props.navigation.goBack()}>
       <Image source={require('../img/back.png')} style={styles.icon}/></TouchableOpacity>
      <TextInput
       style={styles.input}
       placeholder="Sua localização atual"        
      />
      <TextInput
       style={styles.input}
       placeholder="Destino"        
      />
      <View style={styles.line}>
        <Image source={require('../img/location.png')} style={styles.image}/>
      <Text style={styles.texto}>Restaurante</Text>
      <Text style={styles.margem}>Rua xx, Araras - SP</Text></View>
      <View style={styles.line}>
        <Image source={require('../img/location.png')} style={styles.image}/>
      <Text style={styles.texto}>Uniararas</Text>
      <Text style={styles.margem}>Rua xx, Araras - SP</Text></View>
      <View style={styles.line2}>
        <Image source={require('../img/location.png')} style={styles.image}/>
      <Text style={styles.texto}>Praça Barão</Text>
      <Text style={styles.margem}>Rua xx, Araras - SP</Text></View>
    	</View>
    );
  }
}

    const styles = StyleSheet.create({
    fundo: {
      backgroundColor:'#000000',
      flex:1,
    },

    input:{
      marginBottom:10,
      backgroundColor:'#ffffff',
      borderColor:'#bfbbbb',
      borderRadius:5,
      borderWidth:1,
      marginLeft:30,
      marginRight:30,
      height:40,
      fontSize:22,
      paddingLeft:15,
    },

    texto:{
      color:'#ffffff',
      fontSize:20,
      position:'relative',
      marginTop:-65,
      marginLeft:100,
    },

    margem:{
      color:'#ffffff',
      fontSize:20,
      position:'relative',
      marginBottom:10,
      marginLeft:100,
    },

    icon:{
      marginTop:50,
      width:30,
      height:30,
      marginBottom:20,
      marginLeft:20,
    },

    image:
    {
      width:60,
      height:60,
      position:'relative',
      marginLeft:20,
      marginTop:10,
    },

    line:{
      borderTopWidth:1,
      borderTopColor:"#c4c4c4",
      paddingBottom:0,
      marginTop:5,
    },

    line2:{
      borderTopWidth:1,
      borderTopColor:"#c4c4c4",
      borderBottomWidth:1,
      borderBottomColor:"#c4c4c4",
      marginTop:5,
      paddingBottom:10,
    }
  });