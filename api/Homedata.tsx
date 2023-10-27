import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { dataState } from "../recoil/atom";

const API_URL =
  "http://ec2-43-198-243-62.ap-east-1.compute.amazonaws.com:3000/api/home";

const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const Homedata = () => {
  const [data, setData] = useRecoilState(dataState);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const apiData = await fetchData();
      console.log("Api Data", apiData);
      setData(apiData?.data);
    };

    fetchDataFromAPI();
  }, [setData]);

  return null;
};

export default Homedata;
