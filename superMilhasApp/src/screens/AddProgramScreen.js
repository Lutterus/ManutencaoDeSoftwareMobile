//@flow
import React from "react";
import AddProgramContainer from "../containers/AddProgramContainer";
import { NavigationScreenProp } from "react-navigation";

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
        textAlign: 'left',
        flex: 1
      }
  };

  render () {
      return <AddProgramContainer navigation={this.props.navigation} />;
  }
}

export default AddProgramScreen;