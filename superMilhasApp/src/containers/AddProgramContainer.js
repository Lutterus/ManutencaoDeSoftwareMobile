//@flow
import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  Image,
  Dimensions,
  Picker
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import CardView from "../components/GenericComponents/CardView";
import CardButton from "../components/GenericComponents/CardButton";
import MilesListItem from "../components/MilesListItem";


type State = {
  quantidade: number,
  vencimento: Date,
  programa: string
};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class AddProgramContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      quantidade: 0,
      vencimento: new Date(),
      programa: ''
    };
  }

  render() {
    return (
      <View>
        <Picker style={{ height: 50, width: 100 }}>

          <Picker.Item label="Java" value="java" />
        </Picker>
        <View>
          <TextInput placeholder="Quantidade"/>
        </View>
        <View>
          <TextInput placeholder="Vencimento"/>
        </View>
        <View>
          <CardButton
            text="CADASTRAR"
            onPress={() =>this.props.navigation.navigate("MilesList")}
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 16,
    flexDirection: "column",
    textAlign: "left",
    alignSelf: "stretch"
  },
  inputView: {
    borderRadius: 4,
    marginTop: 1,
    padding: 2
  },
  textStyles: {
    fontSize: 14,
    textAlign: "center"
  }
});

export default AddProgramContainer;
