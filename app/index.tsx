import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-virtualized-view";
import HomeSlide from "../components/HomeSlide";
import { useRecoilValue } from "recoil";
import { homedata } from "../recoil/atom";

const Page = () => {
  const homeBanner = useRecoilValue(homedata.homeBanner);
  console.log("Data", homeBanner);
  return (
    <ScrollView>
      <View>
        <HomeSlide data={homeBanner} />
      </View>
    </ScrollView>
  );
};

export default Page;
