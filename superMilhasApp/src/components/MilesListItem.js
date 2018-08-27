//@flow
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import type { MilesAgency } from "../util/types";

const MilesListItem = ({ milesAgency }: MilesAgency) => {
  return (
    <View style={styles.generalView}>
      <View style={{ flex: 1 / 2 }}>
        <Image
          style={styles.image}
          borderRadius={12}
          source={{ uri: milesAgency.agencyImage }}
        />
      </View>
      <View style={styles.column}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.programName}>{milesAgency.agencyName}</Text>
          <Text style={styles.date}>{milesAgency.expirationDate}</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.miles}>{milesAgency.miles}</Text>
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
    margin: 10 
  },
  columnView: { 
    flexDirection: "column",
     flex: 1 
  },
  programName: {
    fontSize: 24
  },
  date: {},
  miles: {
    fontSize: 30
  }
});

export default MilesListItem;
