import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark pt-0 pb-0">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-5">
          <img
            src="https://o.remove.bg/downloads/7bffa482-dd5e-41bc-8ea9-48437f70b1f0/D_H_Proyecto_final_LOGO_NEGRO-removebg-preview.png"
            alt=""
            style={{ height: "90px", width: "120px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <div></div>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link
                to="/profile"
                className="nav-link active"
                aria-current="page"
                style={{ color: "White" }}
              >
                Perfil
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/platos"
                className="nav-link active"
                aria-current="page"
                style={{ color: "White" }}
              >
                Platos de Comida
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/sobrenosotros"
                className="nav-link active"
                aria-current="page"
                style={{ color: "White" }}
              >
                Sobre Nosotros
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/contactanos"
                className="nav-link active"
                aria-current="page"
                style={{ color: "White" }}
              >
                Contáctanos
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/contactanos"
                className="nav-link active"
                aria-current="page"
                style={{ color: "White" }}
              >
                Blog
              </Link>
            </li>
          </ul>
          <div>
            {localStorage.getItem("token") ? (
              <div className="dropdown me-1">
                <button
                  className="btn dropdown-toggle bg-transparent text-center boton-profile-navbar"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={
                      store.usuario.info?.imagen
                        ? store.usuario.info.imagen
                        : "https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667342806/Animalium/Avatar_k0z1ns.png"
                    }
                    alt=""
                    className="d-flex justify-content-center text-center rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end dropdown-menu-start"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Ir al perfil
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/login"
                      style={{ color: "#20C997" }}
                      onClick={() => {
                        actions.removeToken();
                      }}
                    >
                      <i className="fa-solid fa-right-from-bracket bg-transparent me-2"></i>
                      Cerrar sesion
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <React.Fragment>
                <button className="me-2 p-2 boton-iniciar" type="submit">
                  <Link to="/login" style={{ color: "Black" }}>
                    Iniciar Sesión
                  </Link>
                </button>
                <button className="boton-registrate p-2 me-3" type="submit">
                  <Link to="/registro" style={{ color: "Black" }}>
                    Registrate
                  </Link>
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
