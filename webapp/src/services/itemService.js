import axios from "axios";
import { config } from "../environments/environment.dev.js";

export function getItems(query) {
  return axios.get(
    `${config.apiURL}/items/`,
     {
         params: {
             q: query
         }
     }
  );
}

export function getItem(id) {
  return axios.get(
    `${config.apiURL}/items/${id}`
  );
}
