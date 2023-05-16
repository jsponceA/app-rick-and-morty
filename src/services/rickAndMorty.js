import { instanceAxiosRM } from "../plugins/axios";

const getLocationById = async (id) => {
  const { data } = await instanceAxiosRM.get(`/api/location/${id}`);
  return data;
};

const getLocations = async (params = "") => {
  const { data } = await instanceAxiosRM.get(`/api/location/${params}`);
  return data;
};

const getResidents = async (params = "") => {
  const { data } = await instanceAxiosRM.get(`/api/character/${params}`);
  return data;
};

export { getLocationById, getLocations, getResidents };
