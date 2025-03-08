import axios from "axios";

const fetchContinuousDirectionFromORS = async (coordinates) => {
  try {
    const body = {
      coordinates: coordinates,
    };

    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_OPENROUTESERVICE_URL}/geojson`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.EXPO_PUBLIC_OPENROUTESERVICE_API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchDirectionFromORS = async (startPoint, endPoint) => {
  try {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_OPENROUTESERVICE_URL}?api_key=${process.env.EXPO_PUBLIC_OPENROUTESERVICE_API_KEY}&start=${startPoint}&end=${endPoint}`,
      {
        headers: {
          Accept:
            "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export { fetchDirectionFromORS, fetchContinuousDirectionFromORS };
