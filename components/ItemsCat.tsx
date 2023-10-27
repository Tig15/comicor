import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ItemsCat = ({ data }: any) => {
  return (
    <View>
      <View>
        <MaterialCommunityIcons name="line" />
        <Text>{data.title}</Text>
      </View>
    </View>
  );
};

export default ItemsCat;
