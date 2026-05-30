import axios from "axios";

const API_URL = "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,cca3";

export const getCountries = async () => {
   const response = await axios.get(API_URL);
   return response.data;
}