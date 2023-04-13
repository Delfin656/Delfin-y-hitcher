import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import HitcherPlatoFinal from "../../img/Hitcher-plato-final-fondo-transparente.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="bg-home text-center">
      <div className="row">
        <div className="col-6">
          <p className="m-0">
            <img
              className="mx-5 mt-5"
              src={HitcherPlatoFinal}
              style={{ width: 300, height: 400 }}
              align="right"
            />
          </p>
        </div>
        <div className="col-6 mt-5">
          <div className="d-flex align-items-center landing">
            <div className="text-home container">
              <div className="text-light" align="left">
                <h3>
                  ¿Hoy te apetece disfrutar como en el mejor de los
                  restaurantes? No hace falta esperar a que te lo diga el
                  calendario. Entra, atrévete con estas recetas y haz de
                  cualquier día una cita memorable.
                </h3>
              </div>
              <Link to="/registro">
                <button className="button-home btn btn-light">
                  ¡Empezar ya!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
