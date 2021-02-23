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
import '@polymer/paper-tabs/paper-tabs.js';
  import '@polymer/paper-tabs/paper-tab.js';
  import '@polymer/paper-card/paper-card.js';

class LoginTab extends PolymerElement {
  static get template() {
    return html`
    <style>
    
    {
        .card {
          margin: 0 auto;
          padding: 0px;
          color: #757575;
         
          border-radius: 10px;
          background-color: #fff;
          width:35%;
         
          font-family: 'Changa', sans-serif;
          }
         
          cursor: default;
        }
        paper-tab
        {
          font-family: 'Righteous', cursive;
          font-size:16px;
        }
        .card paper-card{
          width:100%;
          border-radius:10px;
          padding:20px;
        }
        
      
        .main{
           
          background-image: linear-gradient(#ffafbd , #ffc3a0);
        height:700px;
        }
        paper-button{
          margin: auto;
          font-family: 'Changa', sans-serif;
        }
      }
     
    </style>

    <!--including admin and student login tabs-->
    
    <paper-tabs selected="{{selected}}">
 
    <paper-tab>Admin Login</paper-tab>
    <paper-tab>Student Login</paper-tab>
   
  </paper-tabs>
  
  
  <iron-pages selected="{{selected}}">

  <div class="main"><br><br>
  <app-location route="{{route}}"></app-location>
 
 
  <div class="card"> 
    <paper-card>
      <h2 align=center>Login</h2>
    
    <!-- including admin input details-->

      <paper-input label="Username"required auto-validate error-message="fill Username!" value="{{Username}}"></paper-input>
      <paper-input label="password input" type="password" value="{{password}}" max-length="10"></paper-input><br>
      <paper-button toggles raised class="green" on-click="success" >submit</paper-button>
    </paper-card>
  </div>


    </div>
    <div class="main"><br><br>
    <div class="card"> 
    <paper-card>
    <h2 align=center>Login</h2>
    
    <!-- including user input details-->

<paper-input label="Username"required auto-validate error-message="fill Username!" value="{{Username}}"></paper-input>
<paper-input label="password" type="password" value="{{password}}" max-length="10"></paper-input>
    <paper-button toggles raised class="green" on-click="submit">submit</paper-button>
    <h4>if dont have account register here</h4>
    <paper-button toggles raised class="green" on-click="redirect">Register</paper-button>
    </paper-card>
    </div>


   
    </iron-pages>




    `;
  }
  //event listner clicking
  success(){
    if (this.firstname=='' || this.password=='' )
    {
      alert("enter correct details" )
    }
    else{
    this.set('route.path','/home')
  }
}
  submit(){
    if (this.firstname=='' || this.password=='' )
    {
      alert("enter correct details" )
    }
    else{
    this.set('route.path','/studentpage')
  }
}
  //redirect event click
  redirect(){
    this.set('route.path','/register')
  }
}


window.customElements.define('login-tab', LoginTab);
