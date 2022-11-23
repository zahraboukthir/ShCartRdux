import { ADD_TO_CARD, DECREMENTQTE, DELETEPRODPANIER, EDITPRODPANIER, INCREMENTQTE } from "../actionTypes/panierTypes";

export const add_to_card = (product) => {
    console.log(product)
  return { type: ADD_TO_CARD, payload: product };
};

export const incrementqte = (elm) => { 
  return {
    type:INCREMENTQTE, payload:elm

  }
}
export const decrementqte=(elm)=>{
  return{
    type:DECREMENTQTE,payload:elm
  }
}
export const deleteprodpanier=(el)=>{
  return{
    type:DELETEPRODPANIER,
    payload:el
  }
}