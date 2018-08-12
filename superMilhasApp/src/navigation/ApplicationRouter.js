//flow

import React from "react";
import { createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import MilesListScreen from "../screens/MilesListScreen";

export const AppStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    MilesList: {
      screen: MilesListScreen
    }
  }
);
