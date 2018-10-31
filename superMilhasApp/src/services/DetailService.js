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
    DETAIL: BASE_URL + 'detailProgram',
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
  
  detailProgramService(programName, accountlogin, quantity, dtExpiratio) {
    let URL = RESOURCES.DETAIL;
    return this.axios
    .post(URL, {program: programName, user: accountlogin, miles: quantity, expirationDate: dtExpiratio })
    .then(function(response){
        return true;
     })
     .catch((response) => {
       return false;
     });
      
  }
}

export default DetailService;
