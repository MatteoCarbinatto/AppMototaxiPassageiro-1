import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,TextInput,Button } from 'react-native';
import { AirbnbRating } from 'react-native-elements';


export default class T29_ViagemRealizada extends React.Component {

    ratingCompleted(rating) {
      console.log("Rating is: " + rating)
    }

  render() {
    return (
     	<View style={styles.fundo}>
        <TouchableOpacity onPress={() =>this.props.navigation.goBack()}>
          <Image source={require('../img/back.png')} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.titulo}>Viagem</Text>
          <Text style={styles.texto}>Pago R$0,00 Dia 00/00/0000 às 00:00</Text>
          <View style={styles.mapa}>
            <Text>Mapa</Text>
          </View>
        <Image source={require('../img/grafico.png')} style={styles.image}/>
      <Text style={styles.texto2}>Restaurante, Rua XX Araras - SP</Text>
      <Text style={styles.margem}>Uniararas, Rua xx Araras - SP</Text>
        <Text style={styles.titulo}>Motorista</Text>
        <Text style={styles.motorista}>Gean Victor</Text>
          <Text style={styles.moto}>
          {`
            Yahama Fazer 250 ABS - Azul
            ABC 1234
          `}</Text>
          <Image source={require('../img/perfil.png')} style={styles.perfil}/>
        <Text style={styles.titulo}>Sua avaliação</Text>
          <AirbnbRating
            count={5}
            showRating={false}
            defaultRating={0}
            size={50}
          />
      </View>
        );
    }
  }

    const styles = StyleSheet.create({
    fundo: {
      backgroundColor:'#000000',
      flex:1,
    },
      
    image:
   {
      width:60,
      height:60,
      position:'relative',
      marginTop:10,
    },

    margem:{
      color:'#ffffff',
      fontSize:18,
      position:'relative',
      marginBottom:10,
      marginLeft:40,
      marginTop:10,
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
      fontSize:20,
      color:'#ffffff',
      alignSelf:'center',
      marginTop:5,
    },

    texto2:{
      fontSize:18,
      color:'#ffffff',
      marginLeft:40,
      marginTop:-55,
    },

    mapa:{
      marginTop:5,
      backgroundColor:'#949494',
      height:250,
    },

    moto:{
      fontSize:15,
      color:'#ffffff',
      marginLeft:75,
      marginTop:-20,
    },

    motorista:{
      fontSize:25,
      fontWeight:'bold',
      color:'#ffffff',
      marginLeft:120,
    },

   perfil:
   {
      width:120,
      height:120,
      position:'relative',
      marginTop:-110,
      marginLeft:10,
    },
  });