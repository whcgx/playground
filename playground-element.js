import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `playground-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PlaygroundElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'playground-element',
      },
    };
  }
}

window.customElements.define('playground-element', PlaygroundElement);
