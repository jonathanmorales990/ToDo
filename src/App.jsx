import React, { Component } from 'react';
import Perfil from './components/perfil.jsx';
import List from './components/list.jsx';
import './css/form.scss';
import './css/App.scss';
import './css/modal.css';
import './css/animate.css';


class App extends Component {

	constructor(props) {
		
		super(props);

		this.state = {
			descricao:'',
			status:'pendentes',
			responsaveisId:1,
			todos:[],
			responsaveis: [
			    {

			    	id:1,
			    	nome:'Usuário 1',
			    	url:'./img/02.jpg'

			    },
			    {

			    	id:2,
			    	nome:'Usuário 2',
			    	url:'./img/02.jpg'

			    },{

			    	id:3,
			    	nome:'Usuário 3',
			    	url:'./img/03.jpg'

			    },{

			    	id:4,
			    	nome:'Usuário 4',
			    	url:'./img/04.jpg'
			    
			    },{

			    	id:5,
			    	nome:'Usuário 5',	
			    	url:'./img/05.jpg'
			    
			    },{

			    	id:6,
			    	nome:'Usuário 6',	
			    	url:'./img/06.jpg'
			    
			    }
			]

		}
		

	}

	onChangeDescricao = (event) => {
		this.setState({descricao: event.target.value});
	}
	onChangeStatus = (event) => {

		this.setState({status: event.target.value});

	}
	onChangeResponsaveis = (event) => {
		this.setState({responsaveisId: event.target.value});

	}
	salva = (event) => {
	
		let todo = {};

		todo.descricao = this.state.descricao;
		todo.status = this.state.status;
		todo.responsavel = this.state.responsaveis.find(responsaveis => responsaveis.id === parseInt(this.state.responsaveisId, 10));
		
		this.setState({ todos: [...this.state.todos, todo] });
	}
	editarOpenModal = (todos) =>{

		this.setState({ descricao:todos.descricao, status:todos.status, responsaveisId:todos.responsavel.id });
		
	}	

	excluir = (index) => {
		
		this.setState({
      		todos: this.state.todos.filter((_, i) => i !== index)
    	});
	}

	editar = () => {
		
		let todo = {};

		todo.descricao = this.state.descricao;
		todo.status = this.state.status;
		todo.responsavel = this.state.responsaveis.find(responsaveis => responsaveis.id === parseInt(this.state.responsaveisId, 10));

	}

	render() {
		return (
				<div className="container-principal">

					{/*MODAL Nova Task INICIO*/}
					<div className="light-modal" id="open-modal-novo" role="dialog" aria-labelledby="light-modal-label" aria-hidden="false">
				        
				        <div className="light-modal-content animated zoomInRight ">
				            <div className="light-modal-header ">
				                <h3 className="light-modal-heading">Nova Task</h3>
				                <a href="#" className="light-modal-close-icon" aria-label="close">&times;</a>
				            </div>
				            
				            <div className="light-modal-body">
				           	
								<div className="form-container">		
									<textarea value={this.state.descricao} onChange={this.onChangeDescricao} className="form-descricao" type="text" placeholder="Descrição"/>

									<select className="form-select" onChange={this.onChangeStatus} value={this.state.status}>
										<option value="pendentes">Pendente</option>
										<option value="emproducao">Em produção</option>
										<option value="resolvido">Resolvido</option>
									</select>
									<select className="form-select" onChange={this.onChangeResponsaveis} value={this.state.responsaveisId} >
										<option value="1">Usuário 1</option>
										<option value="2">Usuário 2</option>
										<option value="3">Usuário 3</option>
										<option value="4">Usuário 4</option>
										<option value="5">Usuário 5</option>
										<option value="6">Usuário 6</option>
									</select>

									<button className="cria-taks-button-form" onClick={this.salva}> <span className="textButton">Adicionar Task</span> </button>

								</div>
										
				            </div>
				        </div>

				    </div>
					{/*MODAL FIM*/}

					{/*MODAL edit Task INICIO*/}
					<div className="light-modal" id="open-modal-edit" role="dialog" aria-labelledby="light-modal-label" aria-hidden="false">
				        
				        <div className="light-modal-content animated zoomInRight ">
				            <div className="light-modal-header ">
				                <h3 className="light-modal-heading">Edit Task</h3>
				                <a href="#" className="light-modal-close-icon" aria-label="close">&times;</a>
				            </div>
				            
				            <div className="light-modal-body">
				           	
								<div className="form-container">		
									<textarea value={this.state.descricao} onChange={this.onChangeDescricao} className="form-descricao" type="text" placeholder="Descrição"/>

									<select className="form-select" onChange={this.onChangeStatus} value={this.state.status}>
										<option value="pendentes">Pendente</option>
										<option value="emproducao">Em produção</option>
										<option value="resolvido">Resolvido</option>
									</select>
									<select className="form-select" onChange={this.onChangeResponsaveis} value={this.state.responsaveisId} >
										<option value="1">Usuário 1</option>
										<option value="2">Usuário 2</option>
										<option value="3">Usuário 3</option>
										<option value="4">Usuário 4</option>
										<option value="5">Usuário 5</option>
										<option value="6">Usuário 6</option>
									</select>

									<button className="cria-taks-button-form" onClick={this.editar}> <span className="textButton">Editar Task</span> </button>

								</div>
										
				            </div>
				        </div>

				    </div>
					{/*MODAL edit task FIM*/}

				    <Perfil/>
				    <List todos={this.state.todos} excluirClick={this.excluir} editarOpenModalClick={this.editarOpenModal}/>
			 

				</div>
			);
	}
}

export default App;
