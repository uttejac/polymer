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
import '@polymer/app-route/app-route.js';
import '@polymer/paper-card/paper-card.js';


class HomeApp extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
    
* {
    box-sizing: border-box;
  }
  
  body {
    background-color: #f1f1f1;
    padding: 20px;
    font-family: Arial;
  }
  
  /* main page */
  .main {
    max-width: 1300px;

    margin: auto;
    background-image: linear-gradient(#ffafbd , #ffc3a0);
   
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
    background-color: white;
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
    font-size:18px;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: 'Ropa Sans', sans-serif;
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
  <!--including admin nav-->
      <li><paper-button toggles raised class="green" on-click="home" value="hom">HOME</paper-button></li>
     <li><paper-button toggles raised class="green" on-click="dashboard">DASHBOARD</paper-button></li>
    
      </ul>
      <!--main page starts here-->
  <div class="main">

  
  <h2><img src="../images/manifest/logo.gif" width=50 height="50">Bright Option
  <h4 align="right"><paper-button toggles raised class="green" on-click="back">back</paper-button></h4></h2>
  
  <hr>
  
  <h2>Home</h2>
  
  <p>These are some major topics that were taught in this Bright Option based on the students interest.</p>
  
  <!-- including concepts images -->
  <div class="row">
  <div class="column">
  <div class="content">
    
     <paper-card  image="../images/manifest/bd.jpeg" alt="Big data">
     <h3>Big Data</h3>
   
    <div class="card-content">
    <p>Big Data is a collection of data that is huge in volume, yet growing exponentially with time. It is a data with so large size and complexity that none of traditional data management tools can store it or process it efficiently.</p>
    </div>
    <button>Read more</button>
    </paper-card>
    
  </div>
</div>
<div class="column">
  <div class="content">
     <paper-card  image="../images/manifest/cd.jpg" alt="core development" style="width:100%;height:50%;">
     <h3>Core Development</h3>
     <div class="card-content">
     <p>Core Design is a convergence of system development and media production methodology.And in order not to refer system development or media production the term creation is chosen.The agile principles are adopted in it.</p>
  
    </div>
    <button>Read more</button>
    </paper-card>
    
  </div>
</div>
<div class="column">
  <div class="content">
    
     <paper-card image ="../images/manifest/cn.jpg" alt="computer networks" style="width:100%">
     <div class="card-content">
     <h3>CCNA</h3>
     <p>A computer network is a group of computers that use a set of common communication protocols over digital interconnections for the purpose of sharing resources located on or provided by the network nodes</p>
  </div>
    <button>Read more</button>
    </paper-card>
    
  </div>
</div>
<!--column-->
    <div class="column">
      <div class="content">
           <paper-card image ="../images/manifest/dg.jpeg" alt="digital marketing" style="width:100%">
         <div class="card-content">
          <h3>Digital Marketing</h3>
        <p>At a high level, digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps. Using these online media channels, digital marketing is the method by which companies endorse goods, services, and brands.</p>    
     <button>Read more</button>
      </div>
    </div>
  
    </div></div>
    
  <div class="content">
  <paper-card image ="../images/manifest/sd.png" alt="software development" align="center" style="width:50%;margin-left:320px;">
   
  <div class="card-content">
  <h3>Software development</h3>
  <p>Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. </p>
  <p>It is a process of writing and maintaining the source code, but in a broader sense, it includes all that is involved between the conception of the desired software through to the final manifestation of the software.</p>
  <button>Read more</button>
  </div>
  </div>
  <!-- end of main content -->
  </div>
  <div class="footer" >
   <p>&copy copyrights @uttej</p>
   </div>


    `;
  }
  
 //routing to view3 page
  back(){
    this.set('route.path','/view3')
  }
  //navigation part
  home(){
    this.set('route.path','/home')
  }
 about(){
    this.set('route.path','/about')
  }
  services(){
    this.set('route.path','/services')
  }
contact() {
  this.set('route.path','/contact')
}
feedback() {
  this.set('route.path','/feedback')
}
dashboard() {
  this.set('route.path','/dashboard')
}
}


window.customElements.define('home-app', HomeApp);
