import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class T07_RecuperaSenha extends React.Component {
  render() {
    return (
        <View style={styles.conteiner}>

			<TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
					<Image
					source={require('../img/seta.png')}
					style={styles.imageIcon}
						/>		 
			</TouchableOpacity>


        <Text style={styles.text}>Recuperação de senha</Text>
            <TextInput style={styles.inputemail}
                    placeholder= "E-mail"
            />
            <View>
            <Text style={styles.text2}>Ou</Text>
            </View>
            <View style={styles.inputflex}>
    
                  <TextInput style={styles.Input} keyboardType = 'numeric'
                    maxLength = {2}
                    placeholder= "99"
                />
                <TextInput style={styles.Input2} keyboardType = 'numeric'
                    maxLength = {9}
                    placeholder= "98765-4321"
                />
            </View>
          <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('T08_EnviaLinkRecuperacao')}}>
               <View style={styles.viewbutton}>
                   <Text style={styles.textbutton}>
                           Redefinir senha
                   </Text>
               </View>
           </TouchableOpacity>
       </View>
    );
  }
}

const styles = StyleSheet.create({
	conteiner:{
		paddingTop: 20,
		backgroundColor:'#000000',
		flex: 1,
	},
	imageIcon:{
		height: 40,
		width: 40,
		marginLeft:30,
		position:'absolute',
		marginTop:50
	},
	text:{
		marginTop:120,
		fontSize:40,
		color: 'white',
		alignSelf: 'center',

	},
	text2:{
		marginTop:35,
		fontSize:40,
		color: 'white',
		alignSelf: 'center',

	},
	
	Input:{
		color:'black',
		marginTop:35,
		marginLeft:15,
		backgroundColor: 'white',
		padding:10,
		width: 60, 
		height: 50,
		fontSize:30,
		borderRadius: 10,
	},
	Input2:{
		color:'black',
		marginTop:35,
		marginLeft:15,
		backgroundColor: 'white',
		padding:10,
		width: 300, 
		height: 50,
		fontSize:30,
		borderRadius: 10,
	},
	inputemail:{
		color:'black',
		marginTop:35,
		marginLeft:15,
		backgroundColor: 'white',
		padding:10,
		width: 375, 
		height: 50,
		fontSize:30,
		borderRadius: 10,
	},
	viewbutton:{
		height: 60,
		borderBottomWidth: 1,
		alignItems: 'center',
		backgroundColor:'#FDE93A',
		borderRadius: 10, 
		width: 200,
	},
	textbutton: {
		fontSize:25,
		paddingTop: 15,
		color: 'black'

	},
	button:{
		padding:20,
		margin:10, 
		alignSelf: 'center',
	},
	inputflex:{
		flexDirection: 'row',
	},
});