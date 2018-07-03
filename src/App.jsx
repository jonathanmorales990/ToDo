import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './css/App.scss';
import 'font-awesome/css/font-awesome.min.css'; 

class App extends Component {
  render() {
    return (
      <div className="container-principal">
        <div className="container-perfil">

          <div className="container-perfil-left">

            <div className="perfil-card-background">

              <div className="perfil-card"></div>

            </div>

          </div>

          <div className="container-perfil-right">

            <button className="cria-taks-button"> <i className="fa fa-plus-circle button-icon"/> Adicionar Task </button>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
