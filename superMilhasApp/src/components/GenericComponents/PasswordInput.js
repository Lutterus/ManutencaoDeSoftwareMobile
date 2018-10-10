import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextField,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import CardButton from "./CardButton";

class PasswordInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: true
    };
  }

  togglePasswordHandler = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={this.state.showPassword}
          underlineColorAndroid={"#0000"}
          style={styles.placeInput}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  placeInput: {
    paddingLeft: 8,
    letterSpacing: 2,
    textAlign: "justify",
    backgroundColor: "white",
    width: "70%"
  }
});

export default PasswordInput;
