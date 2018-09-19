//@flow
import React from "react";
import { View } from "react-native";
import AddProgramContainer from "../containers/AddProgramContainer";
import { NavigationScreenProp } from "react-navigation";
import MilesService from "../services/MilesService";

type State = {};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class AddProgramScreen extends React.Component<Props, State> {
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
      return <AddProgramContainer navigation={this.props.navigation} />;
  }
}

export default AddProgramScreen;