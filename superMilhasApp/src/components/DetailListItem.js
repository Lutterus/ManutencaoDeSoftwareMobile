//@flow
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import type { MilesAgency, Milha } from "../util/types";


const DetailListItem = ({ milesAgency }: MilesAgency, {Milha}: Milha ) => {
  return (

    <View style={styles.titleView}>
      <View style={{ flex: 1/2, borderColor: "#083b66", borderWidth: 1, borderRadius: 10}}>
        <Image
          style={styles.image}
          borderRadius={20}
          source={{ uri: milesAgency.programa_default.imagem }}
        />
      </View>

      <View style={styles.rowView}>
        <View style={{ flex: 1}}>
          <Text style={styles.programName}> {milesAgency.nome} </Text>
        </View>
      </View>
    </View>

    <View style={styles.DetailItemView}>


      <View style={{ flex: 1 / 2, justifyContent: "center", alignItems: "center"}}>
        <Text style={styles.miles}>
          <Text style ={{fontSize: 15, color: "darkgray"}}> Milhas: </Text>
          {Milha.quantidade}
        </Text>
      </View>

      <View style={{ flex: 1}}>
          <Text style={styles.date}>
            vencem em: {Milha.dt_expiracao}
          </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  titleView: {
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "white",
    marginHorizontal: 10,
    borderBottonColor: "#083b66"
  },

  image: {     
    width: 64, 
    height: 64, 
    margin: 10,
    resizeMode: 'contain'
  },
  
  rowView: { 
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-between'
  },

  programName: {
    fontSize: 24,
    textAlign: 'auto',
    margin: 10,
    color: "white",    
    fontWeight: 'bold'
  },

  date: {
    fontSize: 15,
    textAlign: 'auto',
    height: 30,
    color: '#083b66',
    paddingTop: 10,
    borderTopWidth: 1,
  },

  miles: {
    fontSize: 30,
    textAlign: 'center',
    color: '#083b66',
    fontWeight: 'bold'
  },

  DetailItemView: {
    backgroundColor: 'darkgray',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: '15'
  }

});

export default DetailListItem;