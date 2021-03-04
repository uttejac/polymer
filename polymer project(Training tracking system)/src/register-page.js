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
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';


class Reg extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
    .card {
      margin:  auto;
      padding: 10px;
      color: #757575;
      border-radius: 5px;
      background-color: #fff;
      width:50%;    
      }
      paper-radio-button{
        padding:20px;
      }
      paper-button{
       
          background-color:green;
          color:white;         
         
      }     
     
      .main{
        max-height:1500px;
        background-image: linear-gradient(#ABC9F4,#C3B3E9);
      } 
      @media screen and (max-width: 600px) {
        .card{
          width: 100%;
        }
      }
      paper-dropdown-menu{
        width:50%;
      }
      
  </style>
  <app-location route="{{route}}"></app-location>
  
  <div class="main">
  <div class="card"> 
   
  <h1 align="center">Create Account</h1>
 

 <!-------------------------------including web component elements--------------------------->

  <paper-input value="{{firstname}}"  required auto-validate error-message="fill firstname!"  always-float-label label="Firstname"  char-counter maxlength="15"></paper-input>
  <paper-input value="{{lastname}}" required auto-validate error-message="fill lastname!"  always-float-label label="Lastname" char-counter maxlength="15"></paper-input><br>
  <paper-input always-float-label label="Email id" value="{{email}}" value="{{email}}" auto-validate pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" error-message="Enter valid details" required></paper-input><br>
  
  <label>Date of birth</label> 
  <paper-input type="date" value="{{date}}" required auto-validate error-message="fill date!"></paper-input>
 
    
  <paper-input  value="{{phone}}" always-float-label label="Phone" required auto-validate error-message="enter mobile number!" auto-validate allowed-pattern="[0-9]" maxlength="10"></paper-input>
  
  <paper-dropdown-menu label="Courses" value="{{Course}}"  required auto-validate error-message="enter code">
      <paper-listbox slot="dropdown-content" class="dropdown-content">
        <paper-item>Computers</paper-item><br>
        <paper-item>Core technologies</paper-item> 
        <paper-item>Marketing</paper-item> 
         
      </paper-listbox>
    </paper-dropdown-menu><br>

    <paper-dropdown-menu label="Online library Access" value="{{library}}"  required auto-validate error-message="enter code">
      <paper-listbox slot="dropdown-content" class="dropdown-content">
        <paper-item>yes</paper-item><br>
        <paper-item>no</paper-item> 
        
      </paper-listbox>
    </paper-dropdown-menu><br>

    <paper-dropdown-menu label="Payment" value="{{payment}}"  required auto-validate error-message="enter code">
    <paper-listbox slot="dropdown-content" class="dropdown-content">
      <paper-item>Online</paper-item><br>
      <paper-item>  Offline</paper-item>      
    </paper-listbox>
  </paper-dropdown-menu><br>
  <paper-dropdown-menu label="Classes" value="{{Classes}}"  required auto-validate error-message="enter code">
  <paper-listbox slot="dropdown-content" class="dropdown-content">
    <paper-item>Online</paper-item><br>
    <paper-item>Offline</paper-item>      
  </paper-listbox>
</paper-dropdown-menu>


        <paper-input  value="{{address}}" always-float-label label="Address" required auto-validate error-message="enter address"></paper-input>
        <paper-input  value="{{street}}" always-float-label label="street " required auto-validate error-message="enter street"></paper-input>
        <paper-input  value="{{city}}" always-float-label label="city" required auto-validate error-message="enter city"></paper-input>
        <paper-input  value="{{pincode}}" always-float-label label="Pincode" required auto-validate error-message="enter pincode!" auto-validate allowed-pattern="[0-9]" maxlength="6"></paper-input>
        

     <paper-button toggles raised class="green" id="toast" on-click="submit">submit</paper-button>
     <paper-button toggles raised class="green" id="toast" on-click="cancel">Cancel</paper-button><br><br>
  <!-------------------end of web component elements------------------------->
  

  </div>
    `;
  }

  

  
  
  
  //on-click event condition checking
  
  submit(){
    if (this.firstname=='' )
    {
      alert("fill the usernname " )
    } 
    else if (this.lastname=='' )
    {
      alert("fill the lastname " )
    }
    else if (this.email=='' )
    {
      alert("enter email" )
    }
  
    else if (this.date=='' )
    {
     
      alert("enter date" )
    }
    else if ( this.phone=='')
    {
      alert("enter mobile number")
    }
    
    
    else  if (this.Course==null || this.library==null || this.payment==null || this.Classes==null )
    {
      alert("enter dropdown values " )
    }
    else if(  this.address=='' || this.city==''|| this.street=='' || this.pincode==''){
      alert("enter address details ")
    }
   
    else{
    this.set('route.path','/logintab')
    alert('succesfully registered')
    location.reload();
  }

  



}
cancel(){
  this.set('route.path','/logintab')
}
}

window.customElements.define('register-page', Reg);
