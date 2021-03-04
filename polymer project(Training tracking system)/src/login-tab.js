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
import '@material/mwc-icon';
import '@polymer/app-route/app-route.js';

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
          width:40%;
          margin-top: 60px;        
          }
         
          cursor: default;
        }
        paper-button{
          background-color:green;
          color:white;

          
        }
        paper-tab
        {
          font-size:16px;
        }
        .card paper-card{
          width:100%;
          border-radius:10px;
          padding:20px;
        }        
        .main{
          max-height:1500px;
          background-image: linear-gradient(#ABC9F4,#C3B3E9);
        }       
         paper-button{
          margin: auto;
        }
        .card>.icon {
          font-size: 26px;
          color: #a5aaad;
        }
      
        @media screen and (max-width: 600px) {
        .card{
          width: 100%;
        }
      }
     
    </style>
    <app-location route="{{route}}"></app-location>
     
    <!-------------------including admin and student login tabs-------------------------->
    
    <paper-tabs attr-for-selected="data-route" selected="{{selected}}" >
 
    <paper-tab data-route="0">ADMIN LOGIN</paper-tab>
    <paper-tab data-route="1">STUDENT LOGIN</paper-tab>
   
  </paper-tabs>
  
  
  <iron-pages selected="{{selected}}">

  <div class="main" data-route="0"><br><br>

  <app-location route="{{route}}"></app-location>
 
 
  <div class="card"> 
    <paper-card>
      <h1 align=center>Login</h1>
    
    <!----------------- including admin input details-------------------->
    
      <paper-input label="Username" required auto-validate error-message="fill Username!" value="{{Username}}"></paper-input>
      <paper-input label="password " type="password" value="{{password}}" max-length="10"></paper-input><br><center>
      <paper-button toggles raised class="green" on-click="success" >submit</paper-button>
      <paper-button toggles raised class="green" on-click="cancel" >cancel</paper-button></center>
    </paper-card>
  </div>


    </div>
    <div class="main"  data-route="1"><br><br>
    <div class="card"> 
    <paper-card>
    <h1 align=center>Login</h1>
    
    <!----------------------------- including user input details--------------------------->

    <paper-input label="Username"required auto-validate error-message="fill Username!" value="{{Username}}"></paper-input>
    <paper-input label="password" type="password" value="{{password}}" max-length="10"></paper-input><center>
    <paper-button toggles raised class="green" on-click="submit">submit</paper-button>
    <paper-button toggles raised class="green" on-click="cancel" >cancel</paper-button>
    <h4>New User? Create account !</h4>
    <paper-button toggles raised class="green" on-click="redirect">Create Account</paper-button></center>
    </paper-card>
    </div>


   
    </iron-pages>




    `;
  }
  static get properties() {
    return {
      selected: {
        value: 0
      }
    };
  }
  //------------------------------event listner clicking----------------------------
  //---------------------------validation for admin login--------------------------
  success(){
     if (this.Username=='' )
    {
      alert("fill the usernname " )
    }
    else if( this.Username!='admin' ){
      alert("enter correct name")
    }
    else if( this.password=='' ){
      alert("enter password")
    } 
    else if( this.password!='ACu@123' ){
      alert("enter correct password")
    }
    
    else{
    this.set('route.path','/home')
    alert('login success')
  }
}
//----------------------------------validation for student login-------------------------------------
  submit(){
    if (this.Username=='' )
    {
      alert("fill the usernname " )
    }
    else if( this.Username!='uttej' ){
      alert("enter correct name")
    }
    else if( this.password=='' ){
      alert("enter password")
    } 
    else if( this.password!='ACu@123' ){
      alert("enter correct password")
    }
    
    else{
    this.set('route.path','/studentpage')
    alert('login success')
    location.reload();
  }
}
  //-----------------------------redirect event click-----------------------------------------
  redirect(){
    this.set('route.path','/register')
  }
  cancel(){
    this.set('route.path','/common')
  }
}


window.customElements.define('login-tab', LoginTab);
