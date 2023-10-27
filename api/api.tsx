import { centralDataState } from "../recoil/atom";

const API_URL =
  "http://ec2-43-198-243-62.ap-east-1.compute.amazonaws.com:3000/api/home";

export async function fetchDataAndUpdateRecoil() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    set(centralDataState, data?.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
