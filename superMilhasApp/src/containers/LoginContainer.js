﻿﻿//@flow
import React from "react";
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
import PasswordInput from "../components/GenericComponents/PasswordInput";

type State = {
  email: string,
  senha: string
};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class LoginContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: "",
      senha: ""
    };
  }

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
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
          <View>
            <Text style={styles.text}>E-mail</Text>
            <CardView style={styles.inputView}>
              <TextInput
                underlineColorAndroid={"#0000"}
                style={styles.textStyle}
              />
            </CardView>
          </View>

          {/* Senha */}
          <View>
            <Text style={styles.text}>Senha</Text>
            <CardView style={styles.inputView}>
              <PasswordInput />
            </CardView>
          </View>

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
              onPress={() => this.props.navigation.navigate("MilesList")}
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
