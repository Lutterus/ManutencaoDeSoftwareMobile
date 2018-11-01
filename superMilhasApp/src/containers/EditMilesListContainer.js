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
  Picker,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import CardView from "../components/GenericComponents/CardView";
import CardButton from "../components/GenericComponents/CardButton";
import { TextInputMask } from 'react-native-masked-text';
import EditMilesService from '../services/EditMilesService';
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

class EditMilesContainer extends React.Component<Props, State> {
  EditMilesService;
  constructor(props: Props) {
    super(props);
    this.editMilesService = new EditMilesService();
    this.state = {
      quantidade: 0,
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
              style={{ height: 40, width: 300 }}a
              onValueChange={(itemValue, itemIndex) => this.setState({programa: itemValue})}
            >
              <Picker.Item label="Programa" value="programa" />
              <Picker.Item label="Smiles" value="smiles" />
              <Picker.Item label="Livelo" value="livelo" />
              <Picker.Item label="Azul" value="Azul" />
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
            mode="date"
            placeholder="Data de vencimento"
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
        </KeyboardAvoidingView>

        
        <KeyboardAvoidingView behavior = "padding" style={{ marginTop: 100 }}>
          <CardButton
            viewStyle={{
              backgroundColor: "#1BB194",
              width: Dimensions.get("window").width * 0.4
            }}
            textStyle={{ color: "white", fontSize: 20, textAlign: "center", justifyContent: "left", alignItems: "left"}}
            text="Salvar"
            onPress={() => this.componentDidMount()}            
            />
            <CardButton
            viewStyle={{
              backgroundColor: "#1BB194",
              width: Dimensions.get("window").width * 0.4
            }}
            textStyle={{ color: "white", fontSize: 20, textAlign: "center", justifyContent: "right", alignItems: "right"}}
            text="Excluir"
            onPress={() => this.componentDidMount()}            
            />
        </KeyboardAvoidingView>

         <KeyboardAvoidingView behavior = "padding" style={{ marginTop: 100 }}>
          <CardButton
            viewStyle={{
              backgroundColor: "#1BB194",
              width: Dimensions.get("window").width * 0.4
            }}
            textStyle={{ color: "white", fontSize: 20, textAlign: "center", justifyContent: "center", alignItems: "center"}}
            text="Cancelar"
            onPress={() => this.componentDidMount()}            
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

export default EditMilesContainer;
