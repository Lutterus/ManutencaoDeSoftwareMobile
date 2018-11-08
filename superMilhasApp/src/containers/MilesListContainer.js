//@flow
import React from "react";
import { View, StyleSheet, Text, FlatList , TouchableOpacity} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import MilesListItem from "../components/MilesListItem";
import type { MilesAgency , Milha} from "../util/types";
import { AsyncStorage } from "react-native"; 
import DetailService from "../services/DetailService";

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
    const program_Name = this.state.milesAgencyList;
    AsyncStorage.setItem('nome_programa', program_Name);
    console.log('AAAAAA')
    console.log(program_Name)
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
