import { useEffect, useState } from 'react'
import FilterMenu from '../components/layout/products/FilterMenu'
import ProductCard from '../components/layout/products/ProductCard'
import ProductsService from '../domain/products/ProductsService'
import './Products.css'

export default function Products() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await ProductsService.getAllProducts();
    if(data){
      setProducts(data);
    }
  }

  useEffect(() => {
    getProducts();
  },[]);

  return (
    <div className='text-light text-start'>
      <h2 className='m-4'>Svi proizvodi</h2>
      <hr className='hr'/>
      <main className='d-flex flex-row'>
        <div className="ms-5 d-flex flex-row justify-content-around flex-wrap">
            {products && products.map(product => (
              <ProductCard key={product.id} data={product}/>
            ))}
        </div>
      </main>
    </div>
  )
}
