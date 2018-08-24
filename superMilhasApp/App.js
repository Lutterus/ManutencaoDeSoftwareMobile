//@flow

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppStack } from "./src/navigation/ApplicationRouter";

type State = {};

type Props = {};

console.disableYellowBox = true;

export default class App extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <AppStack />;
  }
}
