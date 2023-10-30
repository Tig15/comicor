import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import tailwind from "twrnc";
import { translate } from "../translate";

const ItemsCat = ({ data }: any) => {
  return (
    <View style={tailwind`flex-row items-center justify-between`}>
      <View style={tailwind`flex-row ml-1 items-center`}>
        <View style={tailwind`w-1 h-[28px] bg-red-500 absolute rounded-full`} />
        <Text style={tailwind`text-xl font-bold ml-3`}>{data.title}</Text>
      </View>

      <TouchableOpacity
        style={tailwind`flex-row items-center justify-center gap-1 mr-2 `}
      >
        <Text style={tailwind`text-lg font-bold text-gray-400 `}>
          {translate("home_more")}
        </Text>
        <Entypo name="chevron-thin-right" size={14} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemsCat;
