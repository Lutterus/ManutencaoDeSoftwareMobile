import axios from "axios";
import AbstractService from "./AbstractService";

/**
 * BASE URLS of the service used on Category Service.
 */
const BASE_URL = "api/";

/**
 * URLS of the service used on Category Service.
 */
const RESOURCES = {
  GET_MILES: BASE_URL + 'getMiles'
};

/**
 * Params used on services methods.
 */

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
    let URL = RESOURCES.GET_LIST;

    return this.axios
      .get(URL)
      .then((result: Response) => {
        return result.data.content;
      })
      .catch(error => {
        return error.response.data.message;
      });
  }
}

export default MilesService;
