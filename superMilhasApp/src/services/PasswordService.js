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
    LOGIN: BASE_URL + 'resetPassword',
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
class ProgramService extends AbstractService {
  constructor() {
    super();
  }

  /**
   * Service method to get the balance of the logged user account.
   * @param {*} dateBegin
   * @param {*} dateEnd
   */
  resetPassword(emailUser) {
    let URL = RESOURCES.LOGIN;
    return this.axios
    .post(URL, {email: emailUser})
    .then(function(response){
        return true;
     })
     .catch((response) => {
       return false;
     });
      
  }
}

export default ProgramService;
