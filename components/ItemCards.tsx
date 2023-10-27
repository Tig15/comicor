import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import tailwind from "twrnc";

const ItemCards = ({ data, config }: any) => {
  const renderComCards = ({ item }: any) => {
    return (
      <View>
        <Image source={{ uri: item.imageurl }} style={tailwind`w-20 h-20`} />
        <Text>{item.title}</Text>
      </View>
    );
  };

  return data ? (
    <View>
      <FlatList data={data} renderItem={renderComCards} />
    </View>
  ) : null;
};

export default ItemCards;
