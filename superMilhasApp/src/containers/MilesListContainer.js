//@flow
import React from "react";
import { View, StyleSheet, Text, FlatList , TouchableOpacity} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import MilesListItem from "../components/MilesListItem";
import type { MilesAgency } from "../util/types";
import { AsyncStorage } from "react-native"; 

type State = {
  milesAgencyList: Array<MilesAgency>
};

type Props = {
  navigation: NavigationScreenProp<{}>,
  milesAgencyList: Array<MilesAgency>
};

class MilesListContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {navigation: this.props.navigation};
  }

  saveStateBeforeLaunch(){
    AsyncStorage.setItem('cod_programa', this.props.milesAgencyList.data);
    this.state.navigation.navigate('DetailProgram')

  }

  render() {
    return (

      <View>
        <FlatList
        data={this.props.milesAgencyList}
    renderItem={({item}) => <TouchableOpacity onPress={() => this.saveStateBeforeLaunch()/*, cod_program: item.nome*/} ><MilesListItem milesAgency={item}/></TouchableOpacity>}
        />
      </View>

    );
  }
}

export default MilesListContainer;
