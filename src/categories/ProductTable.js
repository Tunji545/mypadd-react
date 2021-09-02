import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

const ProductTable = ({products, filteredText, inStockOnly}) => {

  const rows = [];
  let lastCategory = null;

  products.map(product => {
    if(product.name.indexOf(filteredText) === -1) return;
    if(inStockOnly && !product.stocked) return;
    if(product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category} />
        )
    }
    lastCategory =  product.category
    return (
      rows.push(
        <ProductRow product={product} key={product.name} />
      )
      )
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default ProductTable
