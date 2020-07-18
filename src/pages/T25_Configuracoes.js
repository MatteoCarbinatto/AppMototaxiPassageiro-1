import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';


export default class T25_Configuracoes extends React.Component {

  render() {
    return (
      <View style={styles.fundo}>
        <TouchableOpacity onPress={() =>this.props.navigation.goBack()}>
          <Image source={require('../img/back.png')} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.titulo}>Configurações</Text>
        <Image source={require('../img/user.png')} style={styles.perfil}/>
      <View style={{marginTop:15,}}>
        <Text style={styles.input}>Nome</Text>
        <TouchableOpacity>
           <Image source={require('../img/editar.png')} style={styles.edit}/>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.input}>Sobrenome</Text>
        <TouchableOpacity>
           <Image source={require('../img/editar.png')} style={styles.edit}/>
        </TouchableOpacity>
      </View>
        <Text style={styles.input2}>email@dominio.com</Text>
        <Text style={styles.input2}>+55 00 0000-0000</Text>
         <Text style={styles.titulo2}>Segurança</Text>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('T33_AlterarSenha')}>
          <Text style={styles.texto}>Alterar Senha</Text>
        </TouchableOpacity>
          <Text style={styles.texto}>Alterar Telefone</Text>
          <Text style={styles.texto}>Alterar E-mail</Text>
          <Text style={styles.texto}>Sair da Conta</Text>
          <Text style={styles.texto2}>Excluir Conta</Text>

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

    texto:{
      fontSize:25,
      color:'#ffffff',
      marginTop:10,
      marginLeft:20,
    },

    texto2:{
      fontSize:25,
      color:'#c9002c',
      marginTop:10,
      marginLeft:20,
    },

    titulo:{
      color:'#ffe500',
      alignSelf:'center',
      fontSize:40,
      marginBottom:10,
    },

    titulo2:{
      color:'#ffe500',
      alignSelf:'center',
      fontSize:40,
      marginBottom:10,
      marginTop:20,
    },

    input:{
    color:'#ffffff',
    marginBottom:20,
    borderBottomColor:'#ffffff',
    borderWidth:1,
    marginLeft:150,
    marginRight:30,
    height:30,
    fontSize:22,
    paddingLeft:15,
  },

    input2:{
      borderBottomColor:'#ffffff',
      borderBottomWidth:1,
      fontSize:20,
      marginLeft:20,
      marginRight:20,
      marginTop:15,
      color:"#ffffff",
      paddingLeft:10,
    },

    perfil:{
      width:100,
      height:100,
      marginTop:170,
      marginLeft:20,
      position:'absolute',
    },

    edit:{
      position:'relative',
      width:20,
      height:20,
      marginTop:-45,
      marginLeft:350,
    },

    edit2:{
      position:'relative',
      width:20,
      height:20,
      marginTop:30,
      marginLeft:350,
    },

  });