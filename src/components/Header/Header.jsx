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
                width="60"
                height="50"
                src={mg}
              />
          </div>
        </Link>
        <button
          className="navbar-toggler btn-danger btn bg-danger"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-flex justify-content-center " id="navbarTogglerDemo02">
          <ul class="navbar-nav text-uppercase ml-auto farkonium mr-auto navb-font">
            <li class="nav-item  mr-5">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                class="nav-link navb-font"
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
                class="nav-link navb-font"
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
                class="nav-link navb-font"
                to='/'
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
                class="nav-link navb-font"
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
                class="nav-link navb-font"
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
