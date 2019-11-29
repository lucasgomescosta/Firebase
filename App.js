
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      //cliente: 'Carregando..'
      nome: '',
      cargo: ''
    };

    this.cadastrar = this.cadastrar.bind(this);
    let firebaseConfig = {
      apiKey: "AIzaSyDHwMpUfXp8tBtxcnyQh36QuL78GB5CvgQ",
      authDomain: "myapp-b66a3.firebaseapp.com",
      databaseURL: "https://myapp-b66a3.firebaseio.com",
      projectId: "myapp-b66a3",
      storageBucket: "myapp-b66a3.appspot.com",
      messagingSenderId: "471767399829",
      appId: "1:471767399829:web:6e7c576eef36751a1f0a9c",
      measurementId: "G-V1L8QNZ1SW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //add um ouvinte
   /* firebase.database().ref("cliente").on("value", (snapshort) => {
        let state = this.state;
        state.cliente = snapshort.val();
        this.setState(state);
    });*/

    //pegando valores dos campos usuarios
   /* firebase.database().ref("usuarios/id/idade").on("value", (snapshort) => {
      let state = this.state;
      state.cliente = snapshort.val();
      this.setState(state);
    });*/

    //carregar uma única vez
  /*  firebase.database().ref("cliente").once("value", (snapshort) => {
      let state = this.state;
      state.cliente = snapshort.val();
      this.setState(state);
  });*/

  };

  cadastrar() {
    if(this.state.nome != '' && this.state.cargo != ''){

      let usuarios = firebase.database().ref('usuarios');
      let chave =usuarios.push().key;

      usuarios.child(chave).set({
        nome: this.state.nome,
        cargo: this.state.cargo
      });

      alert("Cadastrado com sucesso!!");

    }
  }


  //{this.state.cliente}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            underlineColorAndroid="transparent"
            value={this.props.email}  
            style={styles.inputText}
            placeholder="Nome..." 
            placeholderTextColor="#003f5c"
            onChangeText={(nome) => this.setState({nome})}   
          />
        </View>
        <View style={styles.inputView}>
           <TextInput
           underlineColorAndroid="transparent"
            value={this.props.email}  
            style={styles.inputText}
            placeholder="Cargo..." 
            placeholderTextColor="#003f5c"
            onChangeText={(cargo) => this.setState({cargo})}   
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={this.cadastrar}>
          <Text style={styles.loginText}>Cadastrar Novo Funcionário</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
  
});
