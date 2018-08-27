import axios from "axios";
import config from "../config";

export default class AbstractService {
  axios;

  constructor() {
    this.axios = axios.create({
      baseURL: "http://192.168.43.101:3000/"
    });
  }
}
