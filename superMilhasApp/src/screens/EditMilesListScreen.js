//@flow
import React from "react";
import { View } from "react-native";
import EditMilesContainer from "../containers/EditMilesListContainer";
import { NavigationScreenProp } from "react-navigation";
import EditMilesService from "../services/EditMilesService";

type State = {};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class EditMilesScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = {
    title: 'Editar Milhas',  
    headerTitleStyle: {
        textAlign: 'left',
        flex: 1
      }
  };

  render () {
      return <EditMilesListContainer navigation={this.props.navigation} />;
  }
}

export default EditMilesScreen;