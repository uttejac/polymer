/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-route.js';

class Dash extends PolymerElement {
  static get template() {
    return html`
      <style>
     
      .press {
        display: block;  
        padding: 0;     
        margin: 0;      
        width: 100%; 
        background-color:black; 
      
    }
  
  .press li {
        display: inline-block; 
        width: 25%;  
        color:white;         
        text-align: center; 
        
  }
  .press-logo paper-button
      {
        font-size:15px;
      }
          
    @media (max-width: 960px) and (min-width: 501px) {
      .press li { 
        width: 50%;
      }
  }
  
  @media (max-width: 500px) {
      .press li {
         width: 100%; 
        }
  }
     
    </style>
      <app-location route="{{route}}"></app-location>

            <!------------------------------nav tab starts here------------------------------------>

      <ul class="press">
      <li>
        <div class="press-logo">
        <paper-button toggles  raised class="red" on-click="home">home</paper-button>
        </div>
       
      </li><li>
        <div class="press-logo">
        <paper-button toggles  raised class="red" on-click="dashboard">dashboard</paper-button>
        </div>
       
      </li><li>
        <div class="press-logo">
        <paper-button toggles  raised class="red" on-click="add">add student</paper-button>
        </div>
       
      </li><li>
        <div class="press-logo">
        <paper-button toggles  raised class="red" on-click="logout">log-out</paper-button>
        </div>
        
      </li>
    </ul>
<!---nav ends here------->

    `;
  }
 //-----------------------------------------navigation----------------------------------------------
  home(){
    this.set('route.path','/home')
  }
  add(){
    this.set('route.path','/formdata')
    location.reload();
  }
dashboard() {
    this.set('route.path','/dashboard')
  }
  logout(){
    this.set('route.path','/logintab')
    location.reload(); 
  }
}

window.customElements.define('ad-dash', Dash);
