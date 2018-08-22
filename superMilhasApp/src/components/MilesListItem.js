//@flow
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import type { MilesAgency } from "../util/types";

const MilesListItem = ({ milesAgency }: MilesAgency) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        style={{ width: 94, height: 94, marginHorizontal: 10 }}
        borderRadius={47}
        source={{ uri: milesAgency.agencyImage }}
      />
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.programName}>{milesAgency.agencyName}</Text>
        <Text style={styles.date}>{milesAgency.expirationDate}</Text>
      </View>
      <Text style={styles.miles}>{milesAgency.miles}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  programName: {},
  date: {},
  miles: {}
});

export default MilesListItem;
