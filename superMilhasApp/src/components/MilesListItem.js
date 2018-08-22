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
      <Text>{milesAgency.agencyName}</Text>
      <Text>{milesAgency.expirationDate}</Text>
    </View>
  );
};

export default MilesListItem;
