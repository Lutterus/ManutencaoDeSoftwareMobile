//@flow
import React from "react";
import { View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import PasswordContainer from "../containers/PasswordContainer";


type State = {};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class PasswordScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = {
    title: "Esqueci minha senha",
    headerTitleStyle: {
      textAlign: "left",
      flex: 1,
      color: "#083b66"
    }
  };

  render() {
    return <PasswordContainer navigation={this.props.navigation} />;
  }
}

export default PasswordScreen;
