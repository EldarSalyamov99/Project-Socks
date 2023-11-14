import React from 'react';
import axios from 'axios'

function Header({user}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a href="/">
        <img className="logo" src="/img/лого.png" alt="logo" id='logo'/>
        </a>
        <a className="navbar-brand" href="/">Enjoy socks</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          {user ? (<>
                      <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/account">Account</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/logout"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        axios('/api/auth/logout')
                                          .then(() => (window.location.href = '/login'))
                                          .catch(console.log);
                                      }}
                      >Logout</a>
                    </li>
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/favorite">Избранное</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/api/basket">Корзина</a>
                              </li>
                              </> ):(<>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/reg">Registration</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/login">Auth</a>
          </li>
          </>)}
          </ul>
            </div>
      </div>
    </nav>
  );
}

export default Header;
