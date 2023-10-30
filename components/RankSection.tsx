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

const RankSection = ({ rankData, rankItems, rankDisplay, domain }: any) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const onSnapToItem = (index: number) => {
    console.log("Index of Data", index);
    setActiveSlide(index);
  };

  const baseUrl = domain ? domain.value : null;
  const dataValue = rankDisplay ? rankDisplay.value : null;
  const rankLength = rankData ? rankData.length : null;

  const renderRankItems = ({ item }: any) => {
    const newData = item.slice(0, dataValue);

    return (
      <View>
        {newData.map((nestedItem: any, index: number) => (
          <View style={tailwind`p-1 mx-2 mb-2 flex-row items-center gap-2`}>
            <View>
              <Image
                source={{ uri: baseUrl + nestedItem.imageurl }}
                style={tailwind`w-25 h-32 rounded`}
              />
            </View>
            <View style={tailwind`w-48 ml-3`}>
              <Text
                style={tailwind`text-lg font-bold`}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {nestedItem.title}
              </Text>
              <Text
                style={tailwind`text-lg text-gray-400 `}
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
    <View style={tailwind`bg-white p-2`}>
      <View style={tailwind`flex-row justify-between`}>
        <View style={tailwind` flex-row ml-4 items-center`}>
          <View
            style={tailwind`w-1 h-[28px] bg-red-500 absolute rounded-full`}
          />
          <Text style={tailwind`text-xl ml-3  font-bold `}>
            {translate("home_ranking")}
          </Text>
        </View>
        <Pagination
          dotsLength={rankLength}
          activeDotIndex={activeSlide}
          renderDots={(activeIndex) =>
            rankData.map((item: any) => (
              <View
                style={
                  activeIndex == item.id - 1
                    ? tailwind`border-[0.5px] border-gray-300 mt-[12px] bg-gray-200`
                    : tailwind`border-[0.5px] border-gray-300 mt-[12px]`
                }
              >
                <TouchableOpacity style={tailwind`p-[6px] items-center mr-2 `}>
                  <Text style={tailwind`text-xs`}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            ))
          }
          containerStyle={tailwind`ml-2 mt-[-12px]`}
        />
      </View>
      <View style={tailwind`mt-[-16px]`}>
        <Carousel
          data={rankItems.slice(0, rankLength)}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          onSnapToItem={onSnapToItem}
          renderItem={renderRankItems}
          enableSnap={true}
          loopClonesPerSide={15}
          loop
        />
      </View>
    </View>
  );
};

export default RankSection;
