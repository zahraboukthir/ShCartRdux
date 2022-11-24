import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementqte,
  deleteprodpanier,
  incrementqte,
} from "../../JS/actions/panierActions";

const ProductPanier = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <img src={el.image} alt="" width={"60px"} />
      </td>
      <td>{el.title}</td>
      <td>
        <div>
          {" "}
          <button onClick={() => dispatch(incrementqte(el))}>+</button>
          <p>{el.qteA}</p>
          <button onClick={() => dispatch(decrementqte(el))}>-</button>
        </div>
      </td>
      <td>{el.price}dt</td>
      <td>{el.pT} dt</td>
      <tr>
        <div>
          <button onClick={() => dispatch(deleteprodpanier(el))}>X</button>
        </div>
      </tr>
    </tr>
  );
};

export default ProductPanier;
