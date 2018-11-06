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
  milesList: Array<DetailListItem>
};

type Props = {
  navigation: NavigationScreenProp<{}>,
  milesList: Array<DetailListItem>
};

class DetailProgramContainer extends React.Component<Props, State> {
  GetMileService;
  constructor(props: Props) {
    super(props);
    this.GetMileService = new GetMileService();
    this.state = {};
  }

  render() {
    return (
      <View>
        <FlatList
        data={this.props.milesList}
        renderItem={({item}) => <TouchableOpacity onPress={() => /*this.props.navigation.navigate('DetailProgram')*/ alert("Milha Clicada")} ><DetailListItem Milha={item}/></TouchableOpacity>}
        />
      </View>
    );
  };
}

export default DetailProgramContainer;