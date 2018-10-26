//flow
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import CardView from "../components/GenericComponents/CardView";
import CardButton from "../components/GenericComponents/CardButton";
import { NavigationScreenProp } from "react-navigation";
import { TextInputMask } from "react-native-masked-text";
import CreateAccountService from '../services/CreateAccountService';

type State = {
  email: string,
  senha: string,
  telefone: number,
  confirmaSenha: String
};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class CreateAccountContainer extends React.Component<Props, State> {
  CreateAccountService;
  constructor(props: Props) {
    super(props);
    this.createAccountService = new CreateAccountService();
    this.state = {
      email: "",
      senha: "",
      telefone: "",
      confirmaSenha: ""
    };
  }

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  onGoFocus() {
    console.log()
		// when you call getElement method, the instance of native TextInput will returned.
		this.refs['telefone'].getElement().focus();
  };

  CreateAccount = async () => {
    console.log(this.state.email)
    console.log(this.state.senha)
    console.log(this.state.telefone)
    console.log(this.state.confirmaSenha)
    if(this.state.email!="" &&
    this.state.senha!= "" &&
    this.state.telefone!="" &&
    this.confirmaSenha!= ""){
      //var res = await this.createAccountService.addUser();//verificar campos
      var res = false
      if(res===true){
        Alert.alert(
          'Sucesso',
          'Sua conta foi criada com sucesso',
          [
            {text: 'OK'}
          ],
        )
        this.props.navigation.navigate("Login")
      }else{
        Alert.alert(
          'Erro durante a criação',
          'Alguma das credenciais está incorreta ou ocorreu erro com sua conexão à internet',
          [
            {text: 'OK'}
          ],
        )
      }
    }else{
      Alert.alert(
        'Erro durante a criação',
        'Algum dos campos não foi preenchido',
        [
          {text: 'OK'}
        ],
      )
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
        <KeyboardAvoidingView behavior="padding" style={{ marginTop: 20 }}>
          <CardView style={styles.inputView}>
            <TextInput 
              returnKeyType="next"
              //onSubmitEditing={this.onGoFocus.bind(this)}
              underlineColorAndroid={"#0000"}
              placeholder="Email" 
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(TextInput)=> this.setState({email: TextInput})}
            />
          </CardView>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView behavior="padding">
        <View style={{ marginTop: 20 }}>
          <CardView style={styles.inputView}>
            <TextInputMask
              ref='telefone'
              returnKeyType="next"
              //onSubmitEditing={this.onGoFocus.bind('senha')}
              placeholder="Telefone"
              underlineColorAndroid={"#0000"}
              type={"cel-phone"}
              options={{
                format: "dddMask"
              }}
              //onChange={(TextInput)=> this.setState({telefone: TextInput})}
            />
          </CardView>
        </View>

        <KeyboardAvoidingView behavior="padding" style={{ marginTop: 20 }}>
          <CardView style={styles.inputView}>
            <TextInput 
              placeholder="Senha" 
              secureTextEntry underlineColorAndroid={"#0000"} 
              returnKeyType="next"
              //onSubmitEditing={this.onGoFocus.bind('confirmaSenha')}
              ref='senha'
              onChangeText={(TextInput)=> this.setState({senha: TextInput})}
            />
          </CardView>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView behavior="padding" style={{ marginTop: 20 }}>
          <CardView style={styles.inputView}>
            <TextInput placeholder="Confirmar senha" 
              secureTextEntry 
              underlineColorAndroid={"#0000"} 
              returnKeyType="done"
              ref='confirmaSenha'
              onChangeText={(TextInput)=> this.setState({confirmaSenha: TextInput})}
              />
          </CardView>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView behavior="padding" style={{ marginTop: 20, justifyContent: "center", alignSelf: "center" }}>
          <CardButton
            viewStyle={{
              marginVertical: 20,
              width: Dimensions.get("window").width * 0.5,
              backgroundColor: "#083b66"
            }}
            textStyle={{ fontSize: 16, color: "white" }}
            text="Cadastrar"
            onPress={() => this.CreateAccount()}
          />
        </KeyboardAvoidingView>

      </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#083b66",
    fontSize: 16,
    textAlign: "left",
    alignSelf: "stretch"
  },
  inputView: {
    borderRadius: 4,
    marginTop: 3,
    padding: 10
  },
  text: {
    color: "#083b66",
    fontSize: 22,
    flexDirection: "column",
    textAlign: "left",
    alignSelf: "stretch",
    fontWeight: "bold"
  }
});

export default CreateAccountContainer;
