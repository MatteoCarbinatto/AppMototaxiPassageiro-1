import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,Button,TextInput } from 'react-native';


export default class T30_Atendimento extends React.Component {

  render() {
    return (
     	<View style={styles.fundo}>
        <TouchableOpacity onPress={() =>this.props.navigation.goBack()}>
          <Image source={require('../img/back.png')} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.titulo}>Atendimento ao Consumidor</Text>
          <Text style={styles.texto}>Como Podemos Ajudar?</Text>
          <TextInput style={styles.input} placeholder="Escreva sua mensagem" numberOfLines={10}
          textBreakStrategy={"highQuality"} multiline={true}></TextInput>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('T09_Inicio')}
         style={{marginTop:15, backgroundColor:"#ffe500",
        borderRadius:6,borderWidth:1,marginLeft:90,marginRight:90,padding:10,alignItems:'center'}}>
              <Text style={styles.entrar}>Enviar</Text>
        </TouchableOpacity>
      </View>
        );
  }
}

    const styles = StyleSheet.create({
    fundo: {
      backgroundColor:'#000000',
      flex:1,
    },

    entrar: {
      color:'#ffffff',
      fontSize:17,
    },

    input:{
      paddingLeft:15,
      fontSize:20,
      backgroundColor:'#ffffff',
      alignSelf:'center',
      width:310,
      maxHeight:300,
      borderRadius:5,
      borderWidth:1,
      borderColor:'#c2c2c2',
      marginBottom:20,
      paddingTop:5,
      textAlignVertical:'top',
      flexWrap: "wrap",
      overflow: "scroll",
    },

    icon:{
      marginTop:50,
      width:30,
      height:30,
      marginBottom:20,
      marginLeft:20,
    },

    titulo:{
      color:'#ffe500',
      alignSelf:'center',
      fontSize:30,
      marginBottom:10,
    },

    texto:{
      color:'#ffffff',
      alignSelf:'center',
      fontSize:25,
      marginTop:20,
      marginBottom:15,
    },
  });