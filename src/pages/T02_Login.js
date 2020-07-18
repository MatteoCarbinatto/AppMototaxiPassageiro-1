import React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity, Image } from 'react-native';

export default class T02_Login extends React.Component {
  render() {
    return (
      <View style={styles.fundo}>
        <Text style={styles.titulo}>Entre com sua Conta</Text>
        <TextInput
        style={styles.input}
        placeholder="Email"        
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry               
        />
        <View style={{flexDirection:'row', alignSelf:'center',marginTop:20,}}>
        <Text style={styles.texto}>Esqueceu sua senha?</Text>
        <Text style={styles.link} onPress={() => this.props.navigation.navigate('T07_RecuperaSenha')}>Recupere Aqui</Text>
        </View>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('T09_Inicio')}
         style={{marginTop:15, backgroundColor:"#ffe500",
        borderRadius:6,borderWidth:1,marginLeft:90,marginRight:90,padding:10,alignItems:'center'}}>
              <Text style={styles.entrar}>Entrar</Text>
        </TouchableOpacity>
        <View style={{marginTop:15, backgroundColor:"#0008a3",
        borderRadius:6,borderWidth:1,marginLeft:90,marginRight:90,padding:10,alignItems:'center'}}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
              <Image source={require('../img/facebook.png')} style={styles.icon}/>
              <Text style={styles.entrar}>Entrar com o Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:15,marginBottom:15, backgroundColor:"#ffffff",
        borderRadius:6,borderWidth:1,marginLeft:90,marginRight:90,padding:10,alignItems:'center'}}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
              <Image source={require('../img/google.png')} style={styles.icon}/>
              <Text style={styles.entrar2}>Entrar com o Google</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.texto}>Ainda não possui conta?Para criar uma</Text><Text style={styles.link} onPress={() => this.props.navigation.navigate('T03_CriaConta')}> Clique Aqui</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    fundo: {
      backgroundColor:'#000000',
      flex:1,
    },

    titulo: {
      marginTop: 50,
      marginBottom:30,
      color:'#ffffff',
      fontSize: 30,
      textAlign: 'center',
    },

    icon:{
      width:30,
      height:30,
    },

    entrar: {
      marginTop:3,
      color:'#ffffff',
      fontSize:17,
    },

    entrar2: {
      marginTop:3,
      marginLeft:10,
      color:'#000000',
      fontSize: 17,
    },

    texto: {
      color:'#ffffff',
      fontSize: 15,
      textAlign: 'center',
    },

    link: {
      color:'#ffe500',
      fontSize: 15,
      textAlign: 'center',
      textDecorationLine:'underline',
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

  });