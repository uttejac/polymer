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
import './ad-dash.js';

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
    
  }
  
  /*---------------- main page ---------------------*/
  .main {
    max-width: 1300px;

    margin: auto;
    background-image: linear-gradient(#ABC9F4,#C3B3E9);
   
  }
  
  h1 {
    font-size: 50px;
    word-break: break-all;
  }
  
  .row {
    margin: 8px -16px;
  }
  
  /*-------------------------- Add padding BETWEEN each column----------------- */
  .row,
  .row > .column {
    padding: 8px;
  }
  
  /*------------------------ Create four equal columns that floats next to each other--------------- */
  .column {
    float: left;
    width: 25%;
  }
  
  /* -------------------Clear floats after rows------------------------ */ 
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
  .contents {
    
    padding: 10px;
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
  margin: auto;
  
  overflow: hidden;
  background-color: #333;
}

.logout paper-button{
  background-color: #4CAF50; 
  color:white;
  font-size:17px;
}

li {
  float: right;
}

li paper-button {
  display: block;
  color: white;
  font-size:18px;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
h2 {
  margin-left:15px;
 
}
.col{
  width:50%;
  margin-left:320px;
}

@media (max-width: 960px) and (min-width: 501px) {
   
  .main{
    margin:10px;
  }
  .col{
    width:100%;
    margin-left:-100px;
   
  }
  .column {
    width: 50%;
  }
}

@media (max-width: 500px) {

.main{
  margin:10px;
}
.col{
  width:100%;
  margin-left:0px;
}
.column {
  width: 100%;
}
}
button{      
  background-color:green;
  color:white; 
  font-size:17px;        
}   
  
    </style>
   
  <app-location route="{{route}}"></app-location>
  
  
  <!-------------------------------including admin nav---------------------------------------->
    
  <ad-dash></ad-dash>
      <!---------------------------main page starts here-------------------------------------->
  <div class="main">

  
  <h2><img src="../images/manifest/logo.gif" width=50 height="50">Bright Option</h2>
 
  <hr>
  
  
  
  <h2>These are some major topics that were taught in this Bright Option based on the students interest.</h2>
  
  <!--------------------- including paper-cards ------------------------------->
  <div class="row">
  <div class="column">
  <div class="content">
    
     <paper-card  image="../images/manifest/bd.jpeg" alt="Big data">
     <div class="card-content">
     <h3>Big Data</h3>   
    <p>Big Data is a collection of data that is huge in volume, yet growing exponentially with time. It is a data with so large size and complexity that none of traditional data management tools can store it or process it efficiently.</p>
   
    <button>Read more</button>
    </div>
    </paper-card>
    </div>
  
</div>
<div class="column">
  <div class="content">
     <paper-card  image="../images/manifest/cd.jpg" alt="core development" style="width:100%">
     <div class="card-content">
     <h3>Core Development</h3>
     
     <p>Core Design is a convergence of system development and media production methodology.And in order not to refer system development or media production the term creation is chosen.The agile principles are adopted in it.</p>
  
   
    <button>Read more</button>
    </div>
    </paper-card>
    </div>
  
</div>
<div class="column">
  <div class="content">
    
     <paper-card image ="../images/manifest/cn.jpg" alt="computer networks" style="width:100%">
     <div class="card-content">
     <h3>CCNA</h3>
     <p>A computer network is a group of computers that use a set of common communication protocols over digital interconnections for the purpose of sharing resources located on or provided by the network nodes</p>
 
    <button>Read more</button>
    </div>
    </paper-card>
    
    </div>
</div>
<!--column-->
    <div class="column">
      <div class="content">
           <paper-card image ="../images/manifest/dg.jpeg" alt="digital marketing" style="width:100%">
         <div class="card-content">
          <h3>Digital Marketing</h3>
        <p>At high level,digital marketing refers to advertising through digital channels such as search engines,social media,email,and mobile apps.Using these media channels,it is the method by which companies endorse services.</p>    
     <button>Read more</button>
      </div>
      </paper-card>
    </div>
    </div>
   </div>
    <div class="col">
  <div class="contents">
  <paper-card image ="../images/manifest/sd.png" alt="software development">
   
  <div class="card-content">
  <h3>Software development</h3>
  <p>Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. </p>
  <p>It is a process of writing and maintaining the source code, but in a broader sense, it includes all that is involved between the conception of the desired software through to the final manifestation of the software.</p>
  <button>Read more</button>
  </div>
  </paper-card>
  <!--------------------- end of paper-cards ------------------------------->
  </div>
</div>
  <!-------------------- end of main content -------------------------------->

 
  <div class="footer" >
   <p>&copy copyrights @uttej</p>
   </div>
   </div>

    `;
  }
  
 
  //navigation part
 
}


window.customElements.define('home-app', HomeApp);
