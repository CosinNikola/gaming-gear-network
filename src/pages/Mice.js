import { useEffect, useState } from 'react'
import FilterMenu from '../components/layout/products/FilterMenu'
import ProductCard from '../components/layout/products/ProductCard'
import MiceService from '../domain/mice/MiceService'
import './Products.css'

export default function Mice() {

  const [mice, setMice] = useState([]);

  const getData = async () => {
    const data = await MiceService.getAllMice();
    if(data){
      setMice(data);
    }
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <div className='text-light text-start'>
      <h2 className='m-4'>Miševi</h2>
      <hr className='hr'/>
      <main className='d-flex flex-row'>
        <div className="ms-5 d-flex flex-row justify-content-evenly products-container">
            {mice && mice.map(product => (
              <ProductCard key={product.id} data={product} url={'/misevi'}/>
            ))}
        </div>
      </main>
    </div>
  )
}
