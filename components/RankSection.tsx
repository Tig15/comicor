import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import tailwind from "twrnc";
import { translate } from "../translate";
import { ScrollView } from "react-native-virtualized-view";
import Carousel, { Pagination } from "react-native-snap-carousel";

const screenWidth = Dimensions.get("window").width;

const RankSection = ({ data, items, rankDisplay, domain }: any) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const onSnapToItem = (index: number) => {
    setActiveSlide(index);
  };

  const baseUrl = domain ? domain.value : null;
  const dataValue = rankDisplay ? rankDisplay.value : null;
  const rankLength = data?.length;

  const renderRankItems = ({ item }: any) => {
    const newData = item.slice(0, dataValue);

    return (
      <View>
        {newData.map((nestedItem: any, index: number) => (
          <View style={tailwind`p-1 mx-2  mb-2 flex-row items-center gap-2`}>
            <View>
              <Image
                source={{ uri: baseUrl + nestedItem.imageurl }}
                style={tailwind`w-30 h-40 rounded`}
              />
            </View>
            <View style={tailwind`w-60`}>
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
        <View style={tailwind` flex-row ml-[-22px]`}>
          <AntDesign name="pause" size={40} color="red" />
          <Text style={tailwind`text-base mt-2`}>
            {translate("home_ranking")}
          </Text>
        </View>
        <Pagination
          dotsLength={rankLength}
          activeDotIndex={activeSlide}
          renderDots={(activeIndex) =>
            data.map((item: any) => (
              <TouchableOpacity
                style={tailwind`p-1 mx-1 mr-2 border border-black rounded`}
              >
                <Text style={tailwind`text-xs`}>{item.title}</Text>
              </TouchableOpacity>
            ))
          }
          containerStyle={tailwind`ml-2 mt-[-12px]`}
        />
      </View>
      <Carousel
        data={items.slice(0, rankLength)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={onSnapToItem}
        renderItem={renderRankItems}
        loop
      />
    </View>
  );
};

export default RankSection;
