import React, { Component } from "react";
import  DYH  from "../../img/D&H_Proyecto_final_LOGO Transparente.png";

export const Footer = () => (
  <div className="container-fluid mt-0 p-0">
    <footer
      className="bg-dark align-items-center align-middle"
      style={{ paddingTop: "10px" }}
    >
      <div className="row justify-content-center bg-transparent">
        <div className="col-6 col-md-2 mb-3 mt-3 bg-transparent">
          <h5 className=" bg-transparent text-white">Información</h5>
          <ul className="nav flex-column bg-transparent">
            <li className="nav-item mb-2 bg-transparent">
              <a href="#" className="nav-link p-0 text-white ">
                Sobre Nosotros
              </a>
            </li>
            <li className="nav-item mb-2 bg-transparent">
              <a href="#" className="nav-link p-0 text-white ">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3 mt-3 bg-transparent">
          <h5 className="bg-transparent text-white ">Síguenos en Redes</h5>
          <ul className="nav flex-column bg-transparent px-3">
            <li className="ms-3 bg-transparent">
              <a className="link-dark" href="#">
                <i className="fa-brands fa-twitter fs-4 bg-transparent text-white"></i>
                <i className="fa-brands fa-instagram fs-4 bg-transparent ms-3 text-white"></i>
                <i className="fa-brands fa-facebook fs-4 bg-transparent ms-3 text-white"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-evenly pt-2 border-top bg-transparent">
        <img
          src={DYH}
          alt="..."
          className="bg-logo pb-3"
          style={{ width: "180px", height: "130px" }}
        />
        <div className="col-6 col-md-3 mb-3 bg-transparent">
          <p className="bg-transparent fw-bold text-white" align="right">
            D&H © 2023 Todos los derechos reservados.
          </p>
          <ul className="nav flex-column bg-transparent">
            <li className="nav-item bg-transparent">
              <a href="#" className="nav-link p-0 text-white text-center mt-4 " align="right">
                Hecho en Venezuela con{" "}
                <i className="fa-regular fa-heart bg-transparent"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
);
