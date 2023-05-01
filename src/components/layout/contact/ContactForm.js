import React, {useState} from 'react'
import './ContactForm.css'


export default function ContactForm() {

  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    let data = {name: name, email: email, message: message};
    setFormData(data);
    console.log(formData);
  }


  return (
    <div className='w-50 mx-auto'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Ime:</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={e => {setName(e.target.value)}}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email adresa:</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={e => {setEmail(e.target.value)}} />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Poruka:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" onChange={e => {setMessage(e.target.value)}}></textarea>
        </div>
        <button className="btn btn-light w-25 fw-bold submit" type="submit">Pošalji</button>
      </form>
    </div>
  )
}
