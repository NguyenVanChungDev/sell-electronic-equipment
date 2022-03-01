import axiosClient from "./axiosClient";

export const phoneApi = {
  getAll(params) {
    const url = "phones";
    return axiosClient.get(url, { params });
  },
  // get(id){
  //     // const url =
  // }
};
