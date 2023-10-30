import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeHead = () => {
  return (
    <View style={tailwind`flex-row h-7 justify-between items-center`}>
      <Image
        source={require("../assets/images/dms-full-logo.png")}
        style={tailwind`w-30 h-8 mt-[13px] ml-2`}
      />
      <View style={tailwind`flex-row h-10 items-center gap-3 mt-[14px] mr-3`}>
        <TouchableOpacity onPress={() => console.log("Clicked Search")}>
          <MaterialCommunityIcons name="magnify" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Clicked Account")}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHead;
