import {useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import ApiClient from '../utils/http/ApiClient';
import ProductCard from '../components/layout/products/ProductCard';
import FilterMenu from '../components/layout/products/FilterMenu';

export default function Search() {

    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const query = queryParams.get('q');
    const [searchData, setSearchData] = useState([]);
    const getData = async () => {
        const data = await ApiClient.get(url);
       if(data){
        setSearchData(data.data);
       }
    }

    useEffect(() => {
        getData();
    }, [])

    const url = 'http://localhost:3000/mice?q='+query;


  return (
    <div className='text-light text-start'>
      <h2 className='m-4'>Pretraga:</h2>
      <hr className='hr'/>
      <main className='d-flex flex-row'>
        <FilterMenu />
        <div className="ms-5 d-flex flex-row justify-content-center products-container">
            {searchData && searchData.map(product => (
              <ProductCard key={product.id} data={product}/>
            ))}
        </div>
      </main>
    </div>
  )
}
