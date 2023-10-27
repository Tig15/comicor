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
import { translate } from "../translate";
import ItemCards from "../components/ItemCards";

const Page = () => {
  const [data, setData] = useRecoilState(dataState);
  const homebanner = useRecoilValue(homedata.homeBanner);
  const menuCat = useRecoilValue(homedata.menuCategories);
  const menuCatItem = useRecoilValue(homedata.menuCategoriesItem);
  const configData = useRecoilValue(homedata.config);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const apiData = await fetchData();
      console.log("Api Data", apiData);
      setData(apiData?.data);
    };

    fetchDataFromAPI();
  }, [setData]);

  const renderCat = ({ item }: any) => {
    const index = item?.id;

    if (index >= 0 && index < menuCatItem.length) {
      const categoryData = menuCatItem[index];

      return (
        <View>
          <ItemsCat data={item} />
          <ItemCards data={categoryData} config={configData} />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <ScrollView style={tailwind`bg-white`}>
      <View>
        <HomeHead />
        <HomeSlide data={homebanner} />
        <View style={tailwind`flex-row gap-10 mx-17 my-4`}>
          <CatButton
            iconname={"view-grid-outline"}
            size={24}
            color={"white"}
            title={translate("home_category")}
            style={tailwind`w-8 h-8 bg-red-300 rounded-full px-1 py-1`}
          />
          <CatButton
            iconname={"equalizer"}
            size={24}
            color={"white"}
            title={translate("home_ranking")}
            style={tailwind`w-8 h-8 bg-blue-300 rounded-full px-1 py-1`}
          />
          <CatButton
            iconname={"alarm"}
            size={24}
            color={"white"}
            title={translate("home_latest")}
            style={tailwind`w-8 h-8 bg-green-300 rounded-full px-1 py-1`}
          />
          <CatButton
            iconname={"wallet-outline"}
            size={24}
            color={"white"}
            title={translate("home_history")}
            style={tailwind`w-8 h-8 bg-purple-300 rounded-full px-1 py-1`}
          />
        </View>
        <FlatList data={menuCat} renderItem={renderCat} />
      </View>
    </ScrollView>
  );
};

export default Page;
