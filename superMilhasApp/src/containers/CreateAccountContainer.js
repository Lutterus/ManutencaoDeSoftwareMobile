//flow
import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity
} from "react-native";
import CardView from "../components/GenericComponents/CardView";
import CardButton from "../components/GenericComponents/CardButton";
import {NavigationScreenProp} from "react-navigation";


type State = {
    email: string,
    senha: string,
    telefone: number,
  };
  
  type Props = {
    navigation: NavigationScreenProp<{}>
  };
  
  class CreateAccountContainer extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
  
      this.state = {
        email: "",
        senha: "",
        telefone: NaN
      };
    }

    render () {
        return (
            <View
            style={{
                flex: 4 / 5,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
                
                <View style={{marginTop: 20}}>
                    <Text style={styles.text}>E-mail</Text>
                        <CardView>
                            <TextInput 
                                underlineColorAndroid={"#0000"}/>
                        </CardView>
                </View>
                
                <View style={{marginTop: 20}}>
                    <Text style={styles.text}>Telefone</Text>
                        <CardView style={styles.inputView}>
                            <TextInput
                                keyboardType="phone-pad" 
                                underlineColorAndroid={"#0000"}/>
                        </CardView>
                </View>

                <View style={{marginTop: 20}}>
                    <Text style={styles.text}>Senha</Text>
                        <CardView style={styles.inputView}>
                            <TextInput 
                                underlineColorAndroid={"#0000"}/>
                        </CardView>
                </View>

                <View style={{marginTop: 20}} >
                    <Text style={styles.text}>Confirmar senha</Text>
                        <CardView style={styles.inputView}>
                            <TextInput 
                                underlineColorAndroid={"#0000"}/>
                        </CardView>
                </View>

                <View style={{marginTop: 20}}>
                    <CardButton
                        viewStyle={{
                            marginVertical: 20,
                            width: Dimensions.get("window").width * 0.5,                            
                            backgroundColor: "black"  
                        }}
                        textStyle={{fontSize: 16, color: 'white'}}
                        text='Cadastrar'
                        onPress={() => this.props.navigation.navigate("Login")}/>
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        alignSelf: 'stretch'
    },
    inputView: {
        borderRadius: 4,
        marginTop: 3,
        padding: 2
    },
    text: {
        color: "black",
        fontSize: 22,
        flexDirection: "column",
        textAlign: "left",
        alignSelf: "stretch",
        fontWeight: "bold"
    }
})

export default CreateAccountContainer;