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
import '@polymer/iron-media-query/iron-media-query.js';


class  StudentLogin extends PolymerElement {
  static get template() {
    return html`
    <style >
    {
    .card {
      margin: 24px;
      padding: 16px;
      color: #757575;
      border-radius: 5px;
      background-color: #fff;
      width:35%;
      height:25%;
      margin-left:385px;
      }
     
      cursor: default;
    }
  
    .main{
       
      background-image: linear-gradient(#fdfbfb , #ebedee);
    
    }
  }
  </style>
  <div class="main">
  <app-location route="{{route}}"></app-location>
 
  <img src="../images/manifest/logo.gif" width=70 height="70" align="left"><h2  >Bright Option</h2>
  <h1 align="center">Welcome to Bright Option Educational training</h1>
  
    <div class="card"> 
    <h2 align=center>Login</h2>
    
    <!------------------- including user input details----------------------->

<paper-input label="Username"required auto-validate error-message="fill Username!" value="{{Username}}"></paper-input>
<paper-input label="password input" type="password" value="{{password}}" max-length="10"></paper-input>
    <paper-button toggles raised class="green" on-click="submit">submit</paper-button>
    <h4>if dont have account register here
    <paper-button toggles raised class="green" on-click="redirect">Register</paper-button></h4>
  
    </div><br><br>
   
    `;
  }
  //event listner clicking
  submit(){
    if (this.firstname=='' || this.password=='' )
    {
      alert("enter correct details" )
    }
    else{
    this.set('route.path','/student')
  }
}
  //redirect event click
  redirect(){
    this.set('route.path','/register')
  }
}


window.customElements.define('studentlogin', StudentLogin);
