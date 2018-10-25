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
import ProgramService from '../services/ProgramService';
import { AsyncStorage } from "react-native";
import DatePicker from 'react-native-datepicker'


type State = {
  quantidade: number,
  date: Date,
  programa: string
};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class AddProgramContainer extends React.Component<Props, State> {
  ProgramService;
  constructor(props: Props) {
    super(props);
    this.programService = new ProgramService();
    this.state = {
      quantidade: null,
      date: null,
      programa: null
    };
  }

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  componentDidMount() {
    AsyncStorage.getItem('login', (err, result) => {
    }).then(res => {
      this.addProgram(res);
    });
    
  }
  
  addProgram = async (accountLogin)  => {
    console.log("vai tentar criar usando o login: " + accountLogin)
    console.log("programa: " + this.state.programa)
    console.log("quantidade: " + this.state.quantidade)
    console.log("vencimento: " + this.state.date)
    var res = await this.programService.addProgram(this.state.programa, accountLogin, this.state.quantidade, this.state.vencimento);

    if(res===true){
      //popUp Confirmando e depois redirecionamento
      this.props.navigation.navigate("MilesList")
    }else{
      //console.warn("As credenciais estão incorretas")
    }
  };

  render() {
    return (
      <View style={{ justifyContent: "space-evenly", alignItems: "center" }}>
        <View style={{ marginTop: 55 }}>
          <CardView>
            <Picker
              selectedValue={this.state.programa}
              style={{ height: 40, width: 300 }}a
              onValueChange={(itemValue, itemIndex) => this.setState({programa: itemValue})}
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
              returnKeyType="done"
              keyboardType="numeric"
              placeholder="Quantidade"
              underlineColorAndroid={"#0000"}
              onChangeText={(TextInput) => {this.setState({quantidade: TextInput})}}
            />
          </CardView>
        </View>

        <View style={{ marginTop: 15 }}>
          <CardView style={styles.inputView}>
          <DatePicker
            style={{width: 200}}
            mode="date"
            placeholder="Vencimento"
            format="DD-MM-YYYY" 
            minDate = {new Date()}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />
              
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
            onPress={() => this.componentDidMount()}            
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
