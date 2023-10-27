import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import tailwind from "twrnc";

const screenWidth = Dimensions.get("screen").width;

const HomeSlide = ({ data }: any) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    console.log("Data inside slide", data);
  }, [data]);

  const renderCarouselItem = ({ item, index }: any) => {
    return (
      <View style={tailwind`w-full h-45 bg-white rounded-lg shadow-md`}>
        <Image
          source={{ uri: item?.coverurl }}
          style={[tailwind`w-full h-full`, { objectFit: "cover" }]}
        />
      </View>
    );
  };

  const onSnapToItem = (index: number) => {
    setActiveSlide(index);
  };

  return data ? (
    <View style={tailwind`mt-2`}>
      <View style={tailwind`mt-2 bg-gray-100`}>
        <Carousel
          data={data}
          renderItem={renderCarouselItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth * 1.1}
          onSnapToItem={onSnapToItem}
        />
        <Pagination
          dotsLength={data?.length}
          activeDotIndex={activeSlide}
          containerStyle={tailwind`mt-1 absolute bottom-[-23px] left-[25%]`}
          dotStyle={tailwind`w-6 h-3 bg-red-500 rounded-lg`}
          inactiveDotStyle={tailwind`w-4 h-4 bg-slate-900 rounded-full`}
        />
      </View>
    </View>
  ) : null;
};

export default HomeSlide;
