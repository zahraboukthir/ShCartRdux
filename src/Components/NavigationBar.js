import React from "react";

import { Link } from "react-router-dom";
import "./nav.css";
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
const NavigationBar = () => {
  return (
    <div className="Logoc">
      <Link to="/">
        {" "}
        <img
          src="https://img.freepik.com/vecteurs-libre/remises-vente-saisonnieres-presente-achat-visite-boutiques-shopping-luxe-bons-reduction-promotionnels-offres-speciales-vacances-illustration-metaphore-concept-isole-vecteur_335657-2766.jpg?w=2000"
          className="logo_carte"
          alt="imagelogo"
          id="logoc"
        />
      </Link>
      <div>
        <BsSearch />

        <input type="text" id="search" placeholder="search" />
      </div>
      <div className="access">
        <Link to="/notifications" id="notification">
          <IoMdNotifications />
        </Link>
        <Link to="/panier" id="cart">
          <FaShoppingCart />
        </Link>

        <Link to="/account" id="account">
          <CgProfile />
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
