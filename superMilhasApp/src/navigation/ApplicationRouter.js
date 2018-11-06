//flow
import React from "react";
import { createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import MilesListScreen from "../screens/MilesListScreen";
import AddProgramScreen from "../screens/AddProgramScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import PasswordScreen from "../screens/PasswordScreen";
import DetailProgramScreen from "../screens/DetailProgramScreen";
import EditMilesListScreen from "../screens/EditMilesListScreen";

export const AppStack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  MilesList: {
    screen: MilesListScreen
  },
  AddProgram: {
    screen: AddProgramScreen
  },
  CreateAccount: {
    screen: CreateAccountScreen
  },
  Password: {
    screen: PasswordScreen
  },
  DetailProgram: {
    screen : DetailProgramScreen
  },
  EditMilesList: {
    screen: EditMilesListScreen
  }
});
