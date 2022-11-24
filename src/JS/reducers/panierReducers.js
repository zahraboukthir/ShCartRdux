import {
  ADD_TO_CARD,
  DECREMENTQTE,
  DELETEPRODPANIER,
  INCREMENTQTE,
} from "../actionTypes/panierTypes";
import {
  ADDNEWPRODUCT,
  DELET_PROD,
  EDITPRODUCT,
  FILTERBYCATEGORY,
  FILTERBYNAME,
  PRODDETAILS,
} from "../actionTypes/productTypes";
import { products } from "./data";

const initState = {
  listProd: products,
  panier: [],
  total: 0,
  details: {},
  value: "",
  category: "all",
};
export const shoppingcardReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CARD:
      const existprod = state.panier.find((el) => el.id == payload.id);
      console.log(existprod);
      if (existprod) {
        alert("prod deja ajouté");
        return state;
      } else {
        return {
          ...state,
          panier: [
            ...state.panier,
            {
              ...payload,
              qteA: 1,
              pT: Number(payload.price),
              QtS: Number(payload.QtS) - 1,
            },
          ],
          total: Number(state.total) + Number(payload.price),
          listProd: state.listProd.map((el) =>
            el.id == payload.id
              ? {
                  ...el,

                  QtS: Number(el.QtS) - 1,
                }
              : el
          ),
        };
      }
    case INCREMENTQTE:
      if (payload.QtS > 0) {
        return {
          ...state,
          panier: state.panier.map((el) =>
            el.id == payload.id
              ? {
                  ...el,
                  qteA: Number(el.qteA) + 1,
                  QtS: Number(el.QtS) - 1,
                  pT: Number(el.pT) + Number(el.price),
                }
              : el
          ),
          listProd: state.listProd.map((el) =>
            el.id == payload.id
              ? {
                  ...el,

                  QtS: Number(el.QtS) - 1,
                }
              : el
          ),
          total: Number(state.total) + Number(payload.price),
        };
      } else {
        alert("fin du stock");
        return state;
      }
    case DECREMENTQTE:
      if (payload.qteA > 1) {
        return {
          ...state,
          panier: state.panier.map((el) =>
            el.id == payload.id
              ? {
                  ...el,
                  qteA: Number(el.qteA) - 1,
                  QtS: Number(el.QtS) + 1,
                  pT: Number(el.pT) - Number(el.price),
                }
              : el
          ),
          listProd: state.listProd.map((el) =>
            el.id == payload.id
              ? {
                  ...el,

                  QtS: Number(el.QtS) + 1,
                }
              : el
          ),
          total: Number(state.total) - Number(payload.price),
        };
      } else {
        alert("un produit");
        return state;
      }
    case DELETEPRODPANIER:
      return {
        ...state,
        total: Number(state.total) - Number(payload.pT),
        panier: state.panier.filter((el) => el.id == !payload.id),
        listProd: state.listProd.map((el) =>
          el.id == payload.id ? { ...el, QtS: Number(el.QtS) + Number(payload.qteA) } : el
        ),
      };
    case PRODDETAILS:
      return {
        ...state,
        details: state.listProd.find((el) => el.id == payload),
      };
    case DELET_PROD:
      const pdpn = state.panier.find((el) => el.id == payload);
      return {
        ...state,
        listProd: state.listProd.filter((el) => el.id != payload),
        panier: state.panier.filter((el) => el.id != payload),
        total: pdpn ? Number(state.total) - Number(pdpn.pT) : Number(state.total),
      };
    case ADDNEWPRODUCT:
      return {
        ...state,
        listProd: [payload, ...state.listProd],
      };
    case EDITPRODUCT:
      const epdpn = state.panier.find((el) => el.id == payload.id);
      return {
        ...state,
        listProd: state.listProd.map((el) =>
          el.id == payload.id ? { ...el, ...payload } : el
        ),
        panier: epdpn
          ? state.panier.map((el) =>
              el.id == payload.id
                ? {
                    ...el,
                    ...payload,
                    pT: Number(payload.price) * Number(epdpn.qteA),
                  }
                : el
            )
          : state.panier,
        total: epdpn
          ? state.total -
            Number(epdpn.price) * Number(epdpn.qteA) +
            Number(payload.price) * Number(epdpn.qteA)
          : Number(state.total),
      };
    case FILTERBYNAME:
      return { ...state, value: payload };
    case FILTERBYCATEGORY:
      return { ...state, category: payload };
    default:
      return state;
  }
};
