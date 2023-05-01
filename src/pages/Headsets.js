import { useState, useEffect } from 'react'
import HeadsetsService from '../domain/headsets/HeadsetsService'
import FilterMenu from '../components/layout/products/FilterMenu'
import ProductCard from '../components/layout/products/ProductCard'

export default function Headsets() {

  const [headsets, setHeadsets] = useState([]);

  const getData = async () => {
    const res = await HeadsetsService.getAllHeadsets();
    if(res){
      setHeadsets(res);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='text-light text-start'>
      <h2 className='m-4'>Slušalice</h2>
      <hr/>
      <main className='d-flex flex-row'>
        <div className="ms-5 d-flex flex-row justify-content-evenly products-container">
            {headsets && headsets.map(product => (
              <ProductCard key={product.id} data={product} url={'/slusalice'}/>
            ))}
        </div>
      </main>
    </div>
  )
}
