import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import tailwind from "twrnc";
import { translate } from "../translate";

const ItemsCat = ({ data }: any) => {
  return (
    <View style={tailwind`flex-row items-center justify-between`}>
      <View style={tailwind`flex-row ml-[-22px]`}>
        <AntDesign name="pause" size={40} color="red" />
        <Text style={tailwind`text-base mt-2`}>{data.title}</Text>
      </View>

      <TouchableOpacity style={tailwind`flex-row items-center mt-3`}>
        <Text style={tailwind`text-xs`}>{translate("home_more")}</Text>
        <MaterialCommunityIcons name="chevron-right" size={16} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemsCat;
