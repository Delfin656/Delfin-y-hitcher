import React from "react";
import { Link } from "react-router-dom";
import python3 from "../../img/Python-transparente.png";
import html5 from "../../img/Html5-transparente.png";
import postgreSql from "../../img/PostgreSQL-transparente.png";
import css from "../../img/Css3-transparente.png";
import bootstrap from "../../img/Bootstrap-transparente.png";
import javascript from "../../img/JavaScript.png";
import flaskImg from "../../img/Flask-transparente.png";
import reactRouter from "../../img/React-router-dom-transparente.png";
import reactImg from "../../img/React-transparente.png";
import sqlalchemyimg from "../../img/SqlAlchemy-transparente.png";
import HitcherPlatoFinal2 from "../../img/Hitcher-plato-final-2-transparente.png";
import JuanDelfin from "../../img/Juan-delfin-transparente.png";

export const AboutUs = () => {
  return (
    <div className="bg-aboutUs text-center">
      <h1 className="fw-bold ms-2 mt-5 ps-5 pb-5 text-dark text-center">
        Sobre nosotros
      </h1>
      <p className="fw-bold m-auto col-8 text-justify text-dark">
        <dd className="mb-4 primeralinea">
          <strong className="">D&H</strong> es un proyecto que nace del
          deseo latente en cada uno de nosotros que nos llama a contriubuir con
          nuestro pueblo Venezolano, queriendo mejorarlo haciendo uso de la
          tecnología y los conocimientos adquiridos a través de
          <strong className=""> 4Geeks Academy</strong> para así poder
          aportar nuestro granito de arena.
        </dd>
        <dd className="mb-4 primeralinea">
          Nuestra misión es facilitar por medio de nuestra web app (aplicación
          web) el conocimiento de las mejores recetas de artes culinarias de la
          mano de profesionales de gastronomía gourmet, en cuál el usuario podrá
          tener acceso a todo el contenido de los chef exclusivos registrandose
          en ella.
        </dd>
        <dd className="mb-4 primeralinea">
          Nuestra visión es crear una comunidad activa de personas interesadas
          en el mundo gastronomico para que aprendan de la mano de nuestros
          chefs profesionales desde casa o cualquier parte del mundo.
        </dd>
      </p>
      <div>
        <h2 className="fw-bold ms-2 mt-5 ps-5 pb-5 text-dark text-center">
          Sobre las tecnologías Front-end
        </h2>
        <div className="d-flex justify-content-center">
          <img className="ms-2" src={html5} style={{ height: 150 }} />
          <img className="ms-2" src={bootstrap} style={{ height: 150 }} />
          <img className="ms-2" src={css} style={{ height: 150 }} />
          <img className="ms-2" src={javascript} style={{ height: 150 }} />
          <img className="ms-2" src={reactImg} style={{ height: 150 }} />
          <img className="ms-2" src={reactRouter} style={{ height: 150 }} />
        </div>
      </div>
      <div>
        <h2 className="fw-bold ms-2 mt-5 ps-5 pb-5 text-dark text-center">
          Sobre las tecnologías aplicadas Back-end
        </h2>
        <div className="d-flex justify-content-center">
          <img className="ms-2" src={python3} style={{ height: 150 }} />
          <img className="ms-2" src={postgreSql} style={{ height: 150 }} />
          <img className="ms-2" src={flaskImg} style={{ height: 150 }} />
          <div className="d-flex align-items-center">
            <img
              className="ms-2"
              src={sqlalchemyimg}
              style={{ width: 180, height: 80 }}
            />
          </div>
        </div>
      </div>
      <h2 className="fw-bold ms-2 mt-5 ps-5 pb-3 text-dark text-center">
        Sobre nuestro equipo
      </h2>
      <div className="bg-img row justify-content-center m-auto">
        <div className="col-8">
          <div className="ms-5 mt-4 d-flex">
            <div className="">
              <img
                className="card-pic"
                src={HitcherPlatoFinal2}
                style={{ width: 200, height: 250, borderRadius: 5 }}
              />
            </div>
            <div className="fw-bold text-light ms-4 mt-2" align="left">
              <h3>Alexandra Hitcher</h3>
              <p>
                Profesional en Gastronomía y Artes Culinarias - Hola, soy
                Alexandra Hitcher una Chef en crecimiento que te ayudará a
                potenciar tus técnicas y conocimientos culinarios para que
                sorprendas a todos con platillos fantásticos en cualquier
                ocasión!
              </p>
            </div>
          </div>
          <div className="ms-5 mt-4 d-flex">
            <div className="mt-5 pt-5">
              <img
                className="card-pic"
                src={JuanDelfin}
                style={{ width: 210, height: 250, borderRadius: 5 }}
              />
            </div>
            <div className="fw-bold text-light ms-4 mt-5 pt-5" align="left">
              <h3>Juan Carlos Delfin </h3>
              <p>
                <dd>
                  Desarrollador Web - Empecé este curso con la meta de
                  convertirme en programador ya que desde pequeño siempre he
                  sido amante de la tecnología, y quise entender aunque sea una
                  pequeña parte del gran mundo de la programación. Solo me queda
                  agradecer a mis profesores por la paciencia sabiendo que este
                  no es el fin del viaje, sino el inicio de toda una aventura,
                  siempre agradecido con todos ustedes.
                </dd>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
