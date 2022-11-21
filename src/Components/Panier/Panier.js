import React from 'react'
import { Table } from 'react-bootstrap'
import ProductPanier from './ProductPanier'
import { useSelector } from 'react-redux';

const Panier = () => {
    const pn=useSelector(state=>state.panier)
    const total=useSelector(state=>state.total)
    // console.log(pn)
  return (
    <div className='container'> <button>update panier</button>
         <Table striped>
      <thead>
        <tr>
          <th>Product photo</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price Unit</th>
          <th>Price total</th>
        </tr>
      </thead>
      <tbody>
      {pn.map(
        el=>  <ProductPanier el={el} key={el.id}/>
      )}
       
       <tr>total : {total} dt</tr>
      </tbody>

    </Table>
    </div>
  )
}

export default Panier