import React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity,TextInput } from 'react-native';
import {IMaskTextInput} from 'react-native-imask';

export default class T03_CriaConta extends React.Component {
  render() {
    return (
      <View style={styles.fundo}>
      <Text style={styles.titulo}>Crie sua Conta</Text>
      <TextInput
       style={styles.input}
       placeholder="Nome" />
      <TextInput
       style={styles.input}
       placeholder="Sobrenome"/>
      <TextInput
       style={styles.input}
       placeholder="Email"/>
      <TextInput
       style={styles.input}
       placeholder="Senha"
       minLength={8}
       secureTextEntry/>
      <TextInput
       style={styles.input}
       minLength={8}
       placeholder="Confirme sua Senha"
       secureTextEntry/>
      <Text style={styles.conta}>CPF</Text>
      <IMaskTextInput style={styles.cpf}
        mask={'000.000.000-00'}
        keyboardType = 'numeric'
        radix="."
        value=""
        placeholder="000.000.000-00"
        unmask={true}
        onAccept={
          (value, mask) => console.log(value)}
      />
      <Text style={styles.conta}>Nascimento</Text>
      <IMaskTextInput style={styles.cpf}
        mask={Date}
        keyboardType = 'numeric'
        radix="."
        value=""
        placeholder="DD.MM.AAAA"
        unmask={true}
        onAccept={
          (value, mask) => console.log(value)}
      />
      <Text style={styles.texto}>Ao se cadastrar você concorda com nossos</Text>
      <View style={{flexDirection: 'row',justifyContent: 'center',}}>
        <Text style={styles.link} onPress={() => this.props.navigation.navigate('T31_TermosdeUso')}>Termos de Uso</Text>
        <Text style={{color:'#ffffff',fontSize: 15,}}> e </Text>
        <Text style={styles.link} onPress={() => this.props.navigation.navigate('T32_Privacidade')}>
          Políticas de Privacidade</Text>
      </View>
      
      <TouchableOpacity onPress={() => this.props.navigation.navigate('T04_Celular')}
         style={{marginTop:15, backgroundColor:"#ffe500",borderRadius:6,borderWidth:1,marginLeft:90,
         marginRight:90,padding:10,alignItems:'center'}}>
              <Text style={styles.entrar}>Cadastrar</Text>
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

  titulo: {
    marginTop:50,
    marginBottom:30,
    color:'#ffffff',
    fontSize: 30,
    textAlign: 'center',
  },

  texto: {
    marginTop:10,
    color:'#ffffff',
    fontSize: 15,
    textAlign: 'center',
  },

  link: {
    color:'#ffe500',
    fontSize: 15,
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

  cpf:{
    marginBottom:10,
    backgroundColor:'#ffffff',
    borderColor:'#bfbbbb',
    borderRadius:5,
    borderWidth:1,
    marginLeft:170,
    marginRight:30,
    height:40,
    fontSize:22,
    marginTop:-30,
    paddingLeft:15,
  },

  conta:{
      color:'#ffffff',
      fontSize:22,
      marginLeft:30,
      position:'relative',
      bottom:-5,
     },

  entrar: {
      marginTop:3,
      color:'#ffffff',
      fontSize:17,
    },
});