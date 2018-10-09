//@flow
import React from "react";
import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import CardView from "../components/GenericComponents/CardView";
import CardButton from "../components/GenericComponents/CardButton";

type State = {
  email: string
};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class PasswordContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: ""
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 6,
          alignItems: "center"
        }}
      >
        <CardView
          style={
            styles.inputView
          } /*viewStyle={{height: Dimensions.get("window").height * 0.3}}*/
        >
          <TextInput placeholder="Email" underlineColorAndroid={"#0000"} />
        </CardView>
        <View
          style={{ flex: 1, marginBottom: 50, justifyContent: "flex-end", alignItems: "center" }}
        >
          <CardButton
            viewStyle={{
              justifyContent: "center",
              marginVertical: 20,
              width: Dimensions.get("window").width * 0.5,
              backgroundColor: "#083b66"
            }}
            textStyle={{ fontSize: 16, color: "white" }}
            text="Enviar"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 18,
    textAlign: "left",
    alignSelf: "stretch"
  },
  inputView: {
    borderRadius: 4,
    marginTop: 30,
    padding: 10
  },
  signUp: {
    color: "#083b66",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold"
  }
});

export default PasswordContainer;
