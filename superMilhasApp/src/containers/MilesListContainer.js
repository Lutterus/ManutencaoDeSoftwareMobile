//@flow
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import MilesListItem from "../components/MilesListItem";
import type { MilesAgency, Milha } from "../util/types";
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

    this.state = { navigation: this.props.navigation };
  }

  saveStateBeforeLaunch(program_Name) {
    AsyncStorage.setItem("nome_programa", program_Name);
    this.state.navigation.navigate("DetailProgram");
  }

  render() {
    if(this.props.milesAgencyList.length!=0){
      return (
        <View>
          <FlatList
            data={this.props.milesAgencyList}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this.saveStateBeforeLaunch(item.nome)}
              >
                <MilesListItem milesAgency={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.nome}
          />
        </View>
      );
    }else{
      return (
        <View>
          <FlatList
            data={[{key: "Não encontramos milhas nesta conta"}]}
            renderItem={({item}) => <Text style={styles.programName}>{item.key}</Text>}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  programName: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: "#083b66",    
    fontWeight: 'bold'
  }
});

export default MilesListContainer;
