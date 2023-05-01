import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductsService from '../../domain/products/ProductsService';
import MiceTable from '../../components/layout/productsTables/MiceTable';
import KeyboardsTable from '../../components/layout/productsTables/KeyboardsTable';
import HeadsetsTable from '../../components/layout/productsTables/HeadsetsTable';
import MousepadsTable from '../../components/layout/productsTables/MousepadsTable';
import './Mousepad.css';

export default function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    const categories = {
      "misevi" : <MiceTable product={product}/>,
      "tastature" : <KeyboardsTable product={product}/>,
      "slusalice" : <HeadsetsTable product={product}/>,
      "podloge" : <MousepadsTable product={product}/>
    }

    const getProduct = async () => {
        const data = await ProductsService.getOneProduct(id);
        if(data){
            setProduct(data);
        }
    }

    useEffect(() => {
        getProduct();
    }, [])

  return (
    <div className='container my-2 bg-light d-flex flex-column justify-content-between p-3'>
        <div className='d-flex flex-row justify-content-around'>
        <div className='w-50'>
            <img src={product.image_url} className="mouse-img mx-5"/>
        </div>
        <div className='d-flex flex-column text-start w-50'>
            <h3>{product.product_name}</h3> 
            <div className='info'>
            <p>Debljina: {product.thickness}</p>
            <p>Dimezije: {product.dimensions}</p> 
            <p>Osvetljenje: {product.lighting}</p> 
            <p>Platforma: {product.platform}</p>
            <p>Proizvodjač: {product.manufacturer}</p> 
            <p>Kratak opis: {product.description}</p> 
            </div>
            <hr></hr>
            <button className="btn btn-dark w-50 fs-2 text-start">{product.price} RSD</button>
        </div>
        </div>
        <div>
        <h4 className='specifikacija'>Specifikacija</h4>
          {categories[product.category]}
        </div>
    </div>
  )
}
