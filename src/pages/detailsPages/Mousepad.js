import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MousepadsService from '../../domain/mousepads/MousepadsService';
import './Mousepad.css';
import MousepadsTable from '../../components/layout/productsTables/MousepadsTable';

export default function Mouse() {

    const { id } = useParams();
    const [mousepad, setMousepad] = useState({});

    const getMousepad = async () => {
        const data = await MousepadsService.getOneMousepad(id);
        if(data){
            setMousepad(data);
            console.log(data)
        }
    }

    useEffect(() => {
        getMousepad();
    }, [])

  return (
    <div className='container my-2 bg-light d-flex flex-column justify-content-between p-3'>
        <div className='d-flex flex-row justify-content-around'>
        <div className='w-50'>
            <img src={mousepad.image_url} className="mouse-img mx-5"/>
        </div>
        <div className='d-flex flex-column text-start w-50'>
            <h3>{mousepad.product_name}</h3>
            <div className='info'>
            <p>Debljina: {mousepad.thickness}</p>
            <p>Dimezije: {mousepad.dimensions}</p>
            </div>
            <hr></hr>
            <button className="btn btn-dark w-50 fs-2 text-start">{mousepad.price} RSD</button>
        </div>
        </div>
        <div>
        <h4 className='specifikacija'>Specifikacija</h4>
        <MousepadsTable product={mousepad}/>
        </div>
    </div>
  )
}
