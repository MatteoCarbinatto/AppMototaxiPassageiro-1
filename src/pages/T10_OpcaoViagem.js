import * as React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity,TextInput, Modal } from 'react-native';


export default class T10_OpcaoViagem extends React.Component {

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
 
    	<TouchableOpacity onPress={() => {this.setState({ isVisible: false })}}>
    		<Image source={require('../img/fechar.png')} style={styles.fechar}/>
    	</TouchableOpacity>
    		<Text style={styles.titulo}>{'O que Deseja\nTransportar?'}</Text>
      <View style={{flexDirection: 'row',}}>
    		<TouchableOpacity onPress={() =>this.props.navigation.navigate('T11_TrechoViagem')}>
    		<Image source={require('../img/passageiro.png')} style={styles.image}/>
    		</TouchableOpacity>
    		<Text style={styles.texto}>Passageiro</Text>
    		<TouchableOpacity onPress={() =>this.props.navigation.navigate('T11_TrechoViagem')}>
    		<Image source={require('../img/encomenda.png')} style={styles.image2}/>
    		</TouchableOpacity>
    		<Text style={styles.texto2}>Encomenda</Text>
    		</View>
      </View>
    	</View>
      </Modal>
      );
  }
}
  const styles = StyleSheet.create({
    fundo: {
      backgroundColor:'#00000070',
      flex:1,
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
});
