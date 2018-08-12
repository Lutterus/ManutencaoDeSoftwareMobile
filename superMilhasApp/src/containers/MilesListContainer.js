//@flow
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationScreenProp } from "react-navigation";

type State = {};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class MilesListContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Carregando... </Text>
      </View>
    );
  }
}

export default MilesListContainer;
