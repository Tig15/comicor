import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-virtualized-view";
import HomeSlide from "../components/HomeSlide";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataState, homedata } from "../recoil/atom";
import tailwind from "twrnc";
import HomeHead from "../components/HomeHead";
import { fetchData } from "../api/api";
import CatButton from "../components/CatButton";
import ItemsCat from "../components/ItemsCat";

const Page = () => {
  const [data, setData] = useRecoilState(dataState);
  const homebanner = useRecoilValue(homedata.homeBanner);
  const menuCat = useRecoilValue(homedata.menuCategories);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const apiData = await fetchData();
      console.log("Api Data", apiData);
      setData(apiData?.data);
    };

    fetchDataFromAPI();
  }, [setData]);

  const renderCat = ({ item }: any) => {
    return (
      <View>
        <ItemsCat data={item} />
      </View>
    );
  };

  return (
    <ScrollView style={tailwind`bg-white`}>
      <View>
        <HomeHead />
        <HomeSlide data={homebanner} />
        <View style={tailwind`flex-row gap-6 mx-18 my-4`}>
          <CatButton
            iconname={"view-grid-outline"}
            size={24}
            color={"white"}
            title={"Hello world"}
            style={tailwind`w-8 h-8 bg-red-300 rounded-full px-1 py-1`}
          />
          <CatButton
            iconname={"equalizer"}
            size={24}
            color={"white"}
            title={""}
            style={tailwind`w-8 h-8 bg-blue-300 rounded-full px-1 py-1`}
          />
          <CatButton
            iconname={"alarm"}
            size={24}
            color={"white"}
            title={""}
            style={tailwind`w-8 h-8 bg-green-300 rounded-full px-1 py-1`}
          />
          <CatButton
            iconname={"wallet-outline"}
            size={24}
            color={"white"}
            title={""}
            style={tailwind`w-8 h-8 bg-purple-300 rounded-full px-1 py-1`}
          />
        </View>
        <FlatList
          data={menuCat}
          renderItem={renderCat}
          keyExtractor={({ item }: any) => item?.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Page;
