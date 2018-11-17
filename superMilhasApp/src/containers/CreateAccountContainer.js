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
import CreateAccountService from "../services/CreateAccountService";

type State = {
  nome: String,
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
    this.focusNextField = this.focusNextField.bind(this);
    this.createAccountService = new CreateAccountService();
    this.state = {
      nome: "",
      email: "",
      senha: "",
      telefone: "",
      confirmaSenha: ""
    };
    this.inputs = {};
  }

  focusNextField(key) {
    this.inputs[key].focus();
  };

  onSubmitEditing= () => {
    // specify the key of the ref, as done in the previous section.
    this.focusNextField('next-field');
  }

  CreateAccount = async () => {
    if (
      this.state.email != "" &&
      this.state.senha != "" &&
      this.state.telefone != "" &&
      this.confirmaSenha != ""
    ) {
      var res = await this.createAccountService.addUser(
        this.state.email,
        this.state.nome,
        this.state.telefone,
        this.state.senha
      );
      if (res === true) {
        Alert.alert("Sucesso", "Sua conta foi criada com sucesso", [
          { text: "OK" }
        ]);
        this.props.navigation.navigate("Login");
      } else {
        Alert.alert(
          "Erro durante a criação",
          "Alguma das credenciais está incorreta ou ocorreu erro com sua conexão à internet",
          [{ text: "OK" }]
        );
      }
    } else if (this.state.senha != this.state.confirmaSenha) {
      Alert.alert(
        "Erro durante a criação",
        "As senhas preenchidas não são iguais",
        [{ text: "OK" }]
      );
    } else {
      Alert.alert(
        "Erro durante a criação",
        "Algum dos campos não foi preenchido",
        [{ text: "OK" }]
      );
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
        <View style={{ marginTop: 20 }}>
          <CardView style={styles.inputView}>
            <TextInput
              returnKeyType="next"
              onSubmitEditing={() => {this.focusNextField('Email');}}
              blurOnSubmit={ false }
              underlineColorAndroid={"#0000"}
              placeholder="Nome"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={TextInput => this.setState({ nome: TextInput })}
              ref={ input => {this.inputs['Nome'] = input;}}
            />
          </CardView>
        </View>

        <KeyboardAvoidingView behavior="padding" style={{ marginTop: 20 }}>
          <CardView style={styles.inputView}>
            <TextInput
              onSubmitEditing={() => {this.focusNextField('Telefone');}}
              ref={ input => {this.inputs['Email'] = input;}}
              blurOnSubmit={ false }
              returnKeyType="next"
              underlineColorAndroid={"#0000"}
              placeholder="Email"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={TextInput => this.setState({ email: TextInput })}
            />
          </CardView>
          </View>

        <KeyboardAvoidingView behavior="padding">
          <View style={{ marginTop: 20 }}>
            <CardView style={styles.inputView}>
              <TextInputMask  
                refInput={ (input) => {this.inputs["Telefone"] = input;}}
                onSubmitEditing={() => {this.focusNextField('Senha');}}
                blurOnSubmit={ false }
                returnKeyType="next"
                //onSubmitEditing={this.onGoFocus.bind("senha")}
                placeholder="Telefone"
                underlineColorAndroid={"#0000"}
                value={this.state.telefone}
                keyboardType="phone-pad"
                type={"custom"}
                options={{
                  mask: "(99) 99999-9999"
                }}
                //onChangeText={this.onChangeText.bind(this)}
                onChangeText={telefone => this.setState({ telefone })}
              />

            </CardView>
          </View>

          <KeyboardAvoidingView behavior="padding" style={{ marginTop: 20 }}>
            <CardView style={styles.inputView}>
              <TextInput
                onSubmitEditing={() => {this.focusNextField('ConfirmaSenha');}}
                ref={ input => {this.inputs['Senha'] = input;}}
                blurOnSubmit={ false }
                placeholder="Senha"
                secureTextEntry
                underlineColorAndroid={"#0000"}
                returnKeyType="go"
                //onSubmitEditing={this.onGoFocus.bind('confirmaSenha')}
                //ref="senha"
                onChangeText={TextInput => this.setState({ senha: TextInput })}
              />
            </CardView>
          </KeyboardAvoidingView>

          <KeyboardAvoidingView behavior="padding" style={{ marginTop: 20 }}>
            <CardView style={styles.inputView}>
              <TextInput
                ref={ input => {this.inputs['ConfirmaSenha'] = input;}}
                placeholder="Confirmar senha"
                secureTextEntry
                underlineColorAndroid={"#0000"}
                returnKeyType="done"
                onChangeText={TextInput =>
                  this.setState({ confirmaSenha: TextInput })
                }
              />
            </CardView>
          </KeyboardAvoidingView>

          <KeyboardAvoidingView
            behavior="padding"
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignSelf: "center"
            }}
          >
            <CardButton
              viewStyle={{
                marginVertical: 20,
                width: Dimensions.get("window").width * 0.5,
                backgroundColor: "#083b66"
              }}
              returnKeyType="go"
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
