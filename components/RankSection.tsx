import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import tailwind from "twrnc";
import { translate } from "../translate";
import { ScrollView } from "react-native-virtualized-view";

const RankSection = ({ data, items, rankDisplay, domain }: any) => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const baseUrl = domain ? domain.value : null;
  const dataValue = rankDisplay ? rankDisplay.value : null;
  const rankLength = data?.length;

  const renderRank = ({ item, index }: any) => {
    const onPressCategory = () => {
      setSelectedCategory(index);
    };

    return (
      <TouchableOpacity
        style={[
          tailwind`p-1 mx-2 mr-2 border border-black rounded`,
          selectedCategory === index && tailwind`bg-blue-500`,
        ]}
        onPress={onPressCategory}
      >
        <Text style={tailwind`text-xs`}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderRankItems = ({ item }: any) => {
    const selectedItem =
      selectedCategory !== null ? item[selectedCategory] : [];

    const mainData = Array.isArray(selectedItem)
      ? selectedItem
      : [selectedItem];

    return (
      <View>
        {mainData.slice(0, dataValue).map((nestedItem: any, index: number) => (
          <View
            style={tailwind`p-2 mx-2 mt-2 mb-2 flex-row items-center gap-2`}
          >
            <View>
              <Image
                source={{ uri: baseUrl + nestedItem.imageurl }}
                style={tailwind`w-30 h-40 rounded`}
              />
            </View>
            <View style={tailwind`w-40`}>
              <Text
                style={tailwind`text-base font-bold`}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {nestedItem.title}
              </Text>
              <Text
                style={tailwind`text-sm text-gray-400 `}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {nestedItem.pagedescription}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View>
      <View style={tailwind`flex-row justify-between`}>
        <View style={tailwind`mt-3 flex-row ml-[-22px]`}>
          <AntDesign name="pause" size={40} color="red" />
          <Text style={tailwind`text-base mt-2`}>
            {translate("home_ranking")}
          </Text>
        </View>
        <View style={tailwind`mt-8`}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            renderItem={renderRank}
          />
        </View>
      </View>
      <ScrollView horizontal>
        <FlatList
          data={items.slice(0, rankLength)}
          renderItem={renderRankItems}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default RankSection;
