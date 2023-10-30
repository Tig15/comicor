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
      cardStyles = "w-52 h-75";
      cardNumColumns = 10;
      imageCard = "w-45 h-60 rounded-md ";
    } else {
      cardStyles = "w-50";
      imageCard = "w-45 aspect-1 rounded-md ";
    }

    if (index >= 0 && index < menuCatItem.length) {
      const categoryData = menuCatItem[index];

      return (
        <View>
          <ItemsCat data={item} />
          <ItemCards
            data={categoryData}
            domain={domainConfigs}
            typeOne={type1Data}
            cardStyles={cardStyles}
            cardNumColumns={cardNumColumns}
            imageCard={imageCard}
          />
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

        <View style={tailwind`bg-gray-400`}>
          <View style={tailwind`bg-white mt-2`}>
            <FlatList
              data={menuCat}
              renderItem={renderCat}
              style={tailwind`bg-gray`}
            />
          </View>
        </View>

        <View style={tailwind`bg-gray-400`}>
          <View style={tailwind`bg-white mt-2`}>
            <RankSection
              data={rankCat}
              items={rankCatItem}
              rankDisplay={rankData}
              domain={domainConfigs}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Page;
