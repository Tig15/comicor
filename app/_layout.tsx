import { View, Text } from "react-native";
import React from "react";
import { RecoilRoot } from "recoil";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/Colors";

const MainLayout = () => {
  return (
    <RecoilRoot>
      <StatusBar hidden />
      <Stack screenOptions={{ headerShown: false }} />
    </RecoilRoot>
  );
};

export default MainLayout;
