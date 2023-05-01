import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Searchbar() {

   const [term, setTerm] = useState('');
   const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`);
   }

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
    <input className="form-control me-2" type="search" placeholder="Pretraži" onChange={e => {setTerm(e.target.value)}} />
    <button className="btn btn-outline-dark" type="submit">Pretraži</button>
    </form>
  )
}
