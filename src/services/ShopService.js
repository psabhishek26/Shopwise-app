
import axios from "axios";
import { ApiContants } from "../contants";
import { authHeader } from "../utils/Generator";
import { getToken } from "../Store";

const getShops = async () => {
  try {
    const response = await axios.get(
      `${ApiContants.BACKEND_API.BASE_API_URL}${ApiContants.BACKEND_API.SHOP}`,
      {
        headers: authHeader(getToken()),
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getShopById = async (shopId) => {
  try {
    const response = await axios.get(
      `${ApiContants.BACKEND_API.BASE_API_URL}${ApiContants.BACKEND_API.SHOP}/${shopId}`,
      {
        headers: authHeader(getToken()),
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  getShops,
  getShopById,
};
