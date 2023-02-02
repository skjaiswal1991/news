import axios from "axios";
import CONSTANTS from "./api.endpoints.constants.js";

class dataLayer {
  constructor() {
    this.axiosBussiness = axios.create({
      baseURL: CONSTANTS.BASE_URL_NEWS,
    });
    this.axiosBussiness.defaults.headers.post["Content-Type"] = "application/json"; // for POST
    this.axiosBussiness.defaults.headers.patch["Content-Type"] = "application/json";
    this.axiosBussiness.defaults.headers.patch["Access-Control-Allow-Origin"] = "*";
    this.axiosBussiness.defaults.headers.patch["Cache-Control"] = "public, max-age=31536000, immutable";
    this.axiosBussiness.interceptors.request.use(function (config) {

      const token = "asjdjkadahdhakdkadaksdkahds"//localStorage.getItem("AccessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.axiosAuth = axios.create({
      baseURL: CONSTANTS.BASE_URL_AUTH,
    });
    this.axiosAuth.defaults.headers.post["Content-Type"] = "application/json"; // for POST
    this.axiosAuth.defaults.headers.patch["Content-Type"] = "application/json";
    this.axiosAuth.defaults.headers.patch["Access-Control-Allow-Origin"] = "*";
    this.axiosBussiness.defaults.headers.patch["Cache-Control"] = "public, max-age=31536000, immutable";
    this.axiosAuth.interceptors.request.use(function (config) {

      const token = "asjdjkadahdhakdkadaksdkahds"//localStorage.getItem("AccessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.axiosDirectory = axios.create({
      baseURL: CONSTANTS.BASE_URL_DIRECTORY,
    });
    this.axiosAuth.defaults.headers.post["Content-Type"] = "application/json"; // for POST
    this.axiosAuth.defaults.headers.patch["Content-Type"] = "application/json";
    this.axiosAuth.defaults.headers.patch["Access-Control-Allow-Origin"] = "*";
    this.axiosAuth.interceptors.request.use(function (config) {
      //console.log("called interceptors............");
      const token = "asjdjkadahdhakdkadaksdkahds"//localStorage.getItem("AccessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  checkUserlogIn(token, bussiness) {
    const data = { token, bussiness };
    return this.axiosBussiness.post(CONSTANTS.FACEBOOK_PROCESS_DATA, data);
  }

  checkUserlogIn(token, bussiness) {
    const data = { token, bussiness };
    return this.axiosBussiness.post(CONSTANTS.FACEBOOK_PROCESS_DATA, data);
  }
  // get all News Data
  getPostData() {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .get(CONSTANTS.GET_POST_END_POINT)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
          reject(error);
        });
    });
  }
  getPostBySlug(object) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .post(CONSTANTS.GET_POST_END_POINT, object)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
          reject(error);
        });
    });
  }

  /*
  * Audio File generate
  */
  //http://localhost:3030/playaudio/delhi-high-court-dismisses-review-petition-on-appointment-of-cji
  getAudioGenerate(object) {
    console.log(object, "object");
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .post(CONSTANTS.GET_AUDIOR_END_POUNT, object)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
          reject(error);
        });
    });
  }

}

export default new dataLayer();
