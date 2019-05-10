import { LitElement, html, css } from 'lit-element';
import { DjmUtilites } from "./etc/utilities";

class EitInput extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      placeholder: { type: String },
      disabled: { type: Boolean },
      value: { type: String }
    };
  }
  constructor() {
    super();

    this.disabled = false;
    this.placeholder = '';
    this.value = '';

  }
  static get styles() {

    return css`
      :host {
        display: block;
        margin-bottom: 12px;
      }
      label {
        display: block;
        color: #888;
        margin-bottom: 4px;
        color: #59e
      }
      input {
        
        box-sizing: border-box;
        border-radius: var(--eit-input-border-radius, 5px);
        border: var(--eit-input-border, 1px solid #888);
        font-size: var(--eit-input-font-size, 1em);
        padding: var(--eit-input-padding, 5px);
        box-shadow: var(--eit-input-box-shadow);
        margin: var(--eit-input-margin);
        line-height: var(--eit-input-line-height);
        width: 100%;
        
      }
      input:focus {
        outline: none;
        border-color: #6af
      }
      input::placeholder {
        color: #ccc;
      }
      input:disabled {
        background-color: #f5f5f5;
        border-color: #eee;
      }
    `;
  }
  render() {

    return html`
      <div>
        ${ this.label 
          ? html`<label for="textField">${this.label}</label>` 
          : ''
        }
        <input 
          type="text" 
          id="textField"
          placeholder="${this.placeholder}" 
          ?disabled="${this.disabled}"
          @keypress="${this.lookForEnter}"
          .value="${this.value}"
        >
      </div> 
    `;
  }



  lookForEnter(e) {

    let keycode = (e.keyCode ? e.keyCode : e.which), target = DjmUtilites.originalTarget(e);

    if (keycode == '13') {

        this.dispatchEvent(new CustomEvent('eit-input-enter', {
          detail: {target}
        }));
    }
  }
}
customElements.define('eit-input', EitInput);