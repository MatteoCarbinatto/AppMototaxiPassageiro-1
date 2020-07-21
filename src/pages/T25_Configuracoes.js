import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,TextInput,Modal } from 'react-native';


export default class T25_Configuracoes extends React.Component {
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
      
        <TouchableOpacity onPress={() =>this.props.navigation.goBack()}>
          <Image source={require('../img/back.png')} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.titulo}>Configurações</Text>
        <Image source={require('../img/user.png')} style={styles.perfil}/>
      <View style={{marginTop:15,}}>
        <Text style={styles.input}>Nome</Text>
        <TouchableOpacity>
           <Image source={require('../img/editar.png')} style={styles.edit}/>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.input}>Sobrenome</Text>
        <TouchableOpacity>
           <Image source={require('../img/editar.png')} style={styles.edit}/>
        </TouchableOpacity>
      </View>
        <Text style={styles.input2}>email@dominio.com</Text>
        <Text style={styles.input2}>+55 00 0000-0000</Text>
         <Text style={styles.titulo2}>Segurança</Text>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('T33_AlterarSenha')}>
          <Text style={styles.texto}>Alterar Senha</Text>
        </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('T34_AlterarCelular')}>
            <Text style={styles.texto}>Alterar Telefone</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('T35_AlterarEmail')}>
            <Text style={styles.texto}>Alterar E-mail</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.setState({ isVisible: true })}}>
            <Text style={styles.texto}>Sair da Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {this.setState({ isVisible2: true })}}>
            <Text style={styles.texto2}>Excluir Conta</Text>
          </TouchableOpacity>
          

          <Modal
            animationType={'fade'}
            transparent={true}
            visible={this.state.isVisible}
            
          >
                  <View style={styles.modalbackground}>

                      <View style={styles.modalstyle}>

                    <Text style={styles.modaltext}>Deseja mesmo sair do app?</Text>

                  <View style={styles.row}>

                        <TouchableOpacity style={styles.modalbutton} onPress={() => {this.setState({ isVisible: false })}}>
                              <View style={styles.modalviewbutton}>

                                <Text style={styles.modaltextbutton}>
                                      Cancelar
                                </Text>

                              </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalbutton} onPress={() => {this.props.navigation.navigate()}}>
                              <View style={styles.modalviewbutton2}>

                                <Text style={styles.modaltextbutton}>
                                      Continuar
                                </Text>

                              </View>
                            </TouchableOpacity>
                      </View>

                </View>
              </View> 
          </Modal>

          
          <Modal
            animationType={'fade'}
            transparent={true}
            visible={this.state.isVisible2}
            onRequestClose={() => {
              this.setState({ isVisible2: false });
            }}
          >
            <View style={styles.modalbackground}>

                <View style={styles.modalstyle2}>

              <Text style={styles.modaltext}>Deseja mesmo excluir sua conta? Não será possível recuperar após confirmar.</Text>
              <TextInput style={styles.modaltextinput2}
              placeholder='Excluir'
              /> 
              <Text style={styles.textexcluir}>Digite “excluir” para continuar</Text>
              
            <View style={styles.row}>

                  <TouchableOpacity style={styles.modalbutton2} onPress={() => {this.setState({ isVisible2: false })}}>
                        <View style={styles.modalviewbutton3}>

                          <Text style={styles.modaltextbutton2}>
                                Cancelar
                          </Text>

                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.modalbutton2} onPress={() => {this.props.navigation.navigate()}}>
                        <View style={styles.modalviewbutton4}>

                          <Text style={styles.modaltextbutton2}>
                                Continuar
                          </Text>

                        </View>
                      </TouchableOpacity>
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

    texto:{
      fontSize:25,
      color:'#ffffff',
      marginTop:10,
      marginLeft:20,
    },

    texto2:{
      fontSize:25,
      color:'#c9002c',
      marginTop:10,
      marginLeft:20,
    },

    titulo:{
      color:'#ffe500',
      alignSelf:'center',
      fontSize:40,
      marginBottom:10,
    },

    titulo2:{
      color:'#ffe500',
      alignSelf:'center',
      fontSize:40,
      marginBottom:10,
      marginTop:20,
    },

    input:{
      color:'#ffffff',
      marginBottom:20,
      borderBottomColor:'#ffffff',
      borderWidth:1,
      marginLeft:150,
      marginRight:30,
      height:30,
      fontSize:22,
      paddingLeft:15,
    },

    input2:{
      borderBottomColor:'#ffffff',
      borderBottomWidth:1,
      fontSize:20,
      marginLeft:20,
      marginRight:20,
      marginTop:15,
      color:"#ffffff",
      paddingLeft:10,
    },

    perfil:{
      width:100,
      height:100,
      marginTop:170,
      marginLeft:20,
      position:'absolute',
    },

    edit:{
      position:'relative',
      width:20,
      height:20,
      marginTop:-45,
      marginLeft:350,
    },

    edit2:{
      position:'relative',
      width:20,
      height:20,
      marginTop:30,
      marginLeft:350,
    },
    modalbackground:{
      backgroundColor: 'rgba(0,0,0,0.7)',
      flex:1
    },

    modalstyle:{
      backgroundColor:'#1C1C1C',
      height:200,
      width: 290,
      alignSelf: 'center',
      marginTop:300,
      borderWidth: 1,
      borderColor:'#fff',
      
    },
    modaltext:{
      color:'#fff',
      fontSize:30,
      textAlign:'center',
      marginTop:6,
      marginLeft:6,
      marginRight:6,
    },

    row:{
      flexDirection: 'row',
    },

    modalbutton:{
      paddingTop:20,
      paddingRight:13,
      width: 150,
      marginTop:30,

    },
    modaltextbutton:{
      fontSize:25,
      paddingTop: 10,
      color: 'black',
      textAlign:'center'
    },
    
    modalviewbutton:{
      height: 50,
      borderBottomWidth: 1,
      backgroundColor:'#f00',
      borderRadius: 10,
      marginLeft:10
    },

    modalviewbutton2:{
      height: 50,
      borderBottomWidth: 1,
      backgroundColor:'#FDE93A',
      borderRadius: 10,
      marginRight:10
    },
    modalstyle2:{
    backgroundColor:'#1C1C1C',
    height:340,
    width: 300,
    alignSelf: 'center',
    marginTop:300,
    borderWidth: 1,
    borderColor:'#fff',
    
  },
  modaltext2:{
    color:'#fff',
    fontSize:25,
    textAlign:'center',
    marginTop:6,
    marginLeft:6,
    marginRight:6,
  },
  modaltextinput2:{
    backgroundColor:'#fff',
    height:50,
    width:170,
    alignSelf:'center',
    fontSize:25,
    paddingLeft:50,
    borderRadius: 10,
    marginTop:20,
  },
  textexcluir:{
    color:'#fff',
    fontSize:18,
    textAlign:'center',
    marginTop:5
  },
  modalbutton2:{
    marginTop:20,
    paddingLeft:8,
    paddingRight:8,
    width: 150,
    

  },
  modaltextbutton2:{
    fontSize:25,
    paddingTop: 10,
    color: 'black',
    textAlign:'center'
  },
  
  modalviewbutton3:{
    height: 50,
    borderBottomWidth: 1,
    backgroundColor:'#f00',
    borderRadius: 10,
    marginLeft:10
  },

  modalviewbutton4:{
    height: 50,
    borderBottomWidth: 1,
    backgroundColor:'#FDE93A',
    borderRadius: 10,
    marginRight:10
  },

  });