import { useState, useEffect} from 'react'
import MousepadsService from '../domain/mousepads/MousepadsService';
import ProductCard from '../components/layout/products/ProductCard';
import FilterMenu from '../components/layout/products/FilterMenu';

export default function Mousepads() {

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await MousepadsService.getAllMousepads();
    if(res){
      setData(res);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='text-light text-start'>
    <h2 className='m-4'>Podloge za miša</h2>
    <hr className='hr'/>
    <main className='d-flex flex-row'>
      <div className="ms-5 d-flex flex-row justify-content-evenly products-container">
          {data && data.map(product => (
            <ProductCard key={product.id} data={product} url={'/podloge'}/>
          ))}
      </div>
    </main>
  </div>
  )
}
