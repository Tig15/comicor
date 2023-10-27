import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tailwind from "twrnc";

interface CatProps {
  iconname: string;
  size: number;
  color: string;
  title: string;
  style: ViewStyle;
}

const CatButton: React.FC<CatProps> = ({
  iconname,
  size,
  color,
  title,
  style,
}) => {
  return (
    <View style={tailwind`gap-1 `}>
      <TouchableOpacity style={style}>
        <MaterialCommunityIcons name={iconname} size={size} color={color} />
      </TouchableOpacity>
      <Text style={tailwind`w-16 font-semibold text-xs ml-[-12px]`}>
        {title}
      </Text>
    </View>
  );
};

export default CatButton;
