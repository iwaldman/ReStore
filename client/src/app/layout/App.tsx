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
    <div>
      <h1>ReStore</h1>
      <Catalog products={products} addProduct={addProduct} />
    </div>
  )
}

export default App
