import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { addnewproduct, editproduct, proddetails } from "../../JS/actions/productActions";

function EditProduct() {
    const dispatch =useDispatch()
    const navigate=useNavigate()
  const {idprod}=useParams()
  const [newProd, setNewProd] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
    QtS: 0,
  });
  const prod=useSelector(state=>state.details)
  useEffect(() => {
    dispatch(proddetails(idprod))
    setNewProd(prod)
  }, [idprod,prod])
  
  const handelchange = (e) => {
    setNewProd({ ...newProd, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => { 
    e.preventDefault();
    dispatch(editproduct({...newProd,id:prod.id}))
    setNewProd({
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        rating: {
          rate: 0,
          count: 0,
        },
        QtS: 0,
      })
navigate("/")
   }
  return (
    <div className="container">
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={newProd.title}
            onChange={handelchange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Photo</Form.Label>
          <Form.Control
            type="url"
            name="image"
            value={newProd.image}
            onChange={handelchange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={newProd.description}
            onChange={handelchange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={newProd.price}
            onChange={handelchange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control
            type="number"
            name="QtS"
            value={newProd.QtS}
            onChange={handelchange}
            required
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          name="category"
          value={newProd.category}
          onChange={handelchange}
          required
        >
          <option>Category</option>
          <option value="men">men</option>
          <option value="women">women</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </Form.Select>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button as="input" type="reset" value="Reset" />
      </Form>
    </div>
  );
}

export default EditProduct