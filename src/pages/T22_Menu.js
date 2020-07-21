import * as React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity,TextInput, Modal } from 'react-native';


export default class T22_Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {isVisible:true};
  }

  render() {
    return (
       <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.isVisible}
          onRequestClose={() => {this.setState({isVisible: false});}}>
      <View style={styles.fundo}>
      <View style={styles.opcao}>
      <TouchableOpacity  onPress={() => {this.setState({ isVisible: false })}}>
        <Image source={require('../img/fechar.png')} style={styles.fechar}/>
      </TouchableOpacity>
        <Image source={require('../img/user.png')} style={styles.user}/>
          <Text style={styles.titulo}>Usuario</Text>
      <View style={{flexDirection: 'row',marginBottom:30,}}>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('T23_HistoricoViagem')}>
          <Image source={require('../img/viagem.png')} style={styles.viagem}/>
        </TouchableOpacity>
        <Text style={styles.texto}>Viagens</Text>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('T24_Ajuda')}>
          <Image source={require('../img/ajuda.png')} style={styles.ajuda}/>
        </TouchableOpacity>
        <Text style={styles.texto2}>Ajuda</Text>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('T25_Configuracoes')}>
          <Image source={require('../img/configuracoes.png')} style={styles.configuracao}/>
        </TouchableOpacity>
        <Text style={styles.texto3}>Configuracoes</Text>
      </View>
        </View>
      </View>
      </Modal>
      );
  }
}
  const styles = StyleSheet.create({
    fundo: {
      flex:1,
    },

    opcaoMenu:
    {
      backgroundColor:'#303030',
      alignSelf:'stretch',
      borderWidth:3,
      borderBottomColor:'#ffe500',
    },

    textoMenu:{
      color:'#ffffff',
      fontSize:15,
      position:'relative',
      marginTop:90,
      marginLeft:-75,
    },

    texto2Menu:{
      color:'#ffffff',
      fontSize:15,
      position:'relative', 
      marginTop:90, 
      marginLeft:-66,    
     },

     texto3Menu:{
      color:'#ffffff',
      fontSize:15,
      position:'relative',
      marginTop:90,
      marginLeft:-95,
     },

    tituloMenu:{
      color:'#ffffff',
      fontSize:30,
      alignSelf:'center',
      position:'relative',
    },

    viagemMenu:
    {
      width:90,
      height:90,
      marginTop:12,
      position:'relative',
      marginLeft:30,
    },

    ajudaMenu:
    {
      width:92,
      height:92,
      position:'relative',
      marginTop:10,
      marginLeft:55,
    },

    configuracaoMenu:
    {
      width:92,
      height:92,
      position:'relative',
      marginTop:10,
      marginLeft:60,
    },

    userMenu:
    {
      width:92,
      height:92,
      position:'relative',
      alignSelf:'center',
      marginTop:20,
    },

    fecharMenu:
    {
      width:25,
      height:25,
      marginRight:20,
      alignSelf:'flex-end',
      marginTop:50,
    },
});
