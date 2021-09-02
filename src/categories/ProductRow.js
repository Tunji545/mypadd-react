import React from 'react'

const ProductRow = ({product}) => {

  const name = product.stocked ? product.name : <span style={{color: "red"}}>{product.name}</span>
  console.log(name);
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow
