import { DELET_PROD, PRODDETAILS } from "../actionTypes/productTypes"

export const proddetails = (id) => { 
    return {
        type:PRODDETAILS,
        payload:id
    }

 }

 export const deletprod = (id) => { 
    return{type:DELET_PROD,
    payload:id}
  }