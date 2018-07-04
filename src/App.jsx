import React, { Component } from 'react';
import perfil from './img/01.jpg';
import './css/App.scss';

class App extends Component {

	constructor(props) {
		super(props);
	}

	onClick = (index) => {
		console.log(index)
		console.log(`vc clicou no index: ${index}`);
	}

	render() {
		return (
			<div className="container-principal">

				<div className="container-perfil">

  				<div className="container-perfil-left">

  					{/*
  					<ul>
  						{[1,2,3,4,5,6,7,8,9].map((item, index) => (
  							<li key={index} onClick={this.onClick.bind(this, index)}>{item}</li>
  						))}
  					</ul>
  					*/}

  					<div className="perfil-card-background" onClick={this.onClick}>
  						<div className="perfil-image" style={{backgroundImage: `url(${perfil})`}} />
  					</div>

  					<div className="container-perfil-status">
  						<span className="circle-status-perfil" />
  					</div>

  					<div className="container-perfil-dados">

  						<div className= "perfil-dados">
  							<p className= "perfil-nome">Lisa Helma Davoz</p>
  							<p className= "perfil-cargo">Senior Dev</p>
  						</div>

  						<div className= "perfil-dados-status-container">
  							<p className= "perfil-dados-titulo">Você possui:</p>

  							<div>
  								<p className= "perfil-dados-numero">02</p>
  								<p className= "perfil-dados-status">pendentes</p>
  							</div>

  							<div>
  								<p className= "perfil-dados-numero">01</p>
  								<p className= "perfil-dados-status">em produção</p>
  							</div> 

  							<div>
  								<p className= "perfil-dados-numero">01</p>
  								<p className= "perfil-dados-status">resolvidas</p>
  							</div> 

  						</div>

  					</div>

  				</div>

  				<div className="container-perfil-right">

  					<button className="cria-taks-button"> <span className="textButton">Adicionar Task</span> </button>

  				</div>

				</div>

        <div className ="container-todo-principal">
  				<div className="container-todo">

            <div>
    					<span className="circle-pendentes"></span>
    					<p className = "titulo-todo">Pendente</p>
            </div>  

  				</div>

  				<div className="container-todo">
            <div>
    					<span className="circle-emproducao"></span>
    					<p className = "titulo-todo">Em produção</p>
            </div>
            <div>    
              <ul className="todo-lists-top-titulos">
                <li className="todo-lists-top-empty"></li>
                <li className="todo-lists-top-descricao">Descrição</li>
                <li className="todo-lists-top-resposavel">Responsável</li>
                <li className="todo-lists-top-status">Status</li>

              </ul>

            </div>
            <div>
              <ul className="todo-lists">
                <li className="todo-lists-icon"><i className="icon-drag"></i></li>
                <li className="todo-lists-descricao">Aerero Supofi Sfsafa</li>
                <li className="todo-lists-responsavel"> 
                  <span className="perfil-foto-mini"></span> 
                  Lisa Helma Davoz
                </li>
                <li className="todo-lists-status"><span className="circle-emproducao-mini"></span>Em produção</li>
                <li className="todo-lists-trash"><div><i className="icon-trash floatdir"/></div></li>
              </ul>
            </div>
  				</div>

  				<div className="container-todo">
            <div>
    					<span className="circle-resolvido"></span>
    					<p className= "titulo-todo">Resolvido</p>
            </div>
  				</div>
        </div>

			</div>
			);
	}
}

export default App;
