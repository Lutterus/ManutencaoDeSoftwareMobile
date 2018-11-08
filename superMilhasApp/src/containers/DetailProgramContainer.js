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
import DetailService from "../services/DetailService";
import { AsyncStorage } from "react-native";

type State = {
  listDetail: Array<DetailListItem>,
};

type Props = {
  navigation: NavigationScreenProp<{}>,
  listDetail: Array<DetailListItem>
};

class DetailProgramContainer extends React.Component<Props, State> {
  //DetailService;
  constructor(props: Props) {
    super(props);
    //this.DetailService = new DetailService();
    this.state = {
      //cod_program: this.props.navigation.state.params.cod_program
        /*programImage: this.props.navigation.state.params.programName*/
    };
  }

  render() {
    return (

      <View>
        <DetailListItem/>
        <FlatList
        data={this.props.listDetail}
    renderItem={({item}) => <TouchableOpacity onPress={() => alert('teste') } ><DetailListItem Milha={item}/> </TouchableOpacity>}
        />
      </View>
    );
  };
}



export default DetailProgramContainer;