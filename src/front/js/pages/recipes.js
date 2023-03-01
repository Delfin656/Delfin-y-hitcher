import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Context } from "../store/appContext";

export const Recipes = () => {
  // const { store, actions } = useContext(Context);
  const navigate = useNavigate();


  return(
    <div className="bg dark text-center">
      <h1>HOLA YA ESTAS LOGUEADO EN RECIPES</h1>
    </div>




  )

}

