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
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/app-route/app-route.js';

class Track extends PolymerElement {
  static get template() {
    return html`
<style>
paper-card {
  width:30%;
  
  margin-top:80px;
  margin-left:450px;
  padding:10px;
  }
 
  .card{
    padding:10px;
  }
  .data{
    padding:10px;
  }
  .container {
    background-image: linear-gradient(#ffafbd , #ffc3a0);
 
  }

</style>
<app-location route="{{route}}"></app-location>
        <div class="container">
<h4 align="right"><paper-button toggles raised class="green" on-click="back">back</paper-button></h4></h2>
  
<paper-card heading="STUDENT DETAILS ">
<div class="card">ID:<span class="data">5231</span></div>

<div class="card">Name:<span class="data">{{trackData.student}}</span></div>
 
<div class="card">Course:<span class="data" >Computer Networks</span></div>
<div class="card">Code:<span class="data">EE501</span></div>
<div class="card">Status:<span class="data">On Progress </span></div>
</paper-card><br><br><br><br><br><br><br><br>
</div>
    `;
  }

     static get properties() {
    return {
     
      trackData:{
        type:Object,
        value:{},
        notify:true
      }
    };
}
back(){
  this.set('route.path','/dashboard')
}
}


window.customElements.define('track-page', Track);
