import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import HitcherTartar from "../../img/Hitcher_plato_de_entrada_transparente.png";
import Tartar from "../../img/Plato-Tartar-Pez-Espada.png";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const [recipes, setRecipes] = useState();

  const getSingle = async (id) => {
    try {
      const response = await fetch(
        process.env.BACKEND_URL + `/api/recipes/${id}`
      );
      const body = await response.json();
      setRecipes(body);
      return body;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSingle(params.theid);
  }, []);

  const params = useParams();
  console.log(store.recipes , "Hola soy store")
  return (
    <div className="jumbotron">
      <h1 className="display-4 text-dark my-5 ms-5">
        Comida gourmet con: {store.recipes[params.theid]?.content}
      </h1>
      <div className="row">
        <img
          src={Tartar}
          style={{ height: "350px", width: "400px" }}
          className="col-6 rounded-top ms-5"
        />
        <img
          src={HitcherTartar}
          style={{ height: "350px", width: "400px" }}
          className="col-6 rounded-top ms-5"
        />
      </div>

      <hr className="my-4" />

      <Link to="/recipes">
        <span
          className="btn btn-outline-warning btn-lg ms-5 my-5"
          href="#"
          role="button"
        >
          Back recipes
        </span>
      </Link>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
