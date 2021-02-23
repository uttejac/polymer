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

import '@polymer/paper-tabs/paper-tabs.js';
  import '@polymer/paper-tabs/paper-tab.js';
  import '@polymer/paper-input/paper-input.js';
  import '@polymer/paper-button/paper-button.js'; 
import '@polymer/iron-image/iron-image.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-card/paper-card.js';


class HomePage extends PolymerElement {
  static get template() {
    return html`
   <style include="shared-styles.js">
   iron-image {
    width: 400px;
    height: 200px;
    background-color: lightgray;
  }
  .row {
    margin: 6px -16px;
  }
  
  /* Add padding BETWEEN each column */
  .row,
  .row > .colum {
    padding: 5px;
  }
  .colum {
    float: left;
    margin-left:15px;
    width: 23%;
  }
  /* Create four equal columns that floats next to each other */
  .column {
  margin-left:200px;
    width: 30%;
  }
  
  /* Clear floats after rows */ 
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  .container{
       
    background-image: linear-gradient(#ffafbd , #ffc3a0);
    height:600px;
    overflow:hidden;
  }
 
  .card{
    margin: 24px;
    padding: 16px;
    color: #757575;
    border-radius: 5px;
    background-color: #fff;
    width:45%;
    height:100%;
    margin-left:370px;
    }
    paper-radio-button{
      padding:20px;
    }
    .main{
     
      background-image: linear-gradient(#ffafbd , #ffc3a0);
    }
    .display{
      width:100%;
      height:auto;
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
  }
  .about{
      width:100%;
      height: 350px;
      background-image: url(../images/manifest/12.jpg); 
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
  }
  .text{
      font-size: 30px;
      color:#fff;
      font-family: sans-serif;
      text-shadow: 0px 15px 12px #000;
  }
  .line{
      width:200px;
      height: 8px;
      background-color: #17ff8d;
      display: block;
      position: relative;
      border-radius: 5px;
      left:10%;
      box-shadow: 0px 15px 12px 0px #000;
  }
  .content{
      width:100%;
      height:auto;
      background-color: #161616;
      font-size: 23px;
      font-family: audiowide;
      color:rgb(245, 241, 241);
      line-height: 30px;
      text-align: center;
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
  .data{
    padding:10px;
  }
  .stu {
    width:30%;
    
    margin-top:20px;
    margin-left:500px;
    padding:10px;
    }
  </style>

    <paper-tabs selected="{{selected}}">
  <paper-tab>About</paper-tab>
  <paper-tab>Services</paper-tab>
  
  <paper-tab>Contact</paper-tab>
  
</paper-tabs>


<iron-pages selected="{{selected}}">
  <div><div class="display">
  <div class="about">
      <div class="text">
          <h1><img src="../images/manifest/logo.gif" width="70" height="70" hspace="15">
          About Us</h1>
      </div>
  </div>
  <div class="content">
      <p>Bright Option helps organizations of all kinds prepare for the ever-evolving future of work. Our curated collection of top-rated development and technical courses gives companies, governments, and nonprofits the power to develop in-house expertise and satisfy students hunger for learning and development.Our culture is diverse, inclusive, and committed to personal and professional development. We’re not afraid to take on a new challenge.  We have students and instructors around the world, offices around the world, and employees from around the world, who speak many languages and represent many cultures.We’re committed to supporting our employees’ professional development and well-being.We host events, trainings, and meet-ups to ensure everyone can bring their authentic selves to work and reach their full potential.</div>
  </div>
</div></div>
  <div class="main">
  <div class="row">
  <paper-card>
  <div class="colum">
    <div class="content">
    <h5 class="card-title">Best quality Education</h5>
      <p>A good quality education is one that provides all learners with capabilities they require to become economically productive, develop sustainable livelihoods, contribute to peaceful and democratic societies and enhance individual well-being.</p>
   
    </div>
  </div><div class="colum">
  <div class="content">
  <paper-card>
  <h5 class="card-title">Course materials</h5>
  <p class="card-text"> The course description orients students by outlining the rationale for the course subject or theme, framing a brief overview of the key content, knowledge and skills to be learned & stating the major strategies and activities that students will experience.</p>
  </paper-card>
  </div>
  </div>
  <div class="colum">
    <div class="content">
    <h5 class="card-title">Online library portal</h5>
    <p class="card-text">A library portal is an interface to access library resources and services through a single access and management point for users, combining the circulation and catalog functions of an integrated library system (ILS) with additional tools and facilities.</p>
  
    </div>
  </div>
  <div class="colum">
    <div class="content">
    <h5 class="card-title">Staff Facility</h5>
    <p class="card-text">All Staff Members hired for this training  I supported program or a core subject area must be "highly qualified.95% of the non-core faculty must be Highly Qualified. To be considered Highly Qualified, a teacher must have a minimum of a bachelor's degree"</p>
  
    </div>
    </paper-card>
  </div>
  </div>
  <br><br><br><br><br><br>
  
  
  </div>
  
  
    
   
 
  
  
  
  
  
  <div>
  <div class="container">
  <div class="row">
  <div class="columnn " style="position :relative;left:40px;top:10px;" >
    <!--embeded map-->
    <h2>Our Location</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2322216590346!2d77.70079551482178!3d12.956986890865483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1388dbf086ed%3A0x1064cb50b56b89d4!2sUniqueHire%20Consulting%20LLP!5e0!3m2!1sen!2sin!4v1614013938597!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

  </div>
  
  <div class="columnn" style="width:600px;position :absolute;right:50px;top:100px;" >
  <h2>Contact Us</h2>
  <paper-input value="{{firstname}}"  required auto-validate error-message="fill firstname!"  always-float-label label="Firstname"  char-counter maxlength="15"></paper-input>
  <paper-input value="{{lastname}}"required auto-validate error-message="fill lastname!"  always-float-label label="Lastname" char-counter maxlength="15"></paper-input>
  <paper-input value="{{mailid}}"required auto-validate error-message="mail id!"  always-float-label label="Mail id" ></paper-input>
  <paper-input  value="{{phone}}" always-float-label label="Phone" required auto-validate error-message="enter mobile number!" auto-validate allowed-pattern="[0-9]"></paper-input>
  <paper-input value="{{textarea}}"  required auto-validate error-message="textarea"  always-float-label label="textarea"  ></paper-input>
  

  <paper-button toggles raised class="green" id="toast" on-click="submit">submit</paper-button>
  
</div>
  </div>
  </div>
  
  
  
  
  </div>

  








</iron-pages>


   `
  }
  //validating input fields
  submit(){
    if (this.firstname=='' || this.lastname=='' || this.mailid=='' || this.phone==''|| this.textarea=='' )
    {
      alert("enter all details" )
    }
    else{
    alert("We will contact you soon")
  }
}
}
window.customElements.define('home-page',HomePage);
