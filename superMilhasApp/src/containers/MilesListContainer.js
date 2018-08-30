//@flow
import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import MilesListItem from "../components/MilesListItem";
import type { MilesAgency } from "../util/types";

type State = {
  milesAgencyList: Array<MilesAgency>
};

type Props = {
  navigation: NavigationScreenProp<{}>
};

class MilesListContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      milesAgencyList: [
        {
          agencyName: "Livelo",
          agencyImage: "https://ecommercenews.com.br/wp-content/uploads/2017/08/livelo.jpg",
          expirationDate: "12/12/2018",
          miles: "13.000"
        },
        {
          agencyName: "Smiles",
          agencyImage: "https://braziljournal.s3.amazonaws.com/media/9806-bd8b5d92-f9f4-0000-0005-4f18e6ec1d20.jpg?v=1533403088",
          expirationDate: "13/10/2018",
          miles: "15.000"
        },
        {
          agencyName: "Amigo",
          agencyImage: "http://www.milhasedestinos.com.br/wp-content/uploads/2017/12/Screenshot-2017-12-15-10.45.18.png",
          expirationDate: "25/08/2018",
          miles: "200"
        },
        {
          agencyName: "Tudo Azul",
          agencyImage: "http://blog.viajemaispagandomenos.com.br/wp-content/uploads/2017/05/transferir-seus-pontos-capa-2.jpg",
          expirationDate: "01/07/2018",
          miles: "100.000"
        },
        {
          agencyName: "Multiplus",
          agencyImage: "https://pbs.twimg.com/profile_images/900034268486914048/zH2ZfQwt_400x400.jpg",
          expirationDate: "13/09/2018",
          miles: "45.000"
        },
        {
          agencyName: "TAM",
          agencyImage: "https://i0.wp.com/embarqueprioritario.com/wp-content/uploads/2014/10/carto_1.png?resize=552%2C303",
          expirationDate: "12/09/2018",
          miles: "2.500"
        }
      ]
    };
  }

  render() {
    return (
      <View>
        <FlatList
        data={this.state.milesAgencyList}
        renderItem={({item}) => <MilesListItem milesAgency={item}/>}
        />
      </View>
    );
  }
}

export default MilesListContainer;
