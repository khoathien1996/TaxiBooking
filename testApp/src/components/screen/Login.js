import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert}  from 'react-native';
import Backend from '../firebase/FirebaseConfig';
//import Backend from '../firebase/Backend';
export default class Login extends Component{
	// static navigationOptions ={
	// 	title:'Trang chu'
	// }
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
		}
	}

	dismissAlert(){}

	login(){
		Backend.getFireBaseApp().auth().signInWithEmailAndPassword(this.state.username, this.state.password)
		.then(() =>{
			var text1 = this.state.username;
			Alert.alert(
			  'Success',
			  'Login sucessfully: ' + this.state.username,
			  [			
			    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			    {text: 'OK', onPress :() => this.props.navigation.navigate("MainScreen",{username1 : text1})},
			  ],
			 // {onDismiss: () => {this.dismissAlert()} },
			  { cancelable: false }
			)
			this.setState({
				username:'',
				password:'',
			})
		})	
		.catch(function(error){
			Alert.alert(
			  'Fail',
			  'Login failed. Please check your infomation!',
			  [			
			    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			    {text: 'OK', onPress: () =>  console.log('OK Pressed')},
			  ],
			  { cancelable: false }
			)
		});
	}
	render(){
		return(
		
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
					 	source={require('../../images/logo.png')}
					/>
					<Text style={styles.title}>
						Chat my life
					</Text>	
				</View>
				<View style={styles.loginContainer}>
					<View style={styles.inputContainer}>
						<TextInput 
							placeholder="username"
							placeholderTextColor='#7f8c8d'
							style={styles.input} 
							onChangeText={(username) => this.setState({username})}
							value={this.state.username}
						/>
						<TextInput 
							placeholder="password"
							placeholderTextColor='#7f8c8d'
							onChangeText={(password) => this.setState({password})}
							secureTextEntry
							style={styles.input} 
						/>

					</View>

					<TouchableOpacity style={styles.buttonLogin}>
						<Text style={styles.buttonText}
							onPress ={() => {this.login()}}
						>LOGIN</Text>

					</TouchableOpacity>	

					<TouchableOpacity style={{alignItems:'center'}}>
						<Text style = {{color: 'green'}}
							onPress ={() => {this.props.navigation.navigate("RegisterScreen")}}
					 	>
					 	 Register?
					 	 </Text>
				 	 </TouchableOpacity>
					
	
				</View>

			</View>
		);
	}
}


const styles = StyleSheet.create({	
	container:{
		flex:1,
		backgroundColor: '#2E9AFE',		
	},
	logoContainer:{
		alignItems: 'center',
		flexGrow: 1,
		top: '20%' ,
	},
	logo: {
		width : 260,
		height: 110,
	},
	loginContainer:{
		flex:1,
		flexGrow:1.5,
	},
	formContainer:{

	},
	title:{
		color: '#FFF',
		marginTop: 10,
		width: 160,
		textAlign: 'center',
		opacity: 0.9,
		fontSize: 20,

	},
	button:{
		backgroundColor: '#FACC2E',
		width: 50,
	},
	textButton:{
		color: 'blue',
		fontSize: 20, 
		padding: 10,
	},
	inputContainer:{
		//flexGrow:1,
	},
	input:{
		height: 40,
		backgroundColor:'rgba(255,255,255,0.3)',
		marginBottom: 10,
		color: '#2c3e50',
		width: '70%',
		alignSelf: 'center',
	},
	buttonLogin:{
		backgroundColor: '#d35400',
		paddingVertical: 10,
		marginBottom: 10,
		width: '30%',
		alignSelf: 'center',

	},

	buttonText:{
		textAlign:'center',
		color: '#FFFFFF', 
		fontWeight: '700',
	},
});


