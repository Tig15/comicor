import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import tailwind from "twrnc";

const ItemCards = ({
  data,
  domain,
  typeOne,
  cardStyles,
  imageCard,
  cardNumColumns,
}: any) => {
  const baseUrl = domain ? domain.value : null;
  const value = typeOne ? typeOne.value : null;

  const renderComCards = ({ item }: any) => {
    return (
      <View style={tailwind`${cardStyles}`}>
        <View>
          <View style={tailwind`p-2`}>
            <Image
              source={{ uri: baseUrl + item.imageurl }}
              style={tailwind`${imageCard}`}
            />
          </View>
          <View style={tailwind`items-center`}>
            <Text
              style={tailwind`font-bold text-base ml-1 text-center max-w-xs`}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.title}
            </Text>
            <Text
              style={tailwind` text-base text-gray-400 ml-1 max-w-xs`}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.pagedescription}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return data ? (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={tailwind`mb-5 `}
    >
      <FlatList
        data={data?.slice(0, value)}
        renderItem={renderComCards}
        numColumns={cardNumColumns}
        columnWrapperStyle={tailwind`gap-1`}
      />
    </ScrollView>
  ) : null;
};

export default ItemCards;
