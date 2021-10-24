import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Catalog from '../../features/catalog/Catalog'
import { Product } from '../models/product'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  function addProduct() {}

  return (
    <>
      <Typography variant="h1">ReStore</Typography>
      <Catalog products={products} addProduct={addProduct} />
    </>
  )
}

export default App
