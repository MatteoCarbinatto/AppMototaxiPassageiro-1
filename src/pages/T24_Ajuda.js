import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity } from 'react-native';


export default class T24_Ajuda extends React.Component {

  render() {
    return (
     	<View style={styles.fundo}>
        <TouchableOpacity onPress={() =>this.props.navigation.goBack()}>
          <Image source={require('../img/back.png')} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.titulo}>Central de Ajuda</Text>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('T30_Atendimento')}>
          <Text style={styles.texto}>Atendimento ao Consumidor</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('T31_TermosdeUso')}>
          <Text style={styles.texto}>Termos de Uso</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('T32_Privacidade')}>
          <Text style={styles.texto}>Políticas de Privacidade</Text>
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
      fontSize:40,
      marginBottom:10,
    },

    texto:{
      color:'#ffffff',
      alignSelf:'flex-start',
      fontSize:30,
      marginTop:20,
      marginLeft:15,
    },
  });