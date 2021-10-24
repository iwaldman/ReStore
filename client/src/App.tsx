import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([{ name: 'Apples', price: 3.99 }])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div>
      <h1>ReStore</h1>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
