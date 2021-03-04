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

import './nav-page.js';
//importing paper elements
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-route.js';

class Services extends PolymerElement {
  static get template() {
    return html`
    <style >
* {
    box-sizing: border-box;
   
  }
  
  body {
    background-color: #f1f1f1;
   
  }
  
  /* Center website */
  
  
  
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
    font-size:17px;
    background-color:lightgrey;
    padding: 10px;
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
  .wrapper{
    
    margin-top:70px;
  }
  h2{
    margin-left:10px;
  }
  .footer{
    font-family: 'Nunito', sans-serif;
    position: relative;
    font-weight: 700;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: none;
    color:black;
    text-align: center;
  }
  @media (max-width: 960px) and (min-width: 501px) {
   
    .wrapper{
      margin:10px;
    }
}

@media (max-width: 500px) {
  
  .wrapper{
    margin:10px;
  }
}
  
  </style>
  <app-location route="{{route}}"></app-location>
  
 <nav-page></nav-page>
 
  
<!---------------------------------main content starts------------------------------------->
<h1>Services provided by us</h1>
<div class="wrapper">

  <div class="row">
    <div class="column">
        <div class="content">
          <h3 class="card-title">Best quality Education</h3>
          <p>A good quality education is one that provides all learners with capabilities they require to become economically productive, develop sustainable livelihoods, contribute to peaceful and democratic societies and enhance individual well-being.</p>
        </div>
    </div>
    <div class="column">
        <div class="content">
          <h3 class="card-title">Course materials</h3>
          <p class="card-text"> The course description orients students by outlining the rationale for the course subject or theme, framing a brief overview of the key content, knowledge and skills to be learned and stating the major learning strategies and activities that students will experience.</p>
        </div>
    </div>
    <div class="column">
        <div class="content">
          <h3 class="card-title">Online library portal</h3>
          <p class="card-text">A library portal is an interface to access library resources and services through a single access and management point for users, combining the circulation and catalog functions of an integrated library system (ILS) with additional tools and facilities.</p>

        </div>
    </div>
    <div class="column">
        <div class="content">
          <h3 class="card-title">Staff Facility</h3>
          <p class="card-text">All Staff Members hired for this training  I supported program or a core subject area must be "highly qualified.95% of the non-core faculty must be Highly Qualified. To be considered Highly Qualified, a teacher must have a minimum of a bachelor's degree"</p>

        </div>
   </div>
</div></div>
<br><br><br><br><br><br>
<!---------------end of main content-------------------------->
<div class="footer" >
   <p>&copy copyrights @brightoption</p>
   </div>
    `;
  }//redirect throught events
 
}


window.customElements.define('services-page', Services);
