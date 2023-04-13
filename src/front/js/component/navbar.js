import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DYH from "../../img/D&H_Proyecto_final_LOGO Transparente.png";
import { Context } from "./../store/appContext";
import { Recipes } from "../pages/recipes";

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
                to="/sobrenosotros"
                className="nav-link active"
                aria-current="page"
                style={{ color: "White" }}
              >
                Sobre Nosotros
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
              <>
                <div className="d-flex flex-wrap">
                  <div className="dropdown">
                    <button
                      className="btn btn-light dropdown-toggle me-5"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Favorites
                      <span className="badge bg-danger mx-1">
                        {store.favorites.length}
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      {store.favorites.map((item, index) => {
                        return (
                          <li key={index}>
                            <a className="dropdown-item" href="#">
                              {item}
                              <i
                                className="btn btn-danger btn-sm fas fa-trash ms-2"
                                onClick={() => actions.deleteFavorites(item)} // elimina favoritos
                              ></i>
                            </a>{" "}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
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
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
