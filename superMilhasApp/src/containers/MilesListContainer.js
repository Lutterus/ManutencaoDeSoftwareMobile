//@flow
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import MilesListItem from "../components/MilesListItem";
import type { MilesAgency } from "../util/types";

type State = {
  milesAgency: MilesAgency
};

type Props = {
  navigation: NavigationScreenProp<{}>
};  

class MilesListContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      milesAgency: {
        agencyName: 'Livelo',
        agencyImage: '../assets/images/livelo.png',
        expirationDate: '12/12/2012'
      }
    };
  }

  render() {
    return (
      <View>
        <MilesListItem/>
      </View>
    );
  }
}

export default MilesListContainer;
