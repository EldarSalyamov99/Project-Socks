import axios from 'axios';
import React, { useState } from 'react';


export default function RegPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    repeat: '',
  });

  const changeHandler = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submithandler = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.repeat) {
      alert('Passwords do not match');
      return;
    }
    const response = await axios.post('/api/auth/reg', formData);
    if (response.status === 200) {
      window.location.href = '/';
    }
  };
  return (
    <div className="regForm" style={{ marginLeft: '20%', margingight: '20%', margintop: '20%' }}>
      <h1>Регистрация</h1>
      <form onSubmit={submithandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" placeholder="ivanov@mail.com">
            Введите ваш email
          </label>
          <input
          value={formData.email}
          onChange={changeHandler}
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
            Введите свое имя
          </label>
          <input
          value={formData.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Enter your name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" placeholder="***">
            Придумайте пароль
          </label>
          <input
          value={formData.password}
          onChange={changeHandler}
          type="password"
          name="password"
          placeholder="Password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" placeholder="***">
            Повторите пароль
          </label>
          <input
          value={formData.repeat}
          onChange={changeHandler}
          type="password"
          name="repeat"
          placeholder="Repeat password"
          isValid={formData.password === formData.repeat && formData.repeat !== ''}
          isInvalid={formData.password !== formData.repeat && formData.repeat !== ''}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Зарегистрироваться
        </button>
        {/* {error && <p>{error}</p> } */}
      </form>
    </div>
  );
}
