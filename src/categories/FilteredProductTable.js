import React, {useState} from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import { productData } from '../utils/productData';


const FilteredProductTable = () => {

  const [filteredText, setFilteredText] = useState("")
  const [inStockOnly, setInStockOnly] = useState(false)

  const handleChange = e => {
    setFilteredText(e.target.value)
  }

  const handleClick = (inStockOnly) => {
    setInStockOnly(inStockOnly)
  }
 
  return (
    <>
      <SearchBar filteredText={filteredText} inStockOnly={inStockOnly} onChange={handleChange} onClick={handleClick} />
      <ProductTable products={productData} filteredText={filteredText} inStockOnly={inStockOnly} />
    </>
  )
}

export default FilteredProductTable
