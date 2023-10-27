import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import tailwind from "twrnc";

const ItemCards = ({ data, domain, typeOne }: any) => {
  const baseUrl = domain ? domain.value : null;
  const value = typeOne ? typeOne.value : null;

  const renderComCards = ({ item }: any) => {
    return (
      <View style={tailwind`w-1/5 p-2`}>
        <Image
          source={{ uri: baseUrl + item.imageurl }}
          style={tailwind`w-20 h-20 rounded-md`}
        />
        <Text
          style={tailwind`text-bold text-lg mt-2 text-center`}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.title}
        </Text>
        <Text
          style={tailwind`mt-2 text-sm text-gray-500`}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {item.pagedescription}
        </Text>
      </View>
    );
  };

  return data ? (
    <View style={tailwind`flex-row flex-wrap`}>
      <FlatList
        data={data?.slice(0, value)}
        renderItem={renderComCards}
        numColumns={5}
      />
    </View>
  ) : null;
};

export default ItemCards;
