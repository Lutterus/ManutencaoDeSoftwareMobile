//flow
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import CardView from "../components/GenericComponents/CardView";
import CardButton from "../components/GenericComponents/CardButton";
import { NavigationScreenProp } from "react-navigation";
import { TextInputMask } from "react-native-masked-text";

type State = {
  email: string,
  senha: string,
  telefone: number
};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class CreateAccountContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
      telefone: ""
    };
  }

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
            <TextInput placeholder="Email" underlineColorAndroid={"#0000"} />
          </CardView>
        </View>

        <KeyboardAvoidingView behavior="padding">
        <View style={{ marginTop: 20 }}>
          <CardView style={styles.inputView}>
            <TextInputMask
              placeholder="Telefone"
              underlineColorAndroid={"#0000"}
              type={"cel-phone"}
              options={{
                format: "dddMask"
              }}
            />
          </CardView>
        </View>

        <View style={{ marginTop: 20 }}>
          <CardView style={styles.inputView}>
            <TextInput placeholder="Senha" secureTextEntry underlineColorAndroid={"#0000"} />
          </CardView>
        </View>

        <View style={{ marginTop: 20 }}>
          <CardView style={styles.inputView}>
            <TextInput placeholder="Confirmar senha" secureTextEntry underlineColorAndroid={"#0000"} />
          </CardView>
        </View>

        <View style={{ marginTop: 20, justifyContent: "center", alignSelf: "center" }}>
          <CardButton
            viewStyle={{
              marginVertical: 20,
              width: Dimensions.get("window").width * 0.5,
              backgroundColor: "#083b66"
            }}
            textStyle={{ fontSize: 16, color: "white" }}
            text="Cadastrar"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </View>

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
