//@flow
import React from "react";
import { View } from "react-native";
import MilesListContainer from "../containers/MilesListContainer";
import { NavigationScreenProp } from "react-navigation";

type State = {};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class MilesListScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return <MilesListContainer navigation={this.props.navigation} />;
  }
}

export default MilesListScreen;
