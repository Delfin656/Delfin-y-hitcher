import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = (props) => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    actions.login(email, password);
  };

  useEffect(() => {
    if (
      store.tokenUserLogin &&
      store.tokenUserLogin !== "" &&
      store.tokenUserLogin !== undefined
    ) {
      navigate("/recipes");
    }
  }, [store.tokenUserLogin]);

  return (
    <div className="container-fluid">
      <div className="container p-2 w-75 bg-secondary mt-3 mb-3 rounded shadow">
        <div className="row align-items-stretch">
          <div className="bg-login col bg-dark d-none d-lg-block col-ms-5 col-lg-5 col-xl-6 rounded"></div>
          <div className="col bg-white p-5 rounded-end">
            <h2
              className="fw-bold text-center py-2"
              style={{
                fontSize: "32px",
                fontWeight: "500",
              }}
            >
              Login
            </h2>
            <h6
              className="fw-bold text-center py-2"
              style={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              ✨ Bienvenido a tu mejor lugar ✨
            </h6>
            {store.tokenUserLogin &&
            store.tokenUserLogin !== "" &&
            store.tokenUserLogin !== undefined ? (
              "You are logged in with this token " + store.tokenUserLogin
            ) : (
              <form action="#" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    style={{
                      border: "1px solid #CED4DA",
                      borderRadius: "4px",
                    }}
                  ></input>
                </div>
                <div className="mb-1">
                  <label htmlFor="inputPassword4" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    style={{
                      border: "1px solid #CED4DA",
                      borderRadius: "4px",
                    }}
                  ></input>
                </div>
                <div className="mb-3">
                  <span>
                    <a
                      href="#"
                      style={{
                        color: "black",
                        float: "right",
                        textDecoration: "underline",
                      }}
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </span>
                </div>
                <br></br>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-dark"
                    style={{
                      border: "2px solid black",
                      borderRadius: "8px",
                    }}
                  >
                    Ingresar
                  </button>
                </div>
              </form>
            )}

            <div className="col  text-center mt-5">
              ¿Aun no tienes una cuenta?
              <a href="#" style={{ color: "black" }} className="ms-1">
                Registrate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
