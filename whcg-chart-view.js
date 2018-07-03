import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@whcg/whcg-number-field'; 
import '@whcg/whcg-number-field-box';

class MyElement extends LitElement {

	static get properties() {
		return {
		  itemsA: Array,
		  itemsB: Array,
		  amountA: Number,
		  amountB: Number,
		  user: Boolean,
		};
	  }
	
	  constructor() {
		super();
	
		this.itemsA = ['hello', 'world'];
		this.itemsB = ['foo', 'bar'];
		this.amountA = 1;
		this.amountB = 2;
		this.user = false;
	  }
	
	  // If you are exposing a public property that is computed based on two properties, you can
	  // just create a getter that combines the two.
	  get totalAmount() {
		return this.amountA + this.amountB;
	  }

	  _render({ user, itemsA, itemsB, amountA, amountB }) {
		// With Polymer template, we had to set up special bindings for properties that
		// combine to create new values so that the template system picks up the changes.
		//
		// With LitElement, we can just compute the combined properties inside the _render
		// callback.
		//
		// Remember, it's all plain javascript so you can use whatever method suits you best.
		const items = this._computeItems(itemsA, itemsB);
	
		let userMessage;
		if (user) {
			userMessage = html`Welcome ${user}`;
		} else {
			userMessage = html`<whcg-number-field value="${amountA + amountB}"></whcg-number-field>`;
		}

		return html`
			${userMessage}
		  <div>The computed messages are: [${items.join(', ')}]</div>
		  <!-- For simple computed properties, you can just compute them inline -->
		  <div>The computed amount is: [${amountA + amountB}]</div>
		  <whcg-number-field value="6" on-valueoutput-changed="${this._onDecrement.bind(this)}"></whcg-number-field>
		  <whcg-number-field value="6" on-valueoutput-changed="${this._onIncrement.bind(this)}"></whcg-number-field>
		  
		`;
	  }
	
	  _onDecrement(e) {
		  console.log('here');
		  this.amountA = Number(e.detail.value);
		  this.user = true;
	  }

	  _onIncrement(e) {
		console.log('here');
		this.amountB = Number(e.detail.value);
		this.user = false;
	}
	  _computeItems(a, b) {
		return [...a, ...b];
	  }
	
	}
customElements.define('my-element', MyElement);