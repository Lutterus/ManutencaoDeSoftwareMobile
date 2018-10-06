//@flow
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
import { NavigationScreenProp} from "react-navigation";
import CreateAccountContainer from "../containers/CreateAccountContainer";

type State = {};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class CreateAccountScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = {
    title: 'Cadastro',  
    headerTitleStyle: {
        fontSize: 22,
        color: "#083b66",
        textAlign: 'left',
        flex: 2
      },
    test: (
        <View style={{width: 250, height: 2}}></View>
    ) 
  };

  render () {
      return <CreateAccountContainer navigation={this.props.navigation} />;
  }
}

export default CreateAccountScreen;