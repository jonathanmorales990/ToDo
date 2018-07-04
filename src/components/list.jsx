import React, { Component } from 'react';

class List extends Component {

	constructor(props) {
		
		super(props);
		
		
	}

	render() {
		return (

					<div className ="container-todo-principal">
		          		

			  			<div className="container-todo">

				            <div>
				    			<span className="circle-pendentes"></span>
				    			<p className = "titulo-todo">Pendente</p>
				            </div>  
				            <div> 

				            	<ul className="todo-lists-top-titulos">

				                	<li className="todo-lists-top-empty"></li>
				                	<li className="todo-lists-top-descricao">Descrição</li>
				                	<li className="todo-lists-top-resposavel">Responsável</li>
				                	<li className="todo-lists-top-status">Status</li>

				            	</ul>

				            </div>

				            <div className="todo-lists-containers">
				            	{
				            		
				            		this.props.todos.length ? ( this.props.todos.filter(todos => todos.status === 'pendentes').map((todos, i) => {
                    
	                  					return (  	
							            	<ul className="todo-lists" key={i}>
							                	<li className="todo-lists-icon"><i className="icon-drag"></i></li>
							                	<a href="#open-modal-edit"  onClick={this.props.editarOpenModalClick.bind(this,todos)}><li className="todo-lists-descricao">{todos.descricao}</li></a>
							               		<li className="todo-lists-responsavel"> 
							                  		<span className="perfil-foto-mini"></span> 
							                  		{todos.responsavel.nome}
							                	</li>
							                	<li className="todo-lists-status"><span className="circle-pendente-mini"></span>Pendente</li>
							                	<li className="todo-lists-trash"><div onClick={this.props.excluirClick.bind(this,i)}><i className="icon-trash floatdir"/></div></li>
							            	</ul>
					            		)
                    				})) : (null)
				            	}
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

				            <div className="todo-lists-containers">
				            	{
				            		
				            		this.props.todos.length ? ( this.props.todos.filter(todos => todos.status === 'emproducao').map((todos, i) => {
                    
	                  					return (  	
							            	<ul className="todo-lists" key={i}>
							                	<li className="todo-lists-icon"><i className="icon-drag"></i></li>
							                	<a href="#open-modal-edit"  onClick={this.props.editarOpenModalClick.bind(this,todos)}><li className="todo-lists-descricao">{todos.descricao}</li></a>
							               		<li className="todo-lists-responsavel"> 
							                  		<span className="perfil-foto-mini"></span> 
							                  		{todos.responsavel.nome}
							                	</li>
							                	<li className="todo-lists-status"><span className="circle-emproducao-mini"></span>Em produção</li>
							                	<li className="todo-lists-trash"><div onClick={this.props.excluirClick.bind(this,i)}><i className="icon-trash floatdir"/></div></li>
							            	</ul>
					            		)
                    				})) : (null)
				            	}
				            </div>

			  			</div>

			  			<div className="container-todo">
					    	<div>
					    		<span className="circle-resolvido"></span>
					    		<p className= "titulo-todo">Resolvido</p>
					    	</div>
					    	<div> 

				            	<ul className="todo-lists-top-titulos">

				                	<li className="todo-lists-top-empty"></li>
				                	<li className="todo-lists-top-descricao">Descrição</li>
				                	<li className="todo-lists-top-resposavel">Responsável</li>
				                	<li className="todo-lists-top-status">Status</li>

				            	</ul>

				            </div>

				            <div className="todo-lists-containers">
				            	{
				            		
				            		this.props.todos.length ? ( this.props.todos.filter(todos => todos.status === 'resolvido').map((todos, i) => {
                    
	                  					return (  	
							            	<ul className="todo-lists" key={i}>
							                	<li className="todo-lists-icon"><i className="icon-drag"></i></li>
							                	<a href="#open-modal-edit" onClick={this.props.editarOpenModalClick.bind(this,todos)}><li className="todo-lists-descricao">{todos.descricao}</li></a>
							               		<li className="todo-lists-responsavel"> 
							                  		<span className="perfil-foto-mini"></span> 
							                  		{todos.responsavel.nome}
							                	</li>
							                	<li className="todo-lists-status"><span className="circle-resolvido-mini"></span>Resolvido</li>
							                	<li className="todo-lists-trash"><div onClick={this.props.excluirClick.bind(this,i)}><i className="icon-trash floatdir"/></div></li>
							            	</ul>
					            		)
                    				})) : (null)
				            	}
				            </div>
			  			</div>

			        </div>
			);
	}
}

export default List;