﻿//@flow
import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  Image,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import TextField from "../components/GenericComponents/TextField";
import { NavigationScreenProp } from "react-navigation";
import CardButton from "../components/GenericComponents/CardButton";
import CardView from "../components/GenericComponents/CardView";
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginService from '../services/LoginService';
import { AsyncStorage } from "react-native"

type State = {
  showPassword: boolean,
  email: string,
  senha: string
};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class LoginContainer extends React.Component<Props, State> {
  LoginService;
  constructor(props: Props) {
    super(props);
    this.loginService = new LoginService();
    this.state = {
      showPassword: true,
      email: "",
      senha: ""
    };
  }

  togglePasswordHandler = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  loginTest = async () => {
    AsyncStorage.setItem('login', this.state.email)
    AsyncStorage.setItem('password', this.state.senha)
    var res = await this.loginService.login(this.state.email, this.state.senha)

    if(res===true){
      this.props.navigation.navigate("MilesList")
    }else{
      console.warn("As credenciais estão incorretas")
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 4 / 5,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/*Logo*/}
        <View style={{ flex: 4 / 5 }}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.styleTitle}
          />
          <View style={{ width: 400, height: 2, backgroundColor: "#083b66" }} />
        </View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {/* Email */}
          <KeyboardAvoidingView behavior = "padding">
            <Text style={styles.text}>E-mail</Text>
            <CardView style={styles.inputView}>
              <TextInput
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                underlineColorAndroid={"#0000"}
                style={styles.textStyle}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(TextInput)=> this.setState({email: TextInput})}
              />
            </CardView>
          </KeyboardAvoidingView>

          {/* Senha */}
          <KeyboardAvoidingView behavior = "padding">
            <Text style={styles.text}>Senha</Text>
            <CardView style={styles.inputView}>
              <TextInput 
                returnKeyLabel="go"
                secureTextEntry={this.state.showPassword}
                underlineColorAndroid={"#0000"}
                style={styles.textStyle}
                autoCorrect={false}
                autoCapitalize="none"
                ref={(input) => this.passwordInput = input}
                onChangeText={(TextInput)=> this.setState({senha: TextInput})}
              />
              <TouchableOpacity
                viewStyle={{
                  width: Dimensions.get("window").width * 0.17,
                  backgroundColor: "#083b66"
                }}
                onPress={this.togglePasswordHandler}  
              >
              <Icon 
                name={"eye-slash"}
                size={15}
                color="black"
              />
              </TouchableOpacity>
            </CardView>
          </KeyboardAvoidingView>

          {/* Botão de Login */}
          <View>
            <CardButton
              viewStyle={{
                marginVertical: 20,
                width: Dimensions.get("window").width * 0.3,
                backgroundColor: "#083b66"
              }}
              textStyle={{ fontSize: 16, color: "white" }}
              text="Login"
              onPress={this.loginTest}
            />
          </View>

          {/* Cadastre-se */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CreateAccount")}
          >
            <Text style={styles.signUp} viewStyle={{ marginTop: 40 }}>
              Criar uma conta
            </Text>
          </TouchableOpacity>

          {/* Esqueci minha senha */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Password")}
          >
            <Text style={styles.signUp} viewStyle={{ marginTop: 40 }}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#083b66",
    fontSize: 22,
    flexDirection: "column",
    textAlign: "left",
    alignSelf: "stretch",
    fontWeight: "bold"
  },
  inputView: {
    borderRadius: 4,
    marginTop: 3,
    padding: 2
  },
  textStyle: {
    fontSize: 16,
    textAlign: "center"
  },
  signUp: {
    color: "#083b66",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold"
  },
  styleTitle: {
    width: Dimensions.get("window").width * 1.1,
    height: Dimensions.get("window").height * 0.3
  }
});

export default LoginContainer;
