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
  | "image"
  | "string";

interface CatProps {
  iconname: IconName;
  size: number;
  color: string;
  title: string;
}

const CatButton: React.FC<CatProps> = ({ iconname, size, color, title }) => {
  return (
    <View>
      <TouchableOpacity>
        <MaterialCommunityIcons name={iconname} size={size} color={color} />
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
};

export default CatButton;
