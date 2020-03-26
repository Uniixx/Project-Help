import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./Home.css";
import video from "./ProjectHelp.mp4";

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {
      language: "EN"
    };
    this.switchLanguage = this.switchLanguage.bind(this);
  }

  switchLanguage() {
    const { language } = this.state;
    this.setState({ language: language == "EN" ? "FR" : "EN" });
  }

  render() {
    const { language } = this.state;
    return language == "EN" ? (
      <div>
        <header class="header">
          <nav class="navbar navbar-expand-lg fixed-top py-3">
            <div class="container">
              <a href="#" class="navbar-brand font-weight-bold">
                iHelp
              </a>
              <button
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                class="navbar-toggler navbar-toggler-right"
              >
                <i class="fa fa-bars"></i>
              </button>

              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a
                      href="about"
                      class="nav-link text-uppercase font-weight-bold"
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="contact"
                      class="nav-link text-uppercase font-weight-bold"
                    >
                      Contact
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/profile"
                      class="nav-link text-uppercase font-weight-bold"
                    >
                      Login
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/Identity/Account/Register"
                      class="nav-link text-uppercase font-weight-bold"
                    >
                      Register
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#"
                      class="nav-link text-uppercase font-weight-bold"
                      onClick={this.switchLanguage}
                    >
                      FR
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div class="videoContainer">
          <div class="overlay"></div>
          <video autoPlay muted loop id="video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div class="center">
          <p style={{ color: "#fff", textAlign: "center" }}>
            <h1>We connect people to volunteers around the world</h1>A simple
            and elegant plateform aiming to help people that are willings to
            volunteer or find people to help them on their daily basis.
          </p>
        </div>
      </div>
    ) : (
      <div>
        <header class="header">
          <nav class="navbar navbar-expand-lg fixed-top py-3">
            <div class="container">
              <a href="#" class="navbar-brand font-weight-bold">
                iHelp
              </a>
              <button
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                class="navbar-toggler navbar-toggler-right"
              >
                <i class="fa fa-bars"></i>
              </button>

              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a
                      href="about"
                      class="nav-link text-uppercase font-weight-bold"
                    >
                      À propos
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="contact"
                      class="nav-link text-uppercase font-weight-bold"
                    >
                      Contactez-nous
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/profile"
                      class="nav-link text-uppercase font-weight-bold"
                    >
                      Connexion
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/Identity/Account/Register"
                      class="nav-link text-uppercase font-weight-bold"
                    >
                      Inscription
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#"
                      class="nav-link text-uppercase font-weight-bold"
                      onClick={this.switchLanguage}
                    >
                      EN
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div class="videoContainer">
          <div class="overlay"></div>
          <video autoPlay muted loop id="video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div class="center">
          <p style={{ color: "#fff", textAlign: "center" }}>
            <h1>Nous connectons les bénévoles partoût dans le monde</h1>Une
            plateforme simple et élégante visant à aider les gens qui veulent
            offrir du temps comme bénévole ou ceux et celles qui recherche de
            l'aide pour leur quotidien.
          </p>
        </div>
      </div>
    );
  }
}
