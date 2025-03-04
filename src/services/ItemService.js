import axios from "axios";
import { getToken } from "../Store";
import { authHeader } from "../utils/Generator";
import { ApiContants } from "../contants";

const getItems = async () => {
  try {
    const response = await axios.get(
      `${ApiContants.BACKEND_API.BASE_API_URL}${ApiContants.BACKEND_API.ITEM}`,
      {
        headers: authHeader(getToken()),
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getItemById = async (itemId) => {
  try {
    const response = await axios.get(
      `${ApiContants.BACKEND_API.BASE_API_URL}${ApiContants.BACKEND_API.ITEM}/${itemId}`,
      {
        headers: authHeader(getToken()),
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { getItems, getItemById };
