import React from "react";

import { useDispatch } from "react-redux";
import { add_to_card } from "../../JS/actions/panierActions";
import { AiFillLike, AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./pdcard.css";
import { Link } from "react-router-dom";
import { deletprod } from "../../JS/actions/productActions";

const ProductCard = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div className=" page-wrapper" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="page-inner">
        <div>
          <div className="el-wrapper">
            <div className="box-up">
              <Link to={`/${el.id}`}>
              <img className="img" src={el.image} alt="" />
              </Link>
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{el.title}</span>
                  <span className="p-company">Quantity:{el.QtS}</span>
                  <AiFillLike
                    width="20px"
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="a-size" style={{cursor:"pointer"}}>
                  <AiFillEdit />

                  <AiFillDelete onClick={()=>dispatch(deletprod(el.id))} />
                </div>
              </div>
            </div>
            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner" />
              </div>
              <span className="cart">
                <span className="price">{el.price} dt</span>
                <span className="add-to-cart">
                  <span
                    className="txt"
                    onClick={() => dispatch(add_to_card(el))}
                  >
                    Add in cart
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //     <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={el.image} />
    //   <Card.Body>
    //     <Card.Title>{el.title}</Card.Title>
    //     <Card.Text>
    //     {el.description}
    //     </Card.Text>
    //     <Card.Text>
    //     QtS:{el.QtS}
    //     </Card.Text>
    //     <Card.Text>
    //     {el.price}DT
    //     </Card.Text>
    //     <Button variant="primary" onClick={()=>dispatch(add_to_card(el))}>Add to Card</Button>
    //     <Button variant="primary">Edit</Button>
    //     <Button variant="danger">X</Button>
    //   </Card.Body>
    // </Card>
    // </div>
  );
};

export default ProductCard;
