import * as React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity, Modal } from 'react-native';

export default class T09_Inicio extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        isVisible: false,
        isVisible2: false,

      };
   }
  render() {
    return (
    	<View style={styles.fundo}>
    	<TouchableOpacity onPress={() => {this.setState({ isVisible: true })}}>
    		<Image source={require('../img/menu.png')} style={styles.menu}/>
    	</TouchableOpacity>
    		<Image source={require('../img/pessoa.png')} style={styles.local}/>
      <View style={{flexDirection: 'row',alignSelf:'flex-end'}}>
      <TouchableOpacity>
        <Image source={require('../img/bussola.png')} style={styles.icon}/>
      </TouchableOpacity>
    	<TouchableOpacity onPress={() => {this.setState({ isVisible2: true })}}>
    		<Image source={require('../img/logo.png')} style={styles.image}/>
    	</TouchableOpacity>
      </View>

      <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.isVisible}
          onRequestClose={() => {this.setState({isVisible: false});}}>
      <View style={styles.fundo}>
      <View style={styles.opcaoMenu}>
      <TouchableOpacity  onPress={() => {this.setState({ isVisible: false })}}>
        <Image source={require('../img/fechar.png')} style={styles.fecharMenu}/>
      </TouchableOpacity>
        <Image source={require('../img/user.png')} style={styles.userMenu}/>
          <Text style={styles.tituloMenu}>Usuario</Text>
      <View style={{flexDirection: 'row',marginBottom:30,}}>
        <TouchableOpacity onPress={() =>this.setState({ isVisible: false }) + this.props.navigation.navigate('T23_HistoricoViagem') }>
          <Image source={require('../img/viagem.png')} style={styles.viagemMenu}/>
        </TouchableOpacity>
        <Text style={styles.textoMenu}>Viagens</Text>
        <TouchableOpacity onPress={() =>this.setState({ isVisible: false }) + this.props.navigation.navigate('T24_Ajuda')}>
          <Image source={require('../img/ajuda.png')} style={styles.ajudaMenu}/>
        </TouchableOpacity>
        <Text style={styles.texto2Menu}>Ajuda</Text>
        <TouchableOpacity onPress={() =>this.setState({ isVisible: false }) + this.props.navigation.navigate('T25_Configuracoes')}>
          <Image source={require('../img/configuracoes.png')} style={styles.configuracaoMenu}/>
        </TouchableOpacity>
        <Text style={styles.texto3Menu}>Configuracoes</Text>
      </View>
        </View>
      </View>
      </Modal>

      <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.isVisible2}
          onRequestClose={() => {this.setState({isVisible2: false});}}>
      <View style={styles.fundoMenu}>
      <View style={styles.opcaoOP}>
 
      <TouchableOpacity onPress={() => {this.setState({ isVisible2: false })}}>
        <Image source={require('../img/fechar.png')} style={styles.fecharOP}/>
      </TouchableOpacity>
        <Text style={styles.tituloOP}>{'O que Deseja\nTransportar?'}</Text>
      <View style={{flexDirection: 'row',}}>
        <TouchableOpacity onPress={() =>this.setState({ isVisible2: false }) + this.props.navigation.navigate('T11_TrechoViagem')}>
        <Image source={require('../img/passageiro.png')} style={styles.imageOP}/>
        </TouchableOpacity>
        <Text style={styles.textoOP}>Passageiro</Text>
        <TouchableOpacity onPress={() =>this.setState({ isVisible2: false }) + this.props.navigation.navigate('T11_TrechoViagem')}>
        <Image source={require('../img/encomenda.png')} style={styles.image2OP}/>
        </TouchableOpacity>
        <Text style={styles.texto2OP}>Encomenda</Text>
        </View>
      </View>
      </View>
      </Modal>
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
        opcaoOP:
      {
        backgroundColor:'#303030',
        width:300,
        height:250,
        alignSelf:'center',
        borderWidth:1,
        marginTop:200,
        marginBottom:20,
        borderColor:'#ffffff',
      },

      textoOP:{
        color:'#ffffff',
        fontSize:15,
        marginLeft:-90,
        marginTop:100,
      },

      texto2OP:{
        color:'#ffffff',
        fontSize:15,
        position:'relative',
        marginLeft:-90,
        marginTop:100,
       },

      tituloOP:{
        color:'#ffffff',
        fontSize:30,
        alignSelf:'center',
        position:'relative',
      },

      imageOP:
      {
        width:100,
        height:100,
        position:'relative',
        marginLeft:40,
        marginTop:10,
      },

      image2OP:
      {
        width:100,
        height:100,
        position:'relative',
        marginLeft:40,
        marginTop:10,
      },

      fecharOP:
      {
        width:20,
        height:20,
        position:'relative',
        marginLeft:270,
        marginTop:10,
      },
      fundoMenu: {
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