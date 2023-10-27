import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-virtualized-view";
import HomeSlide from "../components/HomeSlide";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataState, homedata } from "../recoil/atom";
import tailwind from "twrnc";
import HomeHead from "../components/HomeHead";
import { fetchData } from "../api/api";
import CatButton from "../components/CatButton";

const Page = () => {
  const [data, setData] = useRecoilState(dataState);
  const homebanner = useRecoilValue(homedata.homeBanner);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const apiData = await fetchData();
      console.log("Api Data", apiData);
      setData(apiData?.data);
    };

    fetchDataFromAPI();
  }, [setData]);

  return (
    <ScrollView style={tailwind`bg-white`}>
      <View>
        <HomeHead />
        <HomeSlide data={homebanner} />
        <View>
          <CatButton iconname={"symbol"} size={30} color={"red"} title={""} />
          <CatButton iconname={"symbol"} size={0} color={""} title={""} />
          <CatButton iconname={"symbol"} size={0} color={""} title={""} />
          <CatButton iconname={"symbol"} size={0} color={""} title={""} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Page;
