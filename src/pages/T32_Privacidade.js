import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native';


export default class T32_Privacidade extends React.Component {

  render() {
    return (
     	<View style={styles.fundo}>
        <TouchableOpacity onPress={() =>this.props.navigation.goBack()}>
          <Image source={require('../img/back.png')} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.titulo}>Políticas de Privacidade</Text>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.texto}>Parágrafo 1</Text>
              <Text style={styles.corpo}>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Donec eget malesuada dolor, a ultrices ante. 
              Quisque in lobortis ex, ut cursus mi. Maecenas lorem est, rhoncus quis mollis sed, suscipit in nisl.
              Nullam non tellus feugiat, laoreet mauris non, venenatis purus. 
              Vivamus hendrerit arcu in justo venenatis viverra a a diam. Phasellus sodales commodo mauris,
              sit amet vulputate sem volutpat non. Aenean non varius lorem.
              </Text>
            <Text style={styles.texto}>Parágrafo 2</Text>
              <Text style={styles.corpo}>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Donec eget malesuada dolor, a ultrices ante. 
              Quisque in lobortis ex, ut cursus mi. Maecenas lorem est, rhoncus quis mollis sed, suscipit in nisl.
              Nullam non tellus feugiat, laoreet mauris non, venenatis purus. 
              Vivamus hendrerit arcu in justo venenatis viverra a a diam. Phasellus sodales commodo mauris,
              sit amet vulputate sem volutpat non. Aenean non varius lorem.
              </Text>
            <Text style={styles.texto}>Parágrafo 3</Text>
              <Text style={styles.corpo}>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Donec eget malesuada dolor, a ultrices ante. 
              Quisque in lobortis ex, ut cursus mi. Maecenas lorem est, rhoncus quis mollis sed, suscipit in nisl.
              Nullam non tellus feugiat, laoreet mauris non, venenatis purus. 
              Vivamus hendrerit arcu in justo venenatis viverra a a diam. Phasellus sodales commodo mauris,
              sit amet vulputate sem volutpat non. Aenean non varius lorem.
              </Text>
            <Text style={styles.texto}>Parágrafo 4</Text>
              <Text style={styles.corpo}>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Donec eget malesuada dolor, a ultrices ante. 
              Quisque in lobortis ex, ut cursus mi. Maecenas lorem est, rhoncus quis mollis sed, suscipit in nisl.
              Nullam non tellus feugiat, laoreet mauris non, venenatis purus. 
              Vivamus hendrerit arcu in justo venenatis viverra a a diam. Phasellus sodales commodo mauris,
              sit amet vulputate sem volutpat non. Aenean non varius lorem.
              </Text>
            <Text style={styles.texto}>Parágrafo 5</Text>
              <Text style={styles.corpo}>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Donec eget malesuada dolor, a ultrices ante. 
              Quisque in lobortis ex, ut cursus mi. Maecenas lorem est, rhoncus quis mollis sed, suscipit in nisl.
              Nullam non tellus feugiat, laoreet mauris non, venenatis purus. 
              Vivamus hendrerit arcu in justo venenatis viverra a a diam. Phasellus sodales commodo mauris,
              sit amet vulputate sem volutpat non. Aenean non varius lorem.
              </Text>
          </ScrollView>
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
      fontSize:35,
      marginBottom:10,
    },

    texto:{
      color:'#ffffff',
      alignSelf:'flex-start',
      fontSize:20,
      marginTop:10,
      marginBottom:5,
      marginLeft:20,
      fontWeight: "bold",
    },

    corpo:{
      color:'#ffffff',
      alignSelf:'flex-start',
      fontSize:15,
      marginBottom:15,
      marginLeft:20,
      marginRight:20,
    },
  });