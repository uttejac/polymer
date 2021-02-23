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
//importing paper elements
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

class Contact extends PolymerElement {
  static get template() {
    return html`
    
    <style include="shared-styles">
    :host {
      display: block;

      padding: 10px;
    }
    .my-contact-card{
        width:100%;
        height:500px;
    }
    .my-contact-header{
        width:100%;
        height:auto;
    }
    .my-contact-map{
        width:100%;
        height:auto;
        display:flex;
    }
    .my-contact-card{
        margin-top:1px;
        margin-bottom:1px;
    }
    .feedback-form{
        width:100%;
    }
    #map-iframe{
        justify-content:center;
    }
    .my-contact-form{
        padding:10px;
        
    }
    .paper-input{
        padding:20px;
    }
    .address{
        padding:10px;
    }
    #my-contact{
        height:auto;
    }
    #map-card{
        width:100%;
        border:1px solid black;
    }
    .my-contact-map{
        width:80%;
        margin:auto;
    }
    #map-iframe{
        width:100%;
    }
    #display-flex{
        display:block;
    }
    .main{
       
      background-image: linear-gradient(#ffafbd , #ffc3a0);

    }
    @media only screen and (max-width: 600px) {
        #display-flex{
            display:block;
        }
      }

  </style>

  <app-location route="{{route}}"></app-location>
  
  <ul>
        
  <li><paper-button toggles  raised class="red" on-click="about">About</paper-button></li>
  <li><paper-button toggles raised class="red" on-click="contact">Contact</paper-button></li>
  <li><paper-button toggles raised class="green" on-click="services">Services</paper-button></li>
      
  <li><paper-button toggles raised class="green" on-click="login">login</paper-button></li> 
 

  </ul>

<!----------------------------- ----------------------   card sample material design ------------------------------------------------>
    
<div class="main">
<div id="my-contact" class="">
        <paper-card class="my-contact-card" heading="">
        <div>
            <paper-card class="my-contact-header my-contact-card" heading="">
                <div class="address">
                    <h4>Contact-info:</h4>
                    <h4>Address: 486,  Marathahalli, 
                    1st Cross Rd, Aswath Nagar,Bengaluru, Karnataka 560037</h4>
                    <h4>Email : uniquehiretech@gmail.com</h4>
                </div>
            </paper-card>
        </div>    

            <div id="display-flex">
                <div id="map-card">
                    <iframe id="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2322216590346!2d77.70079551482178!3d12.956986890865483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1388dbf086ed%3A0x1064cb50b56b89d4!2sUniqueHire%20Consulting%20LLP!5e0!3m2!1sen!2sin!4v1614047583055!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="feedback-form">
                <paper-card class="my-contact-form my-contact-card" heading="Feedback ">
                    <paper-input value={{firstname}} always-float-label label="Name" required auto-validate error-message="fill Name!"></paper-input>
                    <paper-input value="{{email}}" always-float-label label="Email" required auto-validate error-message="fill Email!"></paper-input>
                    <paper-input value="{{message}}" always-float-label label="Message" required auto-validate error-message="fill Message!"></paper-input>
                   <paper-input  value="{{phone}}" always-float-label label="Phone" required auto-validate error-message="enter mobile number!" auto-validate allowed-pattern="[0-9]"></paper-input>
                   <paper-input  value="{{Adress}}" always-float-label label="Address" required auto-validate error-message="fill Address!"></paper-input>
                    
                    
                    <paper-button  toggles raised class="red" on-click="submit" >Send</paper-button>

                </paper-card>
                </div>
            </div>



        </paper-card>
    </div>  
</div>
    
    `;
  }
  //validating fields
  submit(){
    if (this.firstname=='' || this.lastname=='' || this.email=='' || this.phone==''|| this.Adress=='' )
    {
      alert("enter all details" )
    }
    else{
    alert("submited")
  }
}//navigation
about(){
  this.set('route.path','/about')
}login(){
  this.set('route.path','/logintab')
}
services(){
  this.set('route.path','/services')
}
}


window.customElements.define('contact-page', Contact);
