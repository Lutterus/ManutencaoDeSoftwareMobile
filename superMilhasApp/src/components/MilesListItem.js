//@flow
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import type { MilesAgency } from "../util/types";

const MilesListItem = ({ milesAgency }: MilesAgency) => {
  return (
    <View style={{ flexDirection: "row", borderRadius: 10, marginTop: 10, backgroundColor: "white", marginHorizontal: 10 }}>
      <View style={{ flex: 1/2 }}>
        <Image style={{ width: 64, height: 64, margin: 10 }}
          borderRadius={12}
          source={{ uri: milesAgency.agencyImage }}
        />
      </View>
      <View style={{ flexDirection: "column", flex: 1 }} >
        <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.programName}>{milesAgency.agencyName}</Text>
          <Text style={styles.date}>{milesAgency.expirationDate}</Text>
        </View>
      </View>
      <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.miles}>{milesAgency.miles}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  programName: {
    fontSize: 24
  },
  date: {},
  miles: {
    fontSize: 30
  }
});

export default MilesListItem;
