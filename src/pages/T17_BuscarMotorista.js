import * as React from 'react';
import { Text, View, StyleSheet,Image,ActivityIndicator,TouchableOpacity } from 'react-native';


export default class T17_BuscarMotorista extends React.Component {

componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate('T18_ACaminho');
    }, 3000);
  }

  render() {
    return (
     	<View style={styles.fundo}>
      <Image source={require('../img/logo.png')} style={styles.image}/>
      <Text style={styles.texto}>Buscando Motorista ...</Text>
        <ActivityIndicator style={styles.load} size="large" color="#ffe500" />
    </View>
        );
  }
}

    const styles = StyleSheet.create({
    fundo: {
      backgroundColor:'#000000',
      flex:1,
    },

    image: {
      alignSelf: 'center',
      width:300,
      height:300,
      marginTop:100,
    },

    load:{
      marginTop:150,
    },

    texto:{
      color:'#ffffff',
      alignSelf:'center',
      fontSize:30,
      marginTop:60,
    }
  });