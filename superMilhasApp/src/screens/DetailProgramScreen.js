//@flow
import React from "react";
import DetailProgramContainer from "../containers/DetailProgramContainer";
import { NavigationScreenProp } from "react-navigation";
import type { MilesAgency } from "../util/types";
import DetailService from "../services/DetailService";
import { AsyncStorage } from "react-native";

type State = {
  milesAgency: MilesAgency
};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class DetailProgramScreen extends React.Component<Props, State> {
  DetailService;
  constructor(props: Props) {
    super(props);
    this.detailService = new DetailService();
    this.state = {
      detailList: []
    };
  }

  static navigationOptions = {
    title: "Detalhes",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1
    }
  };

  componentDidMount(index) {
    AsyncStorage.getItem("login", (err, result) => {}).then(res => {
      AsyncStorage.getItem("nome_programa", (err, result) => {}).then(res2 => {
        this.updateDetailList(res, res2);
      });
    });
  }

  updateDetailList = async (currentUser, cod_program) => {
    const list = await this.detailService.getUserProgramMiles(
      currentUser,
      cod_program
    );
    this.setState({ detailList: list });
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Detalhes",
      headerLeft: null,
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    };
  };

  render() {
    return (
      <DetailProgramContainer
        listDetail={this.state.detailList}
        navigation={this.props.navigation}
      />
    );
  }
}

export default DetailProgramScreen;
