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
<<<<<<< HEAD
    DETAIL: BASE_URL + 'getMiles/',
=======
    PROGRAM_MILES: BASE_URL + 'getMiles/',
>>>>>>> a14846eb3edca088ea8fd7ac6700cb7832869316
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
class DetailService extends AbstractService {
  constructor() {
    super();
  }

  /**
   * Service method to get the balance of the logged user account.
   * @param {*} dateBegin
   * @param {*} dateEnd
   */

<<<<<<< HEAD
  getMiles(userId,ProgramName) {
    let URL = RESOURCES.DETAIL + userId + "/" + ProgramName; //api/getMiles/userId/cod_program
=======
  getUserProgramMiles(cod_program, user) {
    let URL = RESOURCES.PROGRAM_MILES + user + "/" + cod_programa;
>>>>>>> a14846eb3edca088ea8fd7ac6700cb7832869316
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

export default DetailService;
