import axios from "axios";
import { useEffect, useState } from "react";

export const useCarsProps = () => {
  const [CarsType, SetCarsType] = useState();

  const BASE_URL = "https://autoapi.dezinfeksiyatashkent.uz/api";

  useEffect(() => {
    const Data = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/cars`);
        SetCarsType(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    Data();
  }, []);

  return { CarsType };
};
