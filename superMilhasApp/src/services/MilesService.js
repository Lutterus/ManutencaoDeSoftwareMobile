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
  MILES_LIST: BASE_URL + 'getPrograms/',
  PROGRAMS_LIST: BASE_URL + 'getProgramsDefault/'
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
  listMiles(currentUser) {
    let URL = RESOURCES.MILES_LIST+currentUser;
    return this.axios
      .get(URL)
      .then((response: Response) => {
        return response.data;
      })
      .catch((error: Response) => {
        return error.messages;
      });
  }

  listPrograms() {
    let URL = RESOURCES.PROGRAMS_LIST;

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

export default MilesService;
