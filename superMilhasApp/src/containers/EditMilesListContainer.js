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
import EditMilesService from '../services/EditMilesService';
import ExcludeMilesService from '../services/DeleteMilesService';
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
  ExcludeMilesService;
  constructor(props: Props) {
    super(props);
    this.editMilesService = new EditMilesService();
    this.excludeMilesService = new ExcludeMilesService();
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

  componentDidMount(index) {
    AsyncStorage.getItem('login', (err, result) => {
    }).then(res => {
      if(index===1){
        this.editMile(res);
      }else if(index===2){
        this.excludeMile(res);
      }else if(index===3){
        this.props.navigation.navigate("MilesList")
      }
      
    });
  };

  excludeMile = async (accountLogin)  => {
    var res = await this.excludeMilesService.excludeMile("aaaa", accountLogin);
    if(res===true){
      Alert.alert(
        'Sucesso',
        'Milhas excluídas com sucesso',
        [
          {text: 'OK', onPress: () => this.props.navigation.navigate("MilesList")}
        ],
      )
      
    }else{
      Alert.alert(
        'Falha',
        'Ocorreu um erro durante a exclusão das milhas, favor verificar sua conexão com a internet',
        [
          {text: 'OK'}
        ],
      )
    }
  };
  
  editMile = async (accountLogin)  => {
    if(this.state.quantidade!=0 &&
      this.state.programa!= null &&
      this.state.date!= null){
        var res = await this.editMilesService.editMile(null, accountLogin, this.state.quantidade, this.state.vencimento);
        if(res===true){
          Alert.alert(
            'Sucesso',
            'Milhas editadas com sucesso',
            [
              {text: 'OK', onPress: () => this.props.navigation.navigate("MilesList")}
            ],
          )
          
        }else{
          Alert.alert(
            'Falha',
            'Ocorreu um erro durante a edição das milhas, favor verificar sua conexão com a internet',
            [
              {text: 'OK'}
            ],
          )
        }
    }else{
      Alert.alert(
        'Atenção',
        'Para editar milhas, é necessário que todos os campos estejam preenchidos',
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
            date={this.state.date}
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

        
        <View style={{ marginTop: 20}}>
          <CardButton
            viewStyle={{
              backgroundColor: "#1BB194",
              width: Dimensions.get("window").width * 0.4,
              marginBottom: 30,
              marginRight: 0
            }}
            textStyle={{ color: "white", fontSize: 20,
            textAlign: 'center', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start'}}
            text="Salvar"
            onPress={() => this.componentDidMount(1)}            
            />
            <CardButton
            viewStyle={{
              backgroundColor: "#1BB194",
              width: Dimensions.get("window").width * 0.4,
              marginBottom: 30,
              padding: 10
            }}
            textStyle={{ color: "white", fontSize: 20, 
            textAlign: 'center', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start'}}
            text="Cancelar"
            onPress={() => this.componentDidMount(3)}           
            />
            <CardButton
            viewStyle={{
              backgroundColor: "#ff0000",
              width: Dimensions.get("window").width * 0.4,
              marginBottom: 10,
              padding: 10
            }}
            textStyle={{ color: "white", fontSize: 20,
            textAlign: 'center', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start'}}
            text="Excluir"
            onPress={() => this.componentDidMount(2)}           
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

export default EditMilesContainer;
