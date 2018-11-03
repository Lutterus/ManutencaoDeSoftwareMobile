//@flow
import React from "react";
import EditMilesContainer from "../containers/EditMilesListContainer";
import { NavigationScreenProp } from "react-navigation";

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
      return <EditMilesContainer navigation={this.props.navigation} />;
  }
}

export default EditMilesScreen;