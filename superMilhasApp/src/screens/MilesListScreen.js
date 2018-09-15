//@flow
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MilesListContainer from "../containers/MilesListContainer";
import { NavigationScreenProp } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import MilesService from '../services/MilesService';

type State = {};

type Props = {};

class MilesListScreen extends React.Component<Props, State> {
  milesService;
  constructor(props: Props) {
    super(props);
    this.milesService = new MilesService();
    this.state = {
      milesList: []
    };
  }

  componentDidMount() {
    this.updateMilesList();
  }

  updateMilesList = async () => {
    const list = await this.milesService.listMiles();
    this.setState({ milesList: list });
  };

  static navigationOptions = {
    title: 'Milhas',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    },
    headerRight:(
      <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        marginLeft: 10
      }}
      onPress={() => this.props.navigation.navigate("MileAddItem")}
      >
        <Icon
        name={'plus'}
        size={20}
        color="black" />
      </TouchableOpacity>
    )
  };

  render() {
    return <MilesListContainer milesAgencyList={this.state.milesList} />;
  }
}

export default MilesListScreen;
