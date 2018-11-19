//@flow
import React from "react";
import DetailProgramContainer from "../containers/DetailProgramContainer";
import { NavigationScreenProp, Header } from "react-navigation";
import type { MilesAgency } from "../util/types";
import DetailService from "../services/DetailService";
import DefaultProgramsService from "../services/DefaultProgramService";
import {
  AsyncStorage,
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type State = {
  milesAgency: MilesAgency
};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class DetailProgramScreen extends React.Component<Props, State> {
  DetailService;
  DefaultProgramsService;
  constructor(props: Props) {
    super(props);
    this.detailService = new DetailService();
    this.defaultProgramsService = new DefaultProgramsService();
    this.state = {
      detailList: [],
      programName: "Bird's Nest",
      programImage: "ABC"
    };
  }

  componentDidMount() { 
      AsyncStorage.getItem("login", (err, result) => {}).then(res => {
        AsyncStorage.getItem("nome_programa", (err, result) => {}).then(res2 => {
          this.updateDetailList(res, res2);
        });
      });
  };

  updateDetailList = async (currentUser, cod_program) => {
    const list = await this.detailService.getUserProgramMiles(currentUser, cod_program);
    this.setState({ detailList: list });
    const secondList = await this.defaultProgramsService.getDefaultPrograms();
    for (j in secondList) {
      if(secondList[j].nome===cod_program){
        this.setState({ programName: secondList[j].nome }); 
        this.setState({ programImage: secondList[j].imagem }); 
        console.log(this.state.programName)
        console.log(this.state.programImage)
      }
    }
  };

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View style={{ height: 110, backgroundColor: "#ffffff", flex: 0.3, justifyContent: "space-evenly" }}>
          <View style={{ flex: 1}}/>
            <TouchableOpacity onPress={() => navigation.navigate("MilesList")}>
              <Icon  name={"long-arrow-left"} size={45} color="black" style={{ left: 20, top: 10}}/>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "space-between", borderRadius:10 }}>
            <Image
              source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Gol_Smiles_logo.svg/1200px-Gol_Smiles_logo.svg.png'}}
              style={styles.image}
              borderRadius={20}
            />
            <Text style={styles.programName}>
              Livelo
            </Text>
          </View>
        </View>
      )
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

const styles = StyleSheet.create({
  programName: {
    top: 40,
    right: 15,
    fontSize: 25,
    fontWeight: "bold"
  },
  foregroundContainer: {
    width: Dimensions.get("window").width,
    height: 140,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  programImage: {
    width: 50,
    height: 50,
    marginHorizontal: 15
  },
  image: {
    width: 85,
    height: 64,
    margin: 10,
    resizeMode: "contain",
    //borderRadius: 10,
    borderWidth: 1,
    borderColor: "#083b66"
  }
});

export default DetailProgramScreen;
