import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type IconName =
  | "symbol"
  | "function"
  | "key"
  | "head"
  | "link"
  | "email"
  | "image";

interface CatProps {
  iconname: IconName;
  size: number;
  color: string;
  tileStyle: string;
}

const CatButton: React.FC<CatProps> = ({
  iconname,
  size,
  color,
  tileStyle,
}) => {
  return (
    <TouchableOpacity>
      <View style={tileStyle}>
        <MaterialCommunityIcons name={iconname} size={size} color={color} />
      </View>
    </TouchableOpacity>
  );
};

export default CatButton;
