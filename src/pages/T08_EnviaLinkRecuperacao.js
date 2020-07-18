import React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';

export default class T08_EnviaLinkRecuperacao extends React.Component {
  render() {
    return (
        <View style={styles.fundo}>
        <Image source={require('../img/mail.png')} style={styles.image}/>
        <Text style={styles.texto}>Enviamos o link para definir sua nova senha.</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('T02_Login')}
         style={{marginTop:15, backgroundColor:"#ffe500",
        borderRadius:6,borderWidth:1,marginLeft:90,marginRight:90,padding:10,alignItems:'center'}}>
              <Text style={styles.entrar}>Entrar Novamente</Text>
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
  marginTop:3,
  color:'#ffffff',
  fontSize:17,
},

image: {
  alignSelf: 'center',
  width:200,
  height:200,
  marginTop: 150,
},

texto: {
  color:'#ffffff',
  fontWeight: 'bold',
  fontSize: 45,
  textAlign: 'center',
},

botao: {
  marginTop:30,
  paddingLeft: 100,
  paddingRight: 100,    
}
});