import axios from "axios";
import type { Response } from "../util/types";
import AbstractService from "./AbstractService";

/**
 * BASE URLS of the service used on Category Service.
 */
const BASE_URL = "api/";

/**
 * URLS of the service used on Category Service.
 */
const RESOURCES = {
  LOGIN: BASE_URL + "getMile/"
};

/**
 * Params used on services methods.
 */
const PARAMS = {
  SID: "sid"
};

/**
 * Class containing the http requests related to
 * category service.
 */
class GetMileService extends AbstractService {
  constructor() {
    super();
  }

  /**
   * Service method to get the balance of the logged user account.
   * @param {*} dateBegin
   * @param {*} dateEnd
   */
  getMile(cod_milha, user) {
    let URL = RESOURCES.LOGIN + user + "/" + cod_milha;
    return this.axios
      .get(URL)
      .then((response: Response) => {
        return response.data;
      })
      .catch((error: Response) => {
        return error.messages;
      });
  }
}

export default GetMileService;
