//@flow
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MilesListContainer from "../containers/MilesListContainer";
import { NavigationScreenProp } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import MilesService from '../services/MilesService';

type State = {};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class MilesListScreen extends React.Component<Props, State> {
  milesService;
  constructor(props: Props) {
    this.milesService = new MilesService();
    super(props);

    this.state = {
      milesList: []
    };
  }

  componentDidMount() {
    this.updateMilesList();
  }


  updateMilesList = async () => {
    const list = await this.milesService.listEntry();
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
      }}>
        <Icon
        name={'plus'}
        size={20}
        color="black" />
      </TouchableOpacity>
    )
  };

  render() {
    return <MilesListContainer navigation={this.props.navigation} />;
  }
}

export default MilesListScreen;
