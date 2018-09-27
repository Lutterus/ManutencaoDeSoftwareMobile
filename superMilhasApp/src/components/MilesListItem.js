//@flow
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import type { MilesAgency } from "../util/types";

const MilesListItem = ({ milesAgency }: MilesAgency) => {
  return (
    <View style={styles.generalView}>
      <View style={{ flex: 1/3 , 
          borderColor: 'midnightblue', 
          borderWidth: 1,    
          borderRadius: 10
      }}>
        <Image
          style={styles.image}
          borderRadius={20}

          source={{ uri: milesAgency.programa_default.imagem }}
        />
      </View>
      <View style={styles.column}>
        <View style={{ flex: 3, justifyContent: "center", alignItems: "center", marginLeft: 10,
            borderColor: 'midnightblue', 
    borderWidth: 1,    
    borderRadius: 10,
    width: 150, 
    height: 45}}>
          <Text style={styles.programName}>{milesAgency.nome}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginLeft: 20 }}>
          <Text style={styles.date}>
            {milesAgency.milha_expiracao_maisProxima} 
            vencem em 
            {milesAgency.date}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 / 2, justifyContent: "center", alignItems: "center", borderColor: 'midnightblue', 
    borderWidth: 1,    
    borderRadius: 10,
    width: 50, 
    height: 50 }}>
        <Text style={styles.miles}>
          <Text style ={{fontSize: 12}}> total </Text>
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
    flex: 1
  },
  programName: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'midnightblue'
  },
  date: {
    fontSize: 10,
    textAlign: 'center',
    height: 30
  },
  miles: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default MilesListItem;
