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
    LOGIN: BASE_URL + 'editMile',
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
class EditMilesService extends AbstractService {
  constructor() {
    super();
  }

  /**
   * Service method to get the balance of the logged user account.
   * @param {*} dateBegin
   * @param {*} dateEnd
   */
  editMile(cod_milha, user, quantidade, expiracao) {
    let URL = RESOURCES.LOGIN;
    return this.axios
    .post(URL, {cod_milha: cod_milha, user: user, quantidade: quantidade, expiracao: expiracao })
    .then(function(response){
        return true;
     })
     .catch((response) => {
       return false;
     });
      
  }
}

export default EditMilesService;
