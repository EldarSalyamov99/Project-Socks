import React,{useEffect,useState} from 'react'
import axios from 'axios';

export default function AccountForm() {
    const [formValues, setFormValues] = useState(null);
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormValues((prev) => ({ ...prev, [name]: value }));
    };
    useEffect(() => {
      const controller = new AbortController();
      const { signal } = controller;
      axios('/api/auth/user', { signal })
        .then((res) => {
          setFormValues(res.data);
          console.log('fetch completed');
        })
        .catch(console.log);
      return () => controller.abort();
    }, []);
  return (
    <div className="text-center" style={{ marginLeft: '20%', margingight: '20%', margintop: '20%' }}>
    {formValues ? (
    <form >

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" placeholder="Ivan">
          Имя
        </label>
        <input
        value={formValues.name}
        onChange={handleInputChange}
        type="text"
        name="name"
        placeholder="Enter your name"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" placeholder="ivanov@mail.com">
          Email
        </label>
        <input
        value={formValues.email}
        onChange={handleInputChange}
        type="email"
        name="email"
        placeholder="Enter email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label" placeholder="***">
          Пароль
        </label>
        <input
        value={formValues.password}
        onChange={handleInputChange}
        type="password"
        name="password"
        placeholder="Password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
 
    </form>
          ) : (
            <div className="spinner-border text-dark" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
          )}
  </div>
  )
}
