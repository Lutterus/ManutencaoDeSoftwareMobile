//@flow
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import type { Milha } from "../util/types";

const DetailListItem = ({milha}: Milha ) => {


  return (
    <View style={{flex: 1, flexDirection:'row', alignItems: "center",paddingTop: 10}}>
      <View style={{ flex: 1, alignItems: "center",backgroundColor: "#083b66",paddingTop: 14}}>
        <Text style={styles.miles}>
          {milha.quantidade}
        </Text>
      </View>

      <View style={{ flex: 1, alignItems:"center",paddingTop:14,backgroundColor:"lightgray",}}>
          <Text style={styles.expiration}>
           {milha.dt_expiracao}
          </Text>
      </View>
      <View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  miles: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    alignItems:"center",
    paddingBottom: 5
  },
  expiration: {
    fontSize: 25,
    color: '#083b66',
    fontWeight: 'bold',
    alignItems:"center",
    paddingBottom: 5
  }

});

export default DetailListItem;