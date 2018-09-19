//@flow
import React from "react";
import { View } from "react-native";
import MileAddContainer from "../containers/MileAddContainer";
import { NavigationScreenProp } from "react-navigation";

type State = {};

type Props = {
  navigation: NavigationScreenProp<{}>
};
class MileAddScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = {
    title: 'Cadastrar Milhas',  
    headerTitleStyle: {
        textAlign: 'center',
        flex: 1
      }
  };

  render () {
      return <MileAddContainer navigation={this.props.navigation} />;
  }
}

export default MileAddScreen;