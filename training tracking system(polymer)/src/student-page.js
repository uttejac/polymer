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
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';

class StudentPage extends PolymerElement {
  static get template() {
    return html`
   <style >
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
  .row paper-card{
    width:100%;
    display:block;

  }
  /* Container section */ 
  .container{
    font-family: 'Righteous', cursive;
    background-image: linear-gradient(#ffafbd , #ffc3a0);
    height:600px;
    overflow:hidden;
  }
  /* paper-card */ 
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
    .cards{
      margin: auto;
      padding: 10px;
      color: #757575;
      border-radius: 5px;
      background-color: #fff;
      width:45%;
     
      }
      .cards paper-card{
        width:100% ;
        padding:10px;
      }
    paper-radio-button{
      padding:20px;
    }
    .main{
      font-family: 'Noto Sans JP', sans-serif;
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
  }/* Content section */ 
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
    paper-tab{
      font-family: 'Righteous', cursive;
    }
    paper-button {
      margin-left:220px;
    }
    
  </style>
  <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
     <!--Including student tabs-->
    <paper-tabs selected="{{selected}}">
 
  <paper-tab>Materials</paper-tab>
  <paper-tab>Current Course</paper-tab>
 <paper-tab>Feedback</paper-tab>
 <paper-button toggles raised class="green" on-click="logout">Log out</paper-button>
    
</paper-tabs>


<iron-pages selected="{{selected}}">

  <!--main content starts here-->

  <div class="main">

  <!--materials contetnt tab starts here -->
  <div class="row"> 
  <paper-card>
  <div class="colum">
    <div class="content">
    <h5 class="card-title">Mock tests</h5>
    <p>Test preparation or exam preparation is an educational course, tutoring service, educational material, or a learning tool designed to increase students' performance on standardized tests.Based on these test score report is given and placements is given  <br>
    <button align="center">click here for Mock Exams </button></p>
 <br>
    </div>
  </div><div class="colum">
  <div class="content">
  <h5 class="card-title">Course materials</h5>
  <p class="card-text"> The course description orients students by outlining the rationale for the course subject or theme, framing a brief overview of the key content, knowledge and skills to be learned & stating the major strategies and activities that students will experience<br>
  <button align="center">click here for  course materials </button></p>
  <br>
  </div>
  </div>
  <div class="colum">
    <div class="content">
    <h5 class="card-title">Online library portal</h5>
    <p class="card-text">A library portal is an interface to access library resources and services through a single access and management point for users, combining the circulation and catalog functions of an integrated library system (ILS) with additional tools and facilities.<br>
  
    <button  align="center">click here to access online library </button></p>
<br>
    </div>
</paper-card>
    <!--materials contetnt tab ends here -->
  </div>


  <!--course contetnt tab starts here -->

  <div class="colum">
    <div class="content">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    </div>
  </div>
  </div>
  <br><br><br><br><br><br>
  
  
  </div>
  <div>
  <div class="container">
  <div class="row">
  <div class="columnn " style="position :relative;width:50%;left:40px;top:10px;" >
  
    <h4>Currently your are undergoing Biga data course</h4>
     <paper-card> 
     <iron-image sizing="contain" fade src="../images/manifest/bd.jpeg"></iron-image>
    
     <h3>Big Data</h3>
    <p>Big Data is a collection of data that is huge in volume, yet growing exponentially with time. It is a data with so large size and complexity that none of traditional data management tools can store it or process it efficiently.</p>
    
    <button>Read more</button>
  
    
    </paper-card>
    </div></div>
  
    <div class="columnn" style="width:600px;position :absolute;margin-left:380px;top:100px;" >
    
<paper-card class="stu" heading="STUDENT DETAILS ">
<div class="card">ID:<span class="data">1546</span></div>

<div class="card">Name:<span class="data">UTTEJ</span></div>
 
<div class="card">Course:<span class="data" >BIG DATA</span></div>
<div class="card">Code:<span class="data">EE501</span></div>
<div class="card">Status:<span class="data">On Progress </span></div>
</paper-card><br><br><br><br><br><br><br><br>
 
</div>
  </div>
  </div>
  </div>
  <!--course content tab ends here -->
  
  
  
  
  
  </div></div>
  <!--feedback contetnt tab starts here -->
<div>
<div class="main">
  <h1 align="center">Student Feedback</h1>
 <div class="cards">
 <paper-card>
 <paper-input value="{{firstname}}"  required auto-validate error-message="fill firstname!"  always-float-label label="Firstname"  char-counter maxlength="15"></paper-input>
  <paper-input value="{{lastname}}"required auto-validate error-message="fill lastname!"  always-float-label label="Lastname" char-counter maxlength="15"></paper-input>
  <paper-input value="{{subject}}"required auto-validate error-message="enter subject"  always-float-label label="subject" char-counter ></paper-input>
  
  <paper-input  value="{{code}}" required auto-validate error-message="enter code" always-float-label label="Course code" required auto-validate error-message="enter course code!" auto-validate allowed-pattern="[0-9]"></paper-input>
  <label >Gender</label><br>
  <paper-radio-button  unchecked>Male</paper-radio-button>
    <paper-radio-button unchecked>Female</paper-radio-button><br>
    <paper-dropdown-menu label="Why did you chose this course?" required auto-validate error-message="enter code">
    <paper-listbox slot="dropdown-content" class="dropdown-content">
      <paper-item>Degree requirement</paper-item><br>
      <paper-item>Personal interest</paper-item> 
    </paper-listbox>
  </paper-dropdown-menu><br>
  <paper-dropdown-menu label="Level of knowledge on start of course" required auto-validate error-message="enter code">
  <paper-listbox slot="dropdown-content" class="dropdown-content">
    <paper-item>Good</paper-item><br>
    <paper-item>Fair</paper-item> 
    <paper-item>Poor</paper-item> 
    <paper-item>Very Poor</paper-item> 
  </paper-listbox>
</paper-dropdown-menu><br>
<paper-dropdown-menu label="Would you recommend this course to other students?" required auto-validate error-message="enter code">
  <paper-listbox slot="dropdown-content" class="dropdown-content">
    <paper-item>Yes</paper-item><br>
    <paper-item>No</paper-item> 
    <paper-item>Poor</paper-item> 
    <paper-item>Not sure</paper-item> 
  </paper-listbox>
</paper-dropdown-menu><br><br>


<paper-button toggles raised class="green" on-click="submit">submit</paper-button><br>

</paper-card>
</div>
<!--feedback contetnt tab ends here -->

</iron-pages>

   `
  }
  logout(){
      this.set('route.path','/common')
  }
  //validating input fields
  submit(){
    if (this.firstname=='' || this.lastname=='' || this.address=='' || this.city==''|| this.street=='' || this.pincode==''|| this.phonen=='')
    {
      alert("enter all details" )
    }
    else{
    alert("success")
  }
} 
}
window.customElements.define('student-page', StudentPage);
