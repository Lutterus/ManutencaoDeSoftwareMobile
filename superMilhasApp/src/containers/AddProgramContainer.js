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
      <View style={{ justifyContent: 'space-evenly', alignItems: 'center'}}>
        
        <View style={{marginTop: 55 }}>
            <CardView>
            <Picker 
              selectedValue={this.state.programa} 
              style={{ height: 50, width: 300,}}
              onValueChange={(itemValue, itemIndex) => this.setState({programa: itemValue})}>
            <Picker.Item label="Programa" value="programa" />
            <Picker.Item label="Smiles" value="smiles" />
            <Picker.Item label="Livelo" value="livelo" />
            <Picker.Item label="Amigo" value="amigo" />
            <Picker.Item label="Multiplus" value="multiplus" />
            </Picker>
            </CardView>
        </View>

        <View style={{justifyContent: 'space-between', marginTop: 15}}>
          <CardView style={styles.inputView}>
            <TextInput 
              keyboardType = 'numeric'
              placeholder="Quantidade" 
              underlineColorAndroid={"#0000"}/>
          </CardView>
        </View>

        <View style={{marginTop: 15}}>
          <CardView style={styles.inputView}>
          <TextInput 
            placeholder="Vencimento"
            underlineColorAndroid={"#0000"}/>
          </CardView>
        </View>

        <View style={{marginTop: 150}}>
          <CardButton
            viewStyle={{backgroundColor: "black"}}
            textStyle={{color: "white"}}
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
  }

});

export default AddProgramContainer;
