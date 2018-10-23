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
import { TextInputMask } from 'react-native-masked-text';

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
      programa: ""
    };
  }

  onGoFocus() {
		// when you call getElement method, the instance of native TextInput will returned.
		this.refs['myText'].getElement().focus();
	}

  render() {
    return (
      <View style={{ justifyContent: "space-evenly", alignItems: "center" }}>
        <View style={{ marginTop: 55 }}>
          <CardView>
            <Picker
              selectedValue={this.state.programa}
              style={{ height: 40, width: 300 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ programa: itemValue })
              }
            >
              <Picker.Item label="Programa" value="programa" />
              <Picker.Item label="Smiles" value="smiles" />
              <Picker.Item label="Livelo" value="livelo" />
              <Picker.Item label="Amigo" value="amigo" />
              <Picker.Item label="Multiplus" value="multiplus" />
            </Picker>
          </CardView>
        </View>

        <View style={{ justifyContent: "space-between", marginTop: 15 }}>
          <CardView style={styles.inputView}>
            <TextInput
              returnKeyType="next"
              onSubmitEditing={this.onGoFocus.bind(this)}
              keyboardType="numeric"
              placeholder="Quantidade"
              underlineColorAndroid={"#0000"}
            />
          </CardView>
        </View>

        <View style={{ marginTop: 15 }}>
          <CardView style={styles.inputView}>
            <TextInputMask
              returnKeyLabel="go"
              ref='myText'
              placeholder="Vencimento"
              underlineColorAndroid={"#0000"}
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}/>
          </CardView>
        </View>

        <View style={{ marginTop: 100 }}>
          <CardButton
            viewStyle={{
              backgroundColor: "#1BB194",
              width: Dimensions.get("window").width * 0.4
            }}
            textStyle={{ color: "white", fontSize: 20, textAlign: "center", justifyContent: "center", alignItems: "center"}}
            text="Cadastrar"
            onPress={() => this.props.navigation.navigate("MilesList")}
          />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "black",
    textAlign: "left"
  },
  view: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  inputView: {
    borderRadius: 7,
    marginTop: 4,
    padding: 6
  },

  styleTitle: {
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").height * 0.3
  }
});

export default AddProgramContainer;
