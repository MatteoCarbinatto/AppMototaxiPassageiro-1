import * as React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';


export default class T18_ACaminho extends React.Component {

  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate('T19_RealizandoViagem');
    }, 3000);
  }

  render() {
    return (    	
      <View style={styles.fundo}>
    	<TouchableOpacity onPress={() => this.props.navigation.navigate('T22_Menu')} >
    		<Image source={require('../img/menu.png')} style={styles.menu} onPress={() => this.props.navigation.navigate('T22_Menu')}/>
    	</TouchableOpacity>
        <View style={styles.opcao}>
          <Text style={styles.motorista}>Gean Victor</Text>
          <Text style={styles.texto}>
          {`
            Yahama Fazer 250 ABS - Azul
            ABC 1234
          `}</Text>
          <Image source={require('../img/perfil.png')} style={styles.image}/>
          <Image source={require('../img/favourite.png')} style={styles.nota}/>
            <Text style={styles.texton}>5,0</Text>
          <TouchableOpacity>
            <Image source={require('../img/chamar.png')} style={styles.botao}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={require('../img/sos.png')} style={styles.botao2}/>
          </TouchableOpacity>
        </View>
      <View style={styles.tempo}>
        <Text style={styles.textempo}>Tempo estimado 5:00 minutos</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.textinfo}>{`
            Motorista está 
              à caminho.
          `} 
        </Text>
        <Image source={require('../img/relogio.png')} style={styles.imginfo}/>
      </View>
      </View>
    );}
}

  const styles = StyleSheet.create({
    fundo: {
      backgroundColor:'#00000070',
      flex:1,
    },

       image:{
       width:140,
       height:140,
       position:'absolute',
       marginLeft:20,
      },

      menu:{
        width:50,
        height:50,
        marginTop:50,
        marginRight:20,
        alignSelf:'flex-end',
      },

      texto:{
        position:'relative',
        color:'#ffffff',
        fontSize:17,
        marginLeft:105,
        marginTop:50,
      },
        opcao:
    {
        backgroundColor:'#00000090',
        width:420,
        height:200,
        alignSelf:'center',
        borderWidth:1,
        position:'absolute',
        marginTop:680,
        borderColor:'#cfcfcf',
    },

    motorista:{
      fontSize:30,
      fontWeight: 'bold',
      color:'#ffffff',
      position:'absolute',
      marginLeft:150,
      marginTop:30,
    },

    nota:{
      width:22,
      height:22,
      position:'absolute',
      marginLeft:50,
      marginTop:130,
    },

    texton:{
      marginLeft:80,
      marginTop:-5,
      fontSize:18,
      fontWeight:'bold',
      color:'#ffffff',
    },

    botao:{
      position:'absolute',
      marginLeft:290,
      marginTop:-40,
      width:60,
      height:60,
    },

    botao2:{
      position:'absolute',
      marginLeft:350,
      marginTop:-40,
      width:60,
      height:60,
    },

    tempo:{
      backgroundColor:'#ffe500',
      position:'absolute',
      width:412,
      height:30,
      marginTop:650,
      alignItems:'center',
    },

    textempo:{
      fontSize:20,
    },

    info:{
      backgroundColor:'#ffe500',
      position:'absolute',
      width:200,
      height:50,
      marginTop:55,
      marginLeft:30,
      borderRadius:10,
    },

    textinfo:{
      fontSize:18,
      position:'absolute',
      marginTop:-18,
      marginLeft:5,
    },

    imginfo:{
      width:50,
      height:50,
      marginLeft:5,
      marginTop:2,
    }
  });