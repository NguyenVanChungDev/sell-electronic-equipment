import axiosClient from "./axiosClient";

export const laptopApi = {
  getAll(params) {
    const url = "laptops";
    return axiosClient.get(url, { params });
  },
  // get(id){
  //     // const url =
  // }
};
