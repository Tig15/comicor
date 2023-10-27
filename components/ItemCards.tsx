import { View, Text, FlatList } from "react-native";
import React from "react";
import tailwind from "twrnc";

const ItemCards = ({ data }: any) => {
  return data ? (
    <View>
      <Text>{data}</Text>
    </View>
  ) : null;
};

export default ItemCards;
