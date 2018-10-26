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
    LOGIN: BASE_URL + 'addUser',
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
class CreateAccountService extends AbstractService {
  constructor() {
    super();
  }

  /**
   * Service method to get the balance of the logged user account.
   * @param {*} dateBegin
   * @param {*} dateEnd
   */
  addUser(useremail, usernome, usertelefone, useraviso_expiracao_telefone, useraviso_expiracao_email, useroferta_compra) {
    let URL = RESOURCES.LOGIN;

    return this.axios
    .post(URL, {email: useremail, 
        nome: usernome, 
        telefone: usertelefone, 
        aviso_expiracao_telefone: useraviso_expiracao_telefone, 
        aviso_expiracao_email: useraviso_expiracao_email,
        oferta_compra: useroferta_compra
    })
    .then(function(response){
        return true;
     })
     .catch((response) => {
       return false;
     });
      
  }
}

export default CreateAccountService;
