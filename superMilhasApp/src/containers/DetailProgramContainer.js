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
import GetMileService from "../services/GetMileService";

type State = {
  listDetail: Array<DetailListItem>,
  programName: String,
  programImage: String
};

type Props = {
  navigation: NavigationScreenProp<{}>,
  listDetail: Array<DetailListItem>
};

class DetailProgramContainer extends React.Component<Props, State> {
  //GetMileService;
  constructor(props: Props) {
    super(props);
    //this.getMileService = new GetMileService();
    this.state = {
      /*programName: this.props.navigation.state.params.programName,
      programImage: this.props.navigation.state.params.programName*/
    };
  }

  render() {
    return (
      <View>
        <FlatList
        data={this.props.listDetail}
        renderItem={({item}) => <TouchableOpacity onPress={() =>  alert("Milha Clicada potato")} ><DetailListItem Milha={item}/></TouchableOpacity>}
        />
      </View>
    );
  };
}



export default DetailProgramContainer;