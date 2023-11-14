import axios from 'axios';
import React,{useState} from 'react'


export default function AuthPage() {
  const [err, setErr] = useState(null);

  const handleClose = () => setErr(null);

  const submithandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const res = await axios.post('/api/auth/login', data);
      if (res.status === 200) window.location = '/';
    } catch (error) {
      setErr(error.response.data.message);
    }
  };

  return (
    <div className="regForm" style={{ marginLeft: '20%', margingight: '20%', margintop: '20%' }}>
    <h1>Авторизация</h1>
    <form onSubmit={submithandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" placeholder="ivanov@mail.com">
          Введите ваш email
        </label>
        <input
        type="email"
        name="email"
        placeholder="Enter email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" placeholder="Ivan">
          Введите пароль
        </label>
        <input
        type="password"
        name="password"
        placeholder="password"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
       <button  className="btn btn-primary" onClick={handleClose}>
        Авторизоваться
      </button>
          </form>
  </div>
  )
}
