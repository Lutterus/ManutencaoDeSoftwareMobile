//@flow
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import type { MilesAgency } from "../util/types";

const MilesListItem = ({ milesAgency }: MilesAgency) => {
  return (
    <View style={styles.generalView}>
      <View style={{ flex: 1/2, borderColor: 'midnightblue', borderWidth: 1, borderRadius: 10}}>
        <Image
          style={styles.image}
          borderRadius={20}
          source={{ uri: milesAgency.programa_default.imagem }}
        />
      </View>
      <View style={styles.columnView}>
        <View style={{ flex: 1}}>
          <Text style={styles.programName}> {milesAgency.nome} </Text>
        </View>
        <View style={{ flex: 1}}>
          <Text style={styles.date}>
            {milesAgency.milha_expiracao_maisProxima}500 vencem em 20/03/2018 {milesAgency.date}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 / 2, justifyContent: "center", alignItems: "center"}}>
        <Text style={styles.miles}>
          <Text style ={{fontSize: 15, color: "darkgray"}}> total: </Text>
          {milesAgency.somaMilhas}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  generalView: {
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "white",
    marginHorizontal: 10    
  },

  image: {     
    width: 64, 
    height: 64, 
    margin: 10,
    resizeMode: 'contain'
  },
  
  columnView: { 
    flexDirection: "column",
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  programName: {
    fontSize: 24,
    textAlign: 'auto',
    margin: 10,
    color: 'midnightblue',    
    fontWeight: 'bold'
  },

  date: {
    fontSize: 10,
    textAlign: 'center',
    height: 30,
    color: 'darkgray',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'midnightblue'
  },

  miles: {
    fontSize: 30,
    textAlign: 'center',
    color: 'midnightblue',
    fontWeight: 'bold'
  }
});

export default MilesListItem;
