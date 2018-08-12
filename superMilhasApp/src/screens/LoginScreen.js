//@flow
import React from "react";
import { View } from "react-native";
import LoginContainer from "../containers/LoginContainer";
import { NavigationScreenProp } from "react-navigation";

type State = {};

type Props = {
  navigation: NavigationScreenProp<{}>
};
class LoginScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return <LoginContainer navigation={this.props.navigation} />;
  }
}

export default LoginScreen;
