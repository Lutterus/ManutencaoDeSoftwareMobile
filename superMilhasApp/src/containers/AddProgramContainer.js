//@flow
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Picker,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import CardView from "../components/GenericComponents/CardView";
import CardButton from "../components/GenericComponents/CardButton";
import ProgramService from '../services/ProgramService';
import { AsyncStorage } from "react-native";
import DatePicker from 'react-native-datepicker';
import DefaultProgramsService from '../services/DefaultProgramService';


type State = {
  quantidade: number,
  date: Date,
  programa: string
};

type Props = {
  navigation: NavigationScreenProp<{}>
};

var programsList= []
class AddProgramContainer extends React.Component<Props, State> {
  ProgramService;
  DefaultProgramsService;
  constructor(props: Props) {
    super(props);
    this.programService = new ProgramService();
    this.defaultProgramsService = new DefaultProgramsService();
    this.state = {
      json:  this.componentDidMount(2),
      quantidade: 0,
      date: null,
      programa: null
    };
  }

  setProgramsDefault = async ()  => {
    const list = await this.defaultProgramsService.getDefaultPrograms();
    for (i in list) {
      programsList.push(list[i].nome)
      console.log(list[i].nome)
    } 
  }

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  componentDidMount(index) {
      AsyncStorage.getItem('login', (err, result) => {
      }).then(res => {
        if(index===1){
          this.addProgram(res);
        }else if(index===2){
          this.setProgramsDefault()
        }
      });   
  }
  
  addProgram = async (accountLogin)  => {
    if(this.state.quantidade!=0 &&
      this.state.programa!= null &&
      this.state.date!= null){
        var res = await this.programService.addProgram(this.state.programa, accountLogin, this.state.quantidade, this.state.vencimento);
        if(res===true){
          Alert.alert(
            'Sucesso',
            'Milhas adicionadas com sucesso',
            [
              {text: 'OK', onPress: () => this.props.navigation.navigate("MilesList")}
            ],
          )
          
        }else{
          Alert.alert(
            'Falha',
            'Ocorreu um erro durante o cadastro das milhas, favor verificar sua conexão com a internet',
            [
              {text: 'OK'}
            ],
          )
        }
    }else{
      Alert.alert(
        'Atenção',
        'Para cadastrar milhas, é necessário preencher todos os campos',
        [
          {text: 'OK'}
        ],
      )
    }
  };

  render() {
    return (
      <View style={{ justifyContent: "space-evenly", alignItems: "center" }}>
        <KeyboardAvoidingView behavior = "padding" style={{ marginTop: 55 }}>
          <CardView>
            <Picker
            selectedValue={this.state.programa}
            style={{ height: 40, width: 300 }}
            onValueChange={(itemValue, itemIndex) => this.setState({programa: itemValue})}
            >
            {programsList.map((itemValue, itemIndex) => {
              return (<Picker.Item label={itemValue} value={itemValue} key={itemValue}/>) 
            })}
            </Picker>
          </CardView>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView behavior = "padding" style={{ justifyContent: "space-between", marginTop: 15 }}>
          <CardView style={styles.inputView}>
            <TextInput
              returnKeyType="done"
              keyboardType="numeric"
              placeholder="Quantidade"
              underlineColorAndroid={"#0000"}
              onChangeText={(TextInput) => {this.setState({quantidade: TextInput})}}
            />
          </CardView>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView behavior = "padding" style={{ marginTop: 15 }}>
          <CardView style={styles.inputView}>
          <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="date"
            placeholder="Data de vencimento"
            format="YYYY-MM-DD"
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
        </KeyboardAvoidingView>

        <KeyboardAvoidingView behavior = "padding" style={{ marginTop: 100 }}>
          <CardButton
            viewStyle={{
              backgroundColor: "#1BB194",
              width: Dimensions.get("window").width * 0.4
            }}
            textStyle={{ color: "white", fontSize: 20, textAlign: "center", justifyContent: "center", alignItems: "center"}}
            text="Cadastrar"
            onPress={() => this.componentDidMount(1)}            
            />
        </KeyboardAvoidingView>
        
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
