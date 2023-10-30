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
import RankSection from "../components/RankSection";
import { SafeAreaView } from "react-native-safe-area-context";

type ConfigItem = {
  config_key: string;
};

const Page = () => {
  const [data, setData] = useRecoilState(dataState);
  const homebanner = useRecoilValue(homedata.homeBanner);
  const menuCat = useRecoilValue(homedata.menuCategories);
  const menuCatItem = useRecoilValue(homedata.menuCategoriesItem);
  const configData: ConfigItem[] = useRecoilValue(homedata.config);
  const rankCat = useRecoilValue(homedata.rankCategories);
  const rankCatItem = useRecoilValue(homedata.menuCategoriesItem);

  const domainConfigs = configData?.find(
    (item) => item.config_key === "Domain"
  );

  const type1Data = configData?.find(
    (item) => item.config_key === "HomeMenuType1DisplayData"
  );

  const type2Data = configData?.find(
    (item) => item.config_key === "HomeMenuType2DisplayData"
  );

  const rankData = configData?.find(
    (item) => item.config_key === "HomeMenuRankDisplayData"
  );

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const apiData = await fetchData();
      console.log("Api Data", apiData);
      setData(apiData?.data);
    };

    fetchDataFromAPI();
  }, [setData]);

  const renderCat = ({ item }: any) => {
    const index = item?.id - 1;
    let cardStyles = "";
    let imageCard = "";

    let cardNumColumns = 5;

    if (index >= 3) {
      cardStyles = "w-30 ml-[-6px] h-auto ";
      cardNumColumns = 10;
      imageCard = "w-full h-38 rounded-md";
    } else {
      cardStyles = "w-40 ml-[-6px] mb-1";
      imageCard = "w-full aspect-1.2 rounded-md";
    }

    if (index >= 0 && index < menuCatItem.length) {
      const categoryData = menuCatItem[index];

      return (
        <View
          style={tailwind`bg-white py-[1.325rem] p-[12px] border-y border-gray-500 border-t-0 mb-4`}
        >
          <ItemsCat data={item} />

          <View style={tailwind`mt-2`}>
            <ItemCards
              data={categoryData}
              domain={domainConfigs}
              typeOne={type1Data}
              cardStyles={cardStyles}
              cardNumColumns={cardNumColumns}
              imageCard={imageCard}
            />
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={tailwind`bg-white`}>
        <HomeHead />
        <HomeSlide data={homebanner} />
        <View style={tailwind`flex-row gap-10 mx-17 my-4`}>
          <CatButton
            iconname={"view-grid-outline"}
            size={26}
            color={"white"}
            title={translate("home_category")}
            style={tailwind`w-9 h-9 bg-yellow-300 rounded-full px-[5px] py-[5px]`}
          />
          <CatButton
            iconname={"equalizer"}
            size={26}
            color={"white"}
            title={translate("home_ranking")}
            style={tailwind`w-9 h-9 bg-blue-300 rounded-full px-[5px] py-[5px]`}
          />
          <CatButton
            iconname={"alarm"}
            size={26}
            color={"white"}
            title={translate("home_latest")}
            style={tailwind`w-9 h-9 bg-red-300 rounded-full px-[5px] py-[5px]`}
          />
          <CatButton
            iconname={"wallet-outline"}
            size={26}
            color={"white"}
            title={translate("home_history")}
            style={tailwind`w-9 h-9 bg-purple-300 rounded-full px-[5px] py-[5px]`}
          />
        </View>
        <View style={tailwind`bg-gray-100`}>
          <FlatList data={menuCat} renderItem={renderCat} />

          <RankSection
            rankData={rankCat}
            rankItems={rankCatItem}
            rankDisplay={rankData}
            domain={domainConfigs}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
