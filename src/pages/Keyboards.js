import { useEffect, useState } from 'react'
import FilterMenu from '../components/layout/products/FilterMenu'
import ProductCard from '../components/layout/products/ProductCard'
import KeyboardsService from '../domain/keyboards/KeyboardsService'
import './Products.css'

export default function Keyboards() {

  const [keyboards, setKeyboards] = useState([]);

  const getData = async () => {
    const data = await KeyboardsService.getAllKeyboards();
    if(data){
      setKeyboards(data);
    }
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <div className='text-light text-start'>
      <h2 className='m-4'>Tastature</h2>
      <hr/>
      <main className='d-flex flex-row'>
        <div className="ms-5 d-flex flex-row justify-content-evenly products-container">
            {keyboards && keyboards.map(product => (
              <ProductCard key={product.id} data={product} url={'/tastature'}/>
            ))}
        </div>
      </main>
    </div>
  )
}
