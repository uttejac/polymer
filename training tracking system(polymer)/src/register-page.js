/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import 'dile-date-without-calendar/dile-date-without-calendar';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
//importing paper elements
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-toast/paper-toast.js';

class Reg extends PolymerElement {
  static get template() {
    return html`
    <style >
    .card {
      margin:  auto;
      padding: 0px;
      color: #757575;
      border-radius: 5px;
      background-color: #fff;
      width:50%;
     
      }
      paper-radio-button{
        padding:20px;
      }
      paper-button{
        margin-left:230px;
      }
      .main{
       
        background-image: linear-gradient(#ffafbd , #ffc3a0);
 
      }
      .card paper-card{
        width:100%;
      }
     
    }
  </style>
  <app-location route="{{route}}"></app-location>
  
  <div class="main">
  <div class="card"> 
    <paper-card>
  <h1 align="center">Register</h1>
 

 <!--including web component elements-->

  <paper-input value="{{firstname}}"  required auto-validate error-message="fill firstname!"  always-float-label label="Firstname"  char-counter maxlength="15"></paper-input>
  <paper-input value="{{lastname}}"required auto-validate error-message="fill lastname!"  always-float-label label="Lastname" char-counter maxlength="15"></paper-input><br>
  <div class="">
  <label>Date of birth</label>
  <dile-date-without-calendar value="{{dob}}"></dile-date-without-calendar>
  
</div>
  <label >Gender
  <paper-radio-button  unchecked>Male</paper-radio-button>
    <paper-radio-button unchecked>Female</paper-radio-button></label>
  <paper-input  value="{{phone}}" always-float-label label="Phone" required auto-validate error-message="enter mobile number!" auto-validate allowed-pattern="[0-9]"></paper-input>
  <label>Courses
  <paper-radio-button unchecked>Computers</paper-radio-button>
    <paper-radio-button unchecked>Core technologies</paper-radio-button>
    <paper-radio-button unchecked>Marketing</paper-radio-button></label><br>
    <label>Online library Access
  <paper-radio-button unchecked>Yes</paper-radio-button>
    <paper-radio-button unchecked>No</paper-radio-button></label><br>
    <label>Payment
  <paper-radio-button unchecked>Online</paper-radio-button>
    <paper-radio-button unchecked>Offline</paper-radio-button></label><br>
    <label>Classes
  <paper-radio-button unchecked>Online</paper-radio-button>
    <paper-radio-button unchecked>Offline</paper-radio-button></label>

  <paper-input  value="{{address}}" always-float-label label="Address" required auto-validate error-message="enter address"></paper-input>
  <paper-input  value="{{street}}" always-float-label label="street " required auto-validate error-message="enter street"></paper-input>
  <paper-input  value="{{city}}" always-float-label label="city" required auto-validate error-message="enter city"></paper-input>
  <paper-input  value="{{pincode}}" always-float-label label="Pincode" required auto-validate error-message="enter pincode!" auto-validate allowed-pattern="[0-9]"></paper-input>
  <paper-input  value="{{phonen}}"  always-float-label label="Alternate number" required auto-validate error-message="enter mobile number to get notifications" auto-validate allowed-pattern="[0-9]"></paper-input>
  

  <paper-button toggles raised class="green" id="toast" on-click="submit">submit</paper-button>
  
  <!--end of paper elements-->
  

</paper-card>
</div>
    `;
  }
  
  
  //on-click event condition checking
  submit(){
    if (this.firstname=='' || this.lastname=='' || this.dob==''|| this.address=='' || this.city==''|| this.street=='' || this.pincode==''|| this.phonen=='')
    {
      alert("enter correct details" )
    }
    else{
    this.set('route.path','/view1')
  }

}
}

window.customElements.define('register-page', Reg);
