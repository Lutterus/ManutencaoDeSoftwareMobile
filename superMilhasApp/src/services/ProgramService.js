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
    LOGIN: BASE_URL + 'addMile',
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
class LoginService extends AbstractService {
  constructor() {
    super();
  }

  /**
   * Service method to get the balance of the logged user account.
   * @param {*} dateBegin
   * @param {*} dateEnd
   */
  addProgram(programName, accountLogin, quantity, dtExpiratio) {
    let URL = RESOURCES.LOGIN;
    console.log("entrou pra enviar")
    return this.axios
    .post(URL, {program: programName, user: accountLogin, miles: quantity, expirationDate: dtExpiratio })
    .then(function(response){
        console.log("FOIIIIIIIIIIII")
        return true;
     })
     .catch((response) => {
         console.log("NAO FOIIIIIIIIIII")
       return false;
     });
      
  }
}

export default LoginService;
