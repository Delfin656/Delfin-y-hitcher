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
  console.log(store.recipes, "Hola soy store");
  return (
    <div className="jumbotron">
      <h1 className="display-4 text-dark my-5 ms-5">
        Tartar De Pez Espada {store.recipes[params.theid]?.content}
      </h1>
      <div className="row bg-dark bg-gradient">
        <img
          src={Tartar}
          style={{ height: "350px", width: "450px" }}
          className="rounded-top ms-5 mt-5"
        />
        <img
          src={HitcherTartar}
          style={{ height: "400px", width: "400px", float: "right" }}
          className="col-6 rounded-top ms-5"
        />
        <p className="col-6 text-light ms-5">
          <strong>
            <br></br>🧂Receta de Tártar de Pez espada con mayowasabi🧂<br></br>{" "}
            <br></br>Ingredientes 120 gramos de Pez espada<br></br> 1 tomate{" "}
            <br></br> 1 aguacate <br></br> 1 limón <br></br> Sésamo <br></br>{" "}
            Sal y Pimienta <br></br><br></br> (Marinado)<br></br> <br></br> Salsa de soya{" "}
            <br></br> Aceite de oliva <br></br> Aceite de sésamo <br></br>
            Wasabi <br></br><br></br> *Mayowasabi*<br></br>
            <br></br> 1 huevo<br></br> 1 taza de aceite<br></br> Zumo de limón
            <br></br> Sal<br></br>
            Wasabi<br></br>
            <br></br> Preparación:<br></br>
            <br></br>Corta el pez espada en cubos pequeños, y agrega la marinada
            (salsa de soya, aceite de oliva, wasabi una cantidad pequeña),
            aparta en un bol.<br></br><br></br> Corta el tomate en brunoise y reserva en
            un bol.<br></br>
            <br></br> Corta en cubos pequeños el aguacate, reserva en un bol, y
            le incorporas el zumo de medio limón, aceite y unas pizcas de sal y
            pimienta<br></br>
            <br></br> (Mayowasabi)<br></br>
            <br></br> Bate un huevo mientras agregas la taza de aceite apenas en
            un hilo , hasta emulsionar, luego añade el limón, el wasabi en
            pequeñas cantidades junto una pizca de sal<br></br>
            <br></br>Hora de montar el platillo...<br></br> <br></br>En un plato
            llano y blanco, coloca un molde tubular, dentro del molde añades los
            ingredientes en el siguiente orden : el aguacate, luego el tomate,
            seguido del pez espada, vertemos la mayowasabi por encima, agregamos
            semillas de sésamo y coronamos el platillo con una crocancia de
            plátano verde, desmontamos del molde y listos para disfrutar...{" "}
          </strong>
        </p>
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
