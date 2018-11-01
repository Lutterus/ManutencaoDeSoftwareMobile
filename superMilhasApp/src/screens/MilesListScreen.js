//@flow
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MilesListContainer from "../containers/MilesListContainer";
import { NavigationScreenProp } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import MilesService from '../services/MilesService';
import AddProgramScreen from '../screens/AddProgramScreen';
import { AsyncStorage } from "react-native"

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
    AsyncStorage.getItem('login', (err, result) => {
    }).then(res => {
      this.updateMilesList(res);
    });
    
  }
  updateMilesList = async (currentUser) => {
    const list = await this.milesService.listMiles(currentUser);
    this.setState({ milesList: list });
  };

  static navigationOptions= ({navigation}) => {
    return{
    title: 'Milhas',
    headerLeft: null,
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
      onPress={() => navigation.navigate("EditMilesList")}
      >
        <Icon
        name={'plus'}
        size={20}
        color="black" />
      </TouchableOpacity>
    )
  }
  };

  render() {
    return <MilesListContainer milesAgencyList={this.state.milesList} />;
  }
}

export default MilesListScreen;
