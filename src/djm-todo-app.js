import { LitElement, html, css } from 'lit-element';
import './todo-item.js';
import './eit-switch.js';
import './eit-input.js'

class DjmTodoApp extends LitElement {

  static get styles() {
    return [css `
    
        <style>.{}
        
        /* Estilos para el input */
        eit-input {
        
          --eit-input-padding: 16px 16px 16px 43px;
          --eit-input-border-radius: 0;
          --eit-input-border: none;
          --eit-input-background: rgba(0, 0, 0, 0.003);
          --eit-input-box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
          --eit-input-margin: 0;
          --eit-input-font-size: 24px;
          --eit-input-line-height: 1.4em;
        
        }
    
        /* Estilos para los item */
        todo-item {
    
          --todo-item-display: block;
          --todo-item-align-items: normal;
          --todo-item-padding: 15px 14px 11px;
        
        }
        
        /* Estilos para Todo App */
        .todoapp {
      
            background: #fff;
            position: relative;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
        
        }
        
        .titulo {

            font-size: 50px;
            font-weight: 100;
            text-align: center;
            text-rendering: optimizeLegibility;
        }
        
        .todo-list {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        
        .todo-list li {
            font-size: 24px;
            position: relative;
            border-bottom: 1px solid #ededed;            
        }
        
        header {
            position: relative;
        }
        
        header .cleckAll {
            
            position: absolute;
            top: 50%;
            margin-left: 14px;
            transform: translateY(-50%);
            --eit-switch-background-color: #989898;
        }
        
        .todo-list li .remove {
            
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 10px;
            bottom: 0;
            width: 40px;
            height: 40px;
            border: 0;
            background: none;
            margin: auto 0;
            font-size: 24px;
            color: red;
        
        }
    
    `];
  }

  static get properties() {
    return {
      todos: { type: Object },
      packtodos: { type: Array  },
      todoId: { type: String },
      titletodo: { type: String },
      checkedAll: { type: String }
    }
  };

  constructor(){
    super();

      this.todos = {};
      this.packtodos = [];
      this.todoId = 'djmtodolist';
      this.titletodo = 'Todos';
      this.checkedAll = '';

  }

  connectedCallback() {
    super.connectedCallback();

    let storeTodo = localStorage.getItem(this.todoId);
    storeTodo && (this.todos = JSON.parse(storeTodo));
    this.packtodos = this.todos.packtodos;

  }

  todoChecked(e, index){

    e.detail
      ? (this.todos.completados = this.todos.completados + 1)
      : (this.todos.completados = this.todos.completados - 1);

    this.packtodos[index].completed = e.detail;
    this.packtodos[index].todoChecked = e.detail;
    this.todos.checkedstate = !!this.todos.completados;
    this.packtodos = [...this.packtodos];
    this.resfrestStorage();

  }

  todoCheckedAll(e){

    let oldcheckedAll = this.checkedAll.toString(), newValue = e.detail.toString();

    e.detail
      ? (this.todos.completados = this.packtodos.length)
      : (this.todos.completados = 0);

    this.todos.checkedstate = !!this.todos.completados;
    this.checkedAll = oldcheckedAll === newValue ? 'some_' + newValue : newValue;
    this.resfrestStorage();

  }

  addNewTodo(e){

    let value = e.detail.target.value, newItem = {"name": value,"completed": false};
    e.detail.target.value = '';

    if( value.length ){

      this.packtodos = [
        newItem,
        ...this.packtodos
      ];

      this.resfrestStorage()

    }

  }

  removeTodo(e, index){

    let todoItem = e.target.parentElement.querySelector('todo-item');

    if(confirm(`Estas seguro que quieres eliminar la tarea: ${todoItem.task.name}`)){

      todoItem.task.completed && (this.todos.completados = this.todos.completados - 1);
      this.packtodos.splice(index, 1);
      this.todos.checkedstate = !!this.todos.completados;
      this.packtodos.length === 0 && (this.todos.completados = 0);
      this.packtodos = [...this.packtodos];
      this.resfrestStorage();

    }

  }

  resfrestStorage(){

    this.updateComplete.then(()=>(this.todos.packtodos = this.packtodos, localStorage.setItem(this.todoId, JSON.stringify(this.todos))));

  }

  render() {

    return html `

        <h1 class="titulo">${ this.titletodo }</h1>
        <header class="header">

            ${ this.packtodos.length ? html `<eit-switch @eit-switch-checked="${this.todoCheckedAll}" title="Seleccionar todas las Todo" ?checked="${this.todos.checkedstate}" class="cleckAll"></eit-switch>` : ''}
            <eit-input placeholder="Escribe aquí lo que hay que hacer" @eit-input-enter=${this.addNewTodo}></eit-input>

        </header>
        <div class="todoapp">

            <ul class="todo-list">
                
                ${this.packtodos.map((item, index) => {
                   
                    return html`<li><todo-item @eit-switch-checked="${(event)=>this.todoChecked(event, index)}" .checkedAll="${this.checkedAll}" .task=${item}></todo-item>    
                                 <button class="remove" @click="${(event)=>this.removeTodo(event, index)}" title="borrar este Todo">×</button>
                                </li>`
      
                })}
                
            </ul>

          </div>`;
  }

}
customElements.define('djm-todo-app', DjmTodoApp);