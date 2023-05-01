import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ data, url }) {

  // const [title, setTitle] = useState('');

  // const titleFilter = () => {
  //   if(data.product_name.length >= 28){
  //     const tempTitle = data.product_name.substring(0,28) + "...";
  //     setTitle(tempTitle);
  //   }
  //   else{
  //     setTitle(data.product_name)
  //   }
  // }

  // useEffect(() => {
  //   titleFilter();
  // }, [])

  return (
    <div>
        <div className="card text-center text-dark product-card mb-4">
            <img src={data.image_url} className="card-img-top product-img" alt="..." />
            <div className="card-body d-flex flex-column justify-content-evenly">
                <h5 className="card-title product-title">{data.product_name}</h5>
                <h4>{data.price} RSD</h4>
                <Link to={(url) ? `${url}/${data.id}` : `${data.id}`} className="btn btn-dark more-info">Detaljnije</Link>
            </div>
        </div>
    </div>
  )
}
