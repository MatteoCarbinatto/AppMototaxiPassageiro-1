import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';


export default class T33_AlterarSenha extends React.Component {

  render() {
    return (
     	<View style={styles.fundo}>
        <TouchableOpacity onPress={() =>this.props.navigation.goBack()}>
          <Image source={require('../img/back.png')} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.titulo}>Alterar Senha</Text>
        <TextInput
       style={styles.input}
       minLength={8}
       placeholder="Senha Atual"
       secureTextEntry/>
       <TextInput
       style={styles.input}
       minLength={8}
       placeholder="Nova Senha"
       secureTextEntry/>
       <TextInput
       style={styles.input}
       minLength={8}
       placeholder="Confirme sua nova senha"
       secureTextEntry/>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('T02_Login')}
         style={{marginTop:15, backgroundColor:"#ffe500",
        borderRadius:6,borderWidth:1,marginLeft:90,marginRight:90,padding:10,alignItems:'center'}}>
              <Text style={styles.entrar}>Alterar</Text>
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
      marginBottom:40,
    },

     entrar: {
      color:'#ffffff',
      fontSize:17,
    },

    input:{
    marginBottom:20,
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

    botao:{
    flex:1,
    paddingLeft:100,
    paddingRight:100,
    fontSize:35,
    marginTop:20,
  },
  });