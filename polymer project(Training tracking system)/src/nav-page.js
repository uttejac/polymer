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

class Navbar extends PolymerElement {
  static get template() {
    return html`
      <style>
    
      .press {
          display: block;  
          padding: 0;     
          margin: 0 !important;      
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

            <!----------------------------nav starts here----------------------------->
                  <ul class="press">
                    <li>
                      <div class="press-logo">
                      <paper-button toggles  raised class="red" on-click="about">About</paper-button>
                      </div>
                     
                    </li><li>
                      <div class="press-logo">
                      <paper-button toggles  raised class="red" on-click="services">services</paper-button>
                      </div>
                     
                    </li><li>
                      <div class="press-logo">
                      <paper-button toggles  raised class="red" on-click="contact">contact</paper-button>
                      </div>
                     
                    </li><li>
                      <div class="press-logo">
                      <paper-button toggles  raised class="red" on-click="login">login</paper-button>
                      </div>
                      
                    </li>
                  </ul>
                  <!---nav ends here------->

    `;
  }
 //---------------------------------------navigation--------------------------------------------
  about(){
    this.set('route.path','/about')
  }
  
services(){
  this.set('route.path','/services')
}
contact(){
  this.set('route.path','/contact')
}
login(){
  this.set('route.path','/logintab')
}
}

window.customElements.define('nav-page', Navbar);
