import { ADDNEWPRODUCT, DELET_PROD, EDITPRODUCT, FILTERBYCATEGORY, FILTERBYNAME, PRODDETAILS } from "../actionTypes/productTypes"

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
  export const addnewproduct = (newprod) => { 
    return {
        type:ADDNEWPRODUCT,
        payload:newprod
    }
   }
   export const editproduct = (editedprod) => {
    return{
        type:EDITPRODUCT,
        payload:editedprod
    }
    }
   export const filterbyname = (value) => { 
       return {
        type:FILTERBYNAME,
        payload:value
       } 
     }
     export const filterbycategory = (value) => { 
        return {
         type:FILTERBYCATEGORY,
         payload:value
        } 
      }