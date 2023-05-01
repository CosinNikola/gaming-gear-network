import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MiceService from '../../domain/mice/MiceService';
import MiceTable from '../../components/layout/productsTables/MiceTable';
import './Mouse.css';

export default function Mouse() {

    const { id } = useParams();
    const [mouse, setMouse] = useState({});

    const getMouse = async () => {
        const data = await MiceService.getOneMouse(id);
        if(data){
            setMouse(data);
        }
    }

    useEffect(() => {
        getMouse();
    }, [])

  return (
    <div className='container my-2 bg-light d-flex flex-column justify-content-between p-3'>
        <div className='d-flex flex-row justify-content-around'>
        <div className='w-50'>
            <img src={mouse.image_url} className="mouse-img mx-5"/>
        </div>
        <div className='d-flex flex-column text-start w-50'>
            <h3>{mouse.product_name}</h3>
            <div className='info'>
            <p>Broj tastera: {mouse.buttons}</p>
            <p>Senzor: {mouse.sensor}</p>
            <p>DPI: {mouse.DPI}</p>
            <p>Težina: {mouse.weight}</p>
            <p>Dimenzije: {mouse.dimensions}</p>
            <p>Tip: {mouse.type}</p>
            </div>
            <hr></hr>
            <button className="btn btn-dark w-50 fs-2 text-start">{mouse.price} RSD</button>
        </div>
        </div>
        <div>
            <h4 className='specifikacija'>Specifikacija</h4>
            <MiceTable product={mouse}/>
        </div>
    </div>
  )
}
