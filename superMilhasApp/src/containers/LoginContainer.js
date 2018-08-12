//@flow
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
  Dimensions
} from "react-native";
import TextField from "../components/GenericComponents/TextField";
import { NavigationScreenProp } from "react-navigation";
import CardButton from "../components/GenericComponents/CardButton";
import CardView from "../components/GenericComponents/CardView";

type State = {};

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

  render() {
    return (
      // BackGround
      <ImageBackground
        source={require("../assets/images/aviao.png")}
        style={styles.backgroundImage}
      >
        {/* Título */}
        <View style={{ flex: 1 / 5 }}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.styleTitle}
          />
        </View>

        <View
          style={{
            flex: 4 / 5,
            alignItems: "center",
            justifyContent: "center"
          }}
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
              <TextInput
                underlineColorAndroid={"#0000"}
                style={styles.textStyle}
              />
            </CardView>
          </View>

          {/* Botão de Login */}
          <View>
            <CardButton
              viewStyle={{
                marginVertical: 20,
                width: Dimensions.get("window").width * 0.3
              }}
              textStyle={{ fontSize: 16 }}
              text="Login"
              onPress={() => this.props.navigation.navigate("MilesList")}
            />
          </View>

          {/* Cadastre-se */}
          <TouchableOpacity
            onPress={() => Linking.openURL("https://supermilhas.tur.br/")}
          >
            <Text style={styles.signUp}>
              Ainda não possui uma conta? Cadastre-se.
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 22,
    flexDirection: "column",
    textAlign: "left",
    alignSelf: "stretch"
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
    color: "black",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold"
  },
  styleTitle: {
    marginTop: 90,
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.12
  }
});

export default LoginContainer;
