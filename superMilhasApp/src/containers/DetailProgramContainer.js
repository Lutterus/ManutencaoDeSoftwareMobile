//@flow
import React from "react";
import {
  View,
  TouchableOpacity,
  FlatList
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import DetailListItem from "../components/DetailListItem";
import DetailService from "../services/DetailService";
import type { Milha } from "../util/types";
import { AsyncStorage } from "react-native";

type State = {
  listDetail: Array<Milha>
};

type Props = {
  navigation: NavigationScreenProp<{}>,
  listDetail: Array<Milha>
};

class DetailProgramContainer extends React.Component<Props, State> {
  DetailService;
  constructor(props: Props) {
    super(props);
    this.DetailService = new DetailService();
    this.state = {};
  }

  saveStateBeforeLaunch(currentMile){ 
      AsyncStorage.setItem('miles', currentMile.cod_milha.toString());
      this.props.navigation.navigate('EditMilesList')    
  }

  render() {
    return (

      <View>  
        <FlatList
        data={[{quantidade: 'Quantidade', dt_expiracao: "Vencimento"}]}
        renderItem={({item}) => <DetailListItem milha={item}/>}
        keyExtractor={item => item.quantidade}
        />
        <FlatList
        data={this.props.listDetail}
        renderItem={({item}) => <TouchableOpacity onPress={() => this.saveStateBeforeLaunch(item)} ><DetailListItem milha={item}/></TouchableOpacity>}
        keyExtractor={item => item.cod_milha.toString()}
        />
      </View>
    );
  };
}



export default DetailProgramContainer;