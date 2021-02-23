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

class Services extends PolymerElement {
  static get template() {
    return html`
    <style >
* {
    box-sizing: border-box;
  }
  
  body {
    background-color: #f1f1f1;
    padding: 20px;
    font-family: Arial;
  }
  
  /* Center website */
  .main {
    max-width: 1000px;
    margin: auto;
  }
  
  h1 {
    font-size: 50px;
    word-break: break-all;
  }
  
  .row {
    margin: 8px -16px;
  }
  
  /* Add padding BETWEEN each column */
  .row,
  .row > .column {
    padding: 8px;
  }
  
  /* Create four equal columns that floats next to each other */
  .column {
    float: left;
    width: 25%;
  }
  
  /* Clear floats after rows */ 
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* Content */
  .content {
    font-size:18px;
    background-color: white;
    padding: 10px;
  }
  p{
    font-family: 'Cuprum', sans-serif;
  }
  
  @media screen and (max-width: 900px) {
    .column {
      width: 50%;
    }
  }
  
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
    }
  }.wrapper{
    background-image: linear-gradient(#ffafbd , #ffc3a0);
  }
  button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  
  li {
    float: left;
  }
  
  li paper-button {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: 'Righteous', cursive;
  }
  .footer {
    position: relative;
  font-weight: 700;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: none;
    color:black;
    text-align: center;
  }
  </style>
  <app-location route="{{route}}"></app-location>
  
  <ul>
        
  <li><paper-button toggles  raised class="red" on-click="about">About</paper-button></li>
  <li><paper-button toggles raised class="red" on-click="contact">Contact</paper-button></li>
  <li><paper-button toggles raised class="green" on-click="services">Services</paper-button></li>
      
  <li><paper-button toggles raised class="green" on-click="login">login</paper-button></li> 
 
  </ul>
  <div class="wrapper">
  
<!--main content starts-->

<h5 style="margin-left: 25px; margin-top: 10px;font-size:30px;">SERVICES</h5>
<div class="row">
<div class="column">
  <div class="content">
  <h5 class="card-title">Best quality Education</h5>
    <p>A good quality education is one that provides all learners with capabilities they require to become economically productive, develop sustainable livelihoods, contribute to peaceful and democratic societies and enhance individual well-being.</p>
 
  </div>
</div><div class="column">
<div class="content">
<h5 class="card-title">Course materials</h5>
<p class="card-text"> The course description orients students by outlining the rationale for the course subject or theme, framing a brief overview of the key content, knowledge and skills to be learned and stating the major learning strategies and activities that students will experience.</p>
</div>
</div>
<div class="column">
  <div class="content">
  <h5 class="card-title">Online library portal</h5>
  <p class="card-text">A library portal is an interface to access library resources and services through a single access and management point for users, combining the circulation and catalog functions of an integrated library system (ILS) with additional tools and facilities.</p>

  </div>
</div>
<div class="column">
  <div class="content">
  <h5 class="card-title">Staff Facility</h5>
  <p class="card-text">All Staff Members hired for this training  I supported program or a core subject area must be "highly qualified.95% of the non-core faculty must be Highly Qualified. To be considered Highly Qualified, a teacher must have a minimum of a bachelor's degree"</p>

  </div>
</div>
</div>
<br><br><br><br><br><br>
<div class="footer" >
   <p>&copy copyrights @uttej</p>
   </div>
    `;
  }//redirect throught events
  login(){
    this.set('route.path','/logintab')
  }
  about(){
    this.set('route.path','/about')
  }
  contact(){
    this.set('route.path','/contact')
  }
}


window.customElements.define('services-page', Services);
