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
      packtodos: { type: Array },
      todoId: { type: String },
      titletodo: { type: String }
    };
  }

  constructor(){
    super();

      this.todos = {};
      this.packtodos = [];
      this.todoId = 'djmtodolist';
      this.titletodo = 'Todos';
      this.completados = 0;
      this.checkedAll = null;

  }

  connectedCallback() {
    super.connectedCallback();
    this.ini = true;

    let storeTodo = localStorage.getItem(this.todoId);
    storeTodo && (this.todos = JSON.parse(storeTodo));
    this.packtodos = this.todos.packtodos;

  }

  todoChecked(index, e){

    e.detail
      ? (this.completados = this.completados + 1)
      : (this.completados = this.completados - 1);


    this.packtodos[index].completados = e.detail;
    this.todos.checkedstate = !!this.completados;

    this.resfrestStorage();
    this.requestUpdate();

  }

  todoCheckedAll(e){

    this.checkedAll = e.detail;

    e.detail
      ? (this.completados = this.packtodos.length )
      : (this.completados = 0);

    this.todos.checkedstate = !!this.completados;

    this.newTodo = this.packtodos;

    this.packtodos = [];

    setTimeout(()=>this.packtodos = this.newTodo, 1);


  }

  addNewTodo(e){

    let value = e.detail.target.value, newItem = {"name": value,"completed": false};
    e.detail.target.value = '';

    value.length && (this.packtodos.unshift(newItem), this.resfrestStorage(), this.requestUpdate())

  }

  removeTodo(index, e){

    let todoItem = e.target.parentElement.querySelector('todo-item');

    if(confirm(`Estas seguro que quieres eliminar la tarea: ${''}`)){

      this.packtodos.splice(index, 1);

      todoItem.task.completed && (this.completados = this.completados - 1);
      this.todos.checkedstate = !!this.completados;

      this.packtodos.length === 0 && (this.completados = 0);

      this.resfrestStorage();
      this.requestUpdate();

    }

  }

  iniCall(){

    this.ini = false;

  }

  resfrestStorage(){

    this.todos.packtodos = this.packtodos;
    localStorage.setItem(this.todoId, JSON.stringify(this.todos));

  }

  render() {

    var checkeState = null, checked = false, ini = null;

    return html `

        <h1 class="titulo">${ this.titletodo }</h1>
        <header class="header">

            ${ this.packtodos.length ? html `<eit-switch @eit-switch-checked="${this.todoCheckedAll}" title="Seleccionar todas las Todo" ?checked="${this.todos.checkedstate}" class="cleckAll"></eit-switch>` : ''}
            <eit-input placeholder="Escribe aquí lo que hay que hacer" @eit-input-enter=${this.addNewTodo}></eit-input>

        </header>
        <div class="todoapp">

            <ul class="todo-list">

                ${this.packtodos.map((item, index) => {
                  
                    this.checkedAll !== null && !checked && (checkeState = this.checkedAll, checked = true, this.checkedAll = null);
                    checkeState !== null && (item.completed = checkeState);
                    
                    this.ini && (item.completed && this.completados++);

                    return html`<li><todo-item @eit-switch-checked="${this.todoChecked.bind(this, index)}" .task=${item}></todo-item><button class="remove" @click="${this.removeTodo.bind(this, index)}" title="borrar este Todo">×</button></li>`

                })}
                ${ checked ? this.resfrestStorage() : '' }
                ${ true ? this.iniCall() : '' }

            </ul>

          </div>`;
  }

}
customElements.define('djm-todo-app', DjmTodoApp);