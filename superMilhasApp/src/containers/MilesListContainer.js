//@flow
import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import MilesListItem from "../components/MilesListItem";
import type { MilesAgency } from "../util/types";

type State = {
  milesAgencyList: Array<MilesAgency>
};

type Props = {
  milesAgencyList: Array<MilesAgency>
};

class MilesListContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <FlatList
        data={this.props.milesAgencyList}
        renderItem={({item}) => <MilesListItem milesAgency={item}/>}
        />
      </View>
    );
  }
}

export default MilesListContainer;
