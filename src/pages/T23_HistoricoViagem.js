import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,SafeAreaView,SectionList } from 'react-native';


export default class T23_HistoricoViagem extends React.Component {

  render() {
    return (
      <View style={styles.fundo}>
        <TouchableOpacity onPress={() =>this.props.navigation.goBack()}>
          <Image source={require('../img/back.png')} style={styles.icon}/>
        </TouchableOpacity>
        <View style={{borderBottomColor:'#ffffff',borderBottomWidth:1,}}>
        <Text style={styles.titulo}>Histórico de Viagens</Text>
        </View>
        <SafeAreaView style={styles.container}>
        <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
          />
        </SafeAreaView>
      </View>
        );
  }
}
const DATA = [
  {
    title: 'Restaurante, Rua XX Araras - SP\n\nUniararas, Rua xx Araras - SP',
    data: ['00/00/0000\n', '\n00:00\n\n', '\n\nR$00,00']
  },
  {
    title: 'Restaurante, Rua XX Araras - SP\n\nUniararas, Rua xx Araras - SP',
    data: ['00/00/0000\n', '\n00:00\n\n', '\n\nR$00,00']
  },
  {
    title: 'Restaurante, Rua XX Araras - SP\n\nUniararas, Rua xx Araras - SP',
    data: ['00/00/0000\n', '\n00:00\n\n', '\n\nR$00,00']
  }
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

    const styles = StyleSheet.create({
    fundo: {
      backgroundColor:'#000000',
      flex:1,
    },

  item: {
    backgroundColor: "#000000",
  },

  header:{
    fontSize: 15,
    backgroundColor: "#000000",
    color:"#ffffff",
    borderBottomColor:"#ffffff",
    borderBottomWidth:1,
    paddingBottom:10,
    paddingLeft:20,
    paddingTop:10,
  },

  title: {
    fontSize: 15,
    color:"#ffffff",
    marginLeft:320,
    marginTop:-70,
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
  });