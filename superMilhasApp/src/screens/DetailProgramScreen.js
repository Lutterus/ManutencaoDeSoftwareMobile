//@flow
import React from "react";
import { View, Image, Dimensions, StyleSheet, Text } from "react-native";
import DetailProgramContainer from "../containers/DetailProgramContainer";
import { NavigationScreenProp } from "react-navigation";
import type { MilesAgency } from "../util/types";
import DetailService from "../services/DetailService";

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

  updateMilesList = async (currentUser) => {
    const list = await this.milesService.listMiles(currentUser);
    this.setState({ milesList: list });
  };

  render() {
    return (
    customHeader(milesAgency),
    <DetailProgramContainer navigation={this.props.navigation} />
    
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