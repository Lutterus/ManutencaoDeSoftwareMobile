//@flow
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import type { MilesAgency } from "../util/types";

const MilesListItem = ({ milesAgency }: MilesAgency) => {
  return (
    <View style={styles.generalView}>
      <View style={{ flex: 0.7, borderColor: "#083b66", borderWidth: 1, borderRadius: 10}}>
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
            {milesAgency.milha_expiracao_maisProxima.quantidade} vencem em {milesAgency.milha_expiracao_maisProxima.dt_expiracao}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={styles.miles}>
          <Text style ={{fontSize: 14, color: "darkgray"}}> total: </Text>
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
    color: "#083b66",    
    fontWeight: 'bold'
  },

  date: {
    fontSize: 10,
    textAlign: 'center',
    height: 30,
    color: 'darkgray',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#083b66"
  },

  miles: {
    fontSize: 30,
    textAlign: 'center',
    color: "#083b66",
    fontWeight: 'bold'
  }
});

export default MilesListItem;
