import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import HitcherPollo from "../../img/Hitcher-plato-final-fondo-transparente.png";

export const Recipes = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.recipes();
  }, []);
  console.log(store.recipes);
  return (
    <div className="d-inline ms-5 my-5">
      <div className="ms-5">
        <h1 className="text-dark text-center">
          <strong>✨Recetas✨</strong>
        </h1>

        {/* Cards recetas */}
        {store.recipes.map((item, index) => {
          return (
            <div key={index} className="mt-3 pb-3 scroll-lat">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={HitcherPollo}
                  className="rounded-top"
                  alt="..."
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = null;
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.author.username}</h5>
                  <p className="card-text">{item.content}</p>
                  <p className="card-text">{item.date}</p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/single/${item.id}`}>
                      <button type="button" className="btn btn-outline-primary">
                        Learn More
                      </button>{" "}
                    </Link>
                    {store.favorites.includes(item.content) ? null : (
                      <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={() => {
                          actions.setFavorites(item.content);
                        }}
                      >
                        ✰
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
