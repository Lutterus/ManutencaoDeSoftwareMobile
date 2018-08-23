//@flow
import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import MilesListItem from "../components/MilesListItem";
import type { MilesAgency } from "../util/types";

type State = {
  // milesAgency: MilesAgency,
  milesAgencyList: Array<MilesAgency>
};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class MilesListContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      milesAgencyList: [
        {
          agencyName: "Livelo",
          agencyImage: "https://ecommercenews.com.br/wp-content/uploads/2017/08/livelo.jpg",
          expirationDate: "12/12/2012",
          miles: "13000"
        },
        {
          agencyName: "Smiles",
          agencyImage: "https://braziljournal.s3.amazonaws.com/media/9806-bd8b5d92-f9f4-0000-0005-4f18e6ec1d20.jpg?v=1533403088",
          expirationDate: "13/13/2013",
          miles: "15000"
      }
      ]
    };
  }

  render() {
    return (
      <View>
        <FlatList
        data={this.state.milesAgencyList}
        renderItem={({item}) => <MilesListItem milesAgency={item}/>}
        />
      </View>
    );
  }
}

export default MilesListContainer;
