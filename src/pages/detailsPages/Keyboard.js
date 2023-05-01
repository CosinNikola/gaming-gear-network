import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import KeyboardsService from '../../domain/keyboards/KeyboardsService'
import KeyboardsTable from '../../components/layout/productsTables/KeyboardsTable';

export default function Keyboard() {

  const [keyboard, setKeyboard] = useState({});
  const {id} = useParams();  

  const getData = async () => {
    const res = await KeyboardsService.getOneKeyboard(id);
    if(res){
      setKeyboard(res);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='container my-2 bg-light d-flex flex-column justify-content-between p-3'>
        <div className='d-flex flex-row justify-content-around'>
        <div className='w-50'>
            <img src={keyboard.image_url} className="mouse-img mx-5"/>
        </div>
        <div className='d-flex flex-column text-start w-50'>
            <h3>{keyboard.product_name}</h3>
            <div className='info'>
            <p>Tip tastature: {keyboard.switches_type}</p>
            <p>Vrsta tastera: {keyboard.switches}</p>
            <p>Konektor: {keyboard.connector}</p>
            <p>Opis: {keyboard.description}</p>
            </div>
            <hr />
            <button className="btn btn-dark w-50 fs-2 text-start">{keyboard.price} RSD</button>
        </div>
        </div>
        <div>
            <h4 className='specifikacija'>Specifikacija</h4>
            <KeyboardsTable product={keyboard}/>
        </div>
    </div>
  )
}
