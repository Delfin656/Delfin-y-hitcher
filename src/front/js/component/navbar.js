import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DYH from "../../img/D&H_Proyecto_final_LOGO Transparente.png";
import { Context } from "./../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark pt-0 pb-0">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-5">
          <img src={DYH} alt="" style={{ height: "90px", width: "120px" }} />
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
            {!store.tokenUserLogin ? (
              <>
                <Link
                  to="/login"
                  style={{
                    color: "Black",
                    textDecoration: "none",
                  }}
                >
                  <button
                    className="button-login btn btn-light me-2 p-2 "
                    type="submit"
                    style={{
                      borderRadius: "8px",
                    }}
                  >
                    Iniciar Sesión
                  </button>
                </Link>
                
                <Link
                  to="/registro"
                  style={{ color: "Black", textDecoration: "none" }}
                >
                  <button
                    className="button-registro btn btn-light p-2 me-3"
                    type="submit"
                    style={{
                      borderRadius: "8px",
                    }}
                  >
                    Registrate
                  </button>
                </Link>
              </>
            ) : (
              <button
                className="button-login btn btn-light me-2 p-2 "
                type="submit"
                onClick={() => {
                  actions.logout();
                  navigate("/");
                }}
                style={{
                  borderRadius: "8px",
                }}
              >
                Cerrar Sesión
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
