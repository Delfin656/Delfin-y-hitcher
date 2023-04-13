import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import HitcherTartar from "../../img/Hitcher_plato_de_entrada_transparente.png";

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

  return (
    <div className="jumbotron">
      <h1 className="display-4">
        This will show the demo element: {store.recipes[params.theid]?.content}
      </h1>
      <img src={HitcherTartar} />
      <hr className="my-4" />

      <Link to="/recipes">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back recipes
        </span>
      </Link>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
