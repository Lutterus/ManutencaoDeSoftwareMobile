//@flow
import React ,{ Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import CardView from "../components/GenericComponents/CardView";
import CardButton from "../components/GenericComponents/CardButton";
import DetailListItem from "../components/DetailListItem";
//import DetailService from "../services/DetailService";

type State = {
  quantidade: number,
  vencimento: Date
};

type Props = {
  navigation: NavigationScreenProp<{}>,
  milesList: Array<DetailListItem>
};

class DetailProgramContainer extends React.Component<Props, State> {
  //DetailService;
  constructor(props: Props) {
    super(props);
    //this.DetailService = new DetailService();
    this.state = {
      quantidade: 0,
      vencimento: new Date()
    };
  }

  render() {
    return (
      <View>
        <FlatList
        data={this.props.milesList}
        renderItem={({item}) => <TouchableOpacity onPress={() => /*this.props.navigation.navigate('DetailProgram')*/ alert("Milha Clicada")} ><DetailListItem milesAgency={item}/></TouchableOpacity>}
        />
      </View>
    );
  };
}

export default DetailProgramContainer;