//@flow
import React from "react";
import { View, Image, Dimensions, StyleSheet, Text } from "react-native";
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
  constructor(props: Props) {
    super(props);

    this.state = {
      DetailList: []
    };
  }

  static navigationOptions = {
    title: 'Detalhes',  
    headerTitleStyle: {
        textAlign: 'center',
        flex: 1
      }
  };

 

  componentDidMount() {
    AsyncStorage.getItem('login', (err, result) => {
    }).then(res => {
      this.updateDetailList(res);
    });
    
  }

  updateDetailList = async (currentUser,cod_program) => {
    const list = await this.DetailService.getUserProgramMiles(currentUser,cod_program);
    this.setState({ DetailList: list });
  };

  static navigationOptions= ({navigation}) => {
    return{
    title: 'Detalhes',
    headerLeft: null,
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    }
  }
  };

  render() {
    return (

    <DetailProgramContainer listDetail={this.state.DetailList}/>
    
    );
  }
}

const customHeader = ({ milesAgency }: MilesAgency) => {
  return (
    <View style={{ height: 56, marginTop: 20 }}>
      {/*LOGO*/}
      <View
        style={{
          flex: 1 / 2,
          borderColor: "midnightblue",
          borderWidth: 1,
          borderRadius: 10,
          flexDirection: "row"
        }}
      >
        <Image
          style={styles.image}
          borderRadius={20}
          source={{ uri: milesAgency.programa_default.imagem }}
        />
        <Text style={styles.programName}> {milesAgency.nome} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
    margin: 10,
    resizeMode: "contain"
  },
  programName: {
    fontSize: 24,
    textAlign: "auto",
    margin: 10,
    color: "midnightblue",
    fontWeight: "bold"
  }
});

export default DetailProgramScreen;