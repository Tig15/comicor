import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import tailwind from "twrnc";

const ItemsCat = ({ data }: any) => {
  return (
    <View style={tailwind`flex-row items-center justify-between`}>
      <View style={tailwind`flex-row ml-[-22px]`}>
        <AntDesign name="pause" size={40} color="red" />
        <Text style={tailwind`text-base mt-2`}>{data.title}</Text>
      </View>

      <TouchableOpacity style={tailwind`flex-row items-center`}>
        <Text style={tailwind`text-xs`}>More</Text>
        <MaterialCommunityIcons name="chevron-right" size={16} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemsCat;
