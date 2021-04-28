import axios from "axios";
import { config } from "../environments/environment.dev.js";

//import { interceptor } from "./requestInterceptor";

export function getItems(query) {
  return axios.get(
    `${config.apiURL}/items/`,
     {
         params: {
             q: query
         }
     }
    //interceptor
  );
}

export function getItem(id) {
  return axios.get(
    `${config.apiURL}/items/${id}`
    //interceptor
  );
}
