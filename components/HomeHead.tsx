import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeHead = () => {
  return (
    <View style={tailwind`mt-2`}>
      <View style={tailwind`ml-2 flex-row justify-between`}>
        <Image
          source={require("../assets/images/dms-full-logo.png")}
          style={tailwind`w-40 h-10`}
        />
        <View style={tailwind`items-center gap-5 mr-2 flex-row`}>
          <TouchableOpacity onPress={() => console.log("Clicked Search")}>
            <MaterialCommunityIcons name="magnify" size={26} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Clicked Account")}>
            <MaterialCommunityIcons
              name="account-circle"
              size={26}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeHead;
