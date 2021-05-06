import React from "react";
import { Link } from "react-router-dom";
import mg from "../../assets/images/mg-logo.jpg";
function Header() {
  return (
    <div className="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#000000" }}
      >
        <Link className="navbar-brand" title='Minature Games Portal' to='/'>
          <div className="top-logo">
              <img
                className="mainlogo "
                alt=""
                width="50"
                height="40"
                src={mg}
              />
          </div>
        </Link>
        <button
          className="navbar-toggler btn-info btn bg-danger"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav text-uppercase mx-auto farkonium mr-auto navb-font">
            <li class="nav-item  mr-5">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                class="nav-link text-center navb-font"
                to='/'
              >
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item mr-5">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                class="nav-link text-center navb-font"
                to="/games"
              >
                Games
              </Link>
            </li>
            <li class="nav-item  mr-5">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                class="nav-link text-center navb-font"
                to='/leaderboard'
              >
                Leaderboard
              </Link>
            </li>
            <li class="nav-item mr-5">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                class="nav-link text-center navb-font"
                to="/contactus"
              >
                Contactus
              </Link>
            </li>
            <li class="nav-item mr-5">
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                class="nav-link text-center navb-font"
                href="#"
              >
                Log-out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
