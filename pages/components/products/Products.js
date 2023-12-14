import React from 'react'
import ProductItem from './ProductItem'

function Products() {
  return (
    <div className='w-full grid grid-cols-3 gap-4'>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  )
}

export default Products