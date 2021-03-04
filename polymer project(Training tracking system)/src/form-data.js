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
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-button/paper-button.js';

class FormData extends PolymerElement {
  static get template() {
    return html`
    
      <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }
      .card {
        margin: 0 auto;
        padding: 10px;
        color: #757575;        
        border-radius: 10px;
        width:40%;
        background-color:white;
        margin-top:20px;
        }
    .card paper-card{
        width:50%;
        border-radius:10px;
       margin-top:150px;
       margin-left:200px;
    }
    paper-button{
      background-color:green;
      color:white;
      
    }
     @media screen and (max-width: 600px) {
        
        .card paper-card{
              width:50%;
              padding:10px;
              border-radius:10px;
              margin-top:150px;         
        }       
    }  
      @media only screen and (max-device-width: 1180px){
        .column1 {
          position:relative;
          
         
          width:100% !important;  
        }
        h1{
          width:100%;
          font-weight:700;
          
        }
        .card{
            width:88%;
            padding:10px;
          }
      }
    </style>
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
    </app-location>
  
    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>
    

    <h1 align="center">New student registraton form</h1>
    <div class=" card" >
     
      <paper-input always-float-label label="Name" value="{{username}}" auto-validate pattern="[a-zA-Z]*" error-message="Enter valid details" char-counter maxlength="10" required></paper-input>
      <paper-input always-float-label label="mobile"  value="{{mobile}}" required auto-validate error-message="enter mobile number!" auto-validate allowed-pattern="[0-9]" maxlength="10"></paper-input>
      <paper-input always-float-label label="Email id" value="{{email}}" auto-validate pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" error-message="Enter valid details" required></paper-input>
      <paper-input always-float-label label="course" value="{{course}}" auto-validate pattern="[a-zA-Z]*" error-message="Enter course" required></paper-input><br>
        
    <paper-button raised class="custom indigo" on-click="Success">Submit </paper-button>
    <paper-button raised class="custom indigo" on-click="cancel">cancel </paper-button>
    
   
    </div>

  
    `;
  }
  static get properties() {
    return {
        fname: {                 // THE DATA IS STORED IN THE OBJECT USERNAME AND STORED GLOBALLY 
            type: String
            },
            email:{
              type:String
            },
            phone:{
              type:Number
            },
            course:{
                type:String
            },
    
          regData:{
            type:Object,
            value:{},
            notify:true 

      }
    };
  }

  Success(){
    this.regData={
        "fname":this.username,
        "phone":this.mobile,
        "email":this.email,
        "course":this.course
      }
   
      
//---------------validating-----------------

      if(this.username=='' ||this.mobile=='' || this.email=='' || this.course==''){
        alert("enter all details")
      }
      else{
    
    this.set('route.path','track')
   
  }
}
cancel(){
  this.set('route.path','home')
}
}
window.customElements.define('form-data', FormData);
