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
  LOGIN: BASE_URL + "deleteMile"
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
class DeleteMilesService extends AbstractService {
  constructor() {
    super();
  }

  /**
   * Service method to get the balance of the logged user account.
   * @param {*} dateBegin
   * @param {*} dateEnd
   */
  excludeMile(cod_milha, user, program) {
    let URL = RESOURCES.LOGIN;
    return this.axios
      .post(URL, { cod_milha: cod_milha, user: user, program: program })
      .then(function(response) {
        return true;
      })
      .catch(response => {
        return false;
      });
  }
}

export default DeleteMilesService;
