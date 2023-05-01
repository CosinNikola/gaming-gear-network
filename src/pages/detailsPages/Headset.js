import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import HeadsetsService from '../../domain/headsets/HeadsetsService';
import HeadsetsTable from '../../components/layout/productsTables/HeadsetsTable';

export default function Headset() {

    const [headset, setHeadset] = useState({});
    const {id} = useParams();

    const getData = async () => {
        const res = await HeadsetsService.getOneHeadset(id);
        if(res){
            setHeadset(res);
        }
    }

    useEffect(() => {
        getData();
    }, [])

  return (
    <div className='container my-2 bg-light d-flex flex-column justify-content-between p-3'>
        <div className='d-flex flex-row justify-content-around'>
        <div className='w-50'>
            <img src={headset.image_url} className="mouse-img mx-5"/>
        </div>
        <div className='d-flex flex-column text-start w-50'>
            <h3>{headset.product_name}</h3>
            <div className='info'>
            <p>Prečnik drajvera: {headset.driver_radius}</p>
            <p>Ima 7.1: {headset.has_7_1}</p>
            <p>Konektor: {headset.connector}</p>
            <p>Opis: {headset.description}</p>
            </div>
            <hr />
            <button className="btn btn-dark w-50 fs-2 text-start">{headset.price} RSD</button>
        </div>
        </div>
        <div>
            <h4 className='specifikacija mt-5'>Specifikacija</h4>
            <HeadsetsTable product={headset}/>
        </div>
    </div>
  )
}
