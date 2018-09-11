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
  MILES_LIST: BASE_URL + 'getMiles'
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
class MilesService extends AbstractService {
  constructor() {
    super();
  }

  /**
   * Service method to get the balance of the logged user account.
   * @param {*} dateBegin
   * @param {*} dateEnd
   */
  listMiles() {
    let URL = RESOURCES.MILES_LIST;
    return this.axios
      .get(URL)
      .then((result: Response) => {
        if (result.data.success) {
          return result.data.content;
        }
      })
      .catch((error: Response) => {
        return error.messages;
      });
  }
}

export default MilesService;
