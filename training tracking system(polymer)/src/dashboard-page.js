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

import '@material/mwc-icon';

class Dashboard extends PolymerElement {
  static get template() {
    return html`
    <style> 
    
/*  styling scrollbars  */
::-webkit-scrollbar {
    width: 5px;
    height: 6px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #a5aaad;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #3ea175;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #a5aaad;
  }
  
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
  }
  
  .text-primary-p {
    color: #a5aaad;
    font-size: 14px;
    font-weight: 700;
  }
  
  .font-bold {
    font-weight: 700;
  }
  
  .text-title {
    color: #2e4a66;
  }
  
  .text-lightblue {
    color: #469cac;
  }
  
  .text-red {
    color: #cc3d38;
  }
  
  .text-yellow {
    color: #a98921;
  }
  
  .text-green {
    color: #3b9668;
  }
  
  
  .navbar {
    background: #ffffff;
    grid-area: nav;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 30px;
    border-bottom: 1px solid lightgray;
  }
  
  .nav_icon {
    display: none;
  }
  
  .nav_icon > i {
    font-size: 26px;
    color: #a5aaad;
  }
  
  .navbar__left > a {
    margin-right: 30px;
    text-decoration: none;
    color: #a5aaad;
    font-size: 15px;
    font-weight: 700;
  }
  
  .navbar__left .active_link {
    color: #265acc;
    border-bottom: 3px solid #265acc;
    padding-bottom: 12px;
  }
  
  .navbar__right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  main {
    background: #f3f4f6;
    grid-area: main;
    overflow-y: auto;
  }
  
  .main__container {
    padding: 20px 35px;
  }
  
  .main__title {
    display: flex;
    align-items: center;
  }
  
  .main__title > img {
    max-height: 100px;
    object-fit: contain;
    margin-right: 20px;
  }
  
  .main__greeting > h1 {
    font-size: 24px;
    color: #2e4a66;
    margin-bottom: 5px;
  }
  
  .main__greeting > p {
    font-size: 14px;
    font-weight: 700;
    color: #a5aaad;
  }
  
  .main__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin: 20px 0;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 70px;
    padding: 25px;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #ffffff;
  }
  
  .card_inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .card_inner > span {
    font-size: 25px;
  }
  
  .charts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 50px;
  }
  
  .charts__right {
    padding: 25px;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #ffffff;
  }
  
  .charts__right__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .charts__right__title > div > h1 {
    font-size: 24px;
    color: #2e4a66;
    margin-bottom: 5px;
  }
  
  .charts__right__title > div > p {
    font-size: 14px;
    font-weight: 700;
    color: #a5aaad;
  }
  
  .charts__right__title > i {
    color: #ffffff;
    font-size: 20px;
    background: #39447a;
    border-radius: 200px 0px 200px 200px;
    -moz-border-radius: 200px 0px 200px 200px;
    -webkit-border-radius: 200px 0px 200px 200px;
    border: 0px solid #000000;
    padding: 15px;
  }
  
  .charts__right__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
  }
  
  .card1 {
    background:  #d6d8d9;
    color: #101111;
    text-align: center;
    padding: 25px;
    border-radius: 5px;
    font-size: 14px;
  }
  
  .card2 {
    background: #d6d8d9;
    color: #0d0e0d;
    text-align: center;
    padding: 25px;
    border-radius: 5px;
    font-size: 14px;
  }
  
  .card3 {
    background: #d6d8d9;
    color: #3a3e41;
    text-align: center;
    padding: 25px;
    border-radius: 5px;
    font-size: 14px;
  }
  
  .card4 {
    background: #d6d8d9;
    color: #0a0a0a;
    text-align: center;
    padding: 25px;
    border-radius: 5px;
    font-size: 14px;
  }
  
  
  
  
  .sidebar__logout {
    margin-top: 20px;
    padding: 10px;
    color: #e65061;
  }
  
  .sidebar__logout > a {
    text-decoration: none;
    color: #e65061;
    font-weight: 700;
    text-transform: uppercase;
  }
  
  .sidebar__logout > i {
    margin-right: 10px;
    font-size: 18px;
  }
  @media only screen and (max-width: 300px) {
    .container {
      grid-template-columns: 1fr;
      /* grid-template-rows: 0.2fr 2.2fr; */
      grid-template-rows: 0.2fr 3fr;
      grid-template-areas:
        "nav"
        "main";
    }
  
  
    .nav_icon {
      display: inline;
    }
  }
  
  @media only screen and (max-width: 855px) {
    .main__cards {
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 0;
    }
  
    .charts {
      grid-template-columns: 1fr;
      margin-top: 30px;
    }
  }
  
  @media only screen and (max-width: 300px) {
    .navbar__left {
      display: none;
    }
  }
  

form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

form.example button {
  float: left;
  width: 10%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}
.content-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 500px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.content-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
}

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.content-table tbody {
  background-color: #f3f3f3;
}

.content-table tbody {
  border-bottom: 2px solid #009879;
}ul {
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
  <div class="container">
  <ul>
      
  <li><paper-button toggles raised class="green" on-click="home" value="hom">HOME</paper-button></li>
 <li><paper-button toggles raised class="green" on-click="dashboard">DASHBOARD</paper-button></li>

  </ul>
  <div class="container-fluid">
  <!--navbar starts-->
  <nav class="navbar">
    
    <div class="navbar__left">
    
    <mwc-icon class="icon" >admin_panel_settings</mwc-icon>

   
      <a class="active_link" href="#">Admin</a>
      

    </div>
    <div class="navbar__right">
   <mwc-icon class="icon" > person_search</mwc-icon>
    <paper-input label="search" value="{{student}}"></paper-input>
    <paper-button toggles raised class="green" on-click="track">Track</paper-button>
    
          
    </div>
    <div class="logout">
    <mwc-icon class="icon" > logout</mwc-icon>
    <paper-button toggles raised class="green" on-click="logout">Log out</paper-button>
     
    </div>
  </nav>
<!--nav ends-->
<div class="main__container">
<!-- main container starts  -->

<!--card elements starts here-->

<div class="main__title">
  <img src="../images/manifest/logo.gif" alt=" image" width="50" height="50" />
  <div class="main__greeting">
    <h1>Hello Uttej!</h1>
    <p>Welcome</p>
  </div>
</div>
  <div class="main__cards">
            <div class="card">
            <mwc-icon class="icon" >group_add</mwc-icon>
              <div class="card_inner">
                <p class="text-primary-p">Number of Students enrolled program</p>
                <span class="font-bold text-title">1578</span>
              </div>
            </div>
            <div class="card">
            <mwc-icon class="icon" >account_box</mwc-icon>
              <div class="card_inner">
                <p class="text-primary-p">Number of Staff members</p>
                <span class="font-bold text-title">22+</span>
              </div>
            </div>
           
            <div class="card">
            <mwc-icon class="icon" > cast_for_education</mwc-icon>
              <div class="card_inner">
                <p class="text-primary-p">Technologies Teaching </p>
                <span class="font-bold text-title">28+</span>
              </div>
            </div>

            

            
          </div>
    

      

      <!-- card elements ends here -->
      
      
      <!-- chart table start here -->
      
      <div class="charts">
      <div class="table">
            <table class="content-table">
            
              <thead>
              
                <tr>
                  <th>S.NO</th>
                  <th>COURSE</th>
                  <th>STUDENTS</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Computer Networking</td>
                  <td>110</td>
                  <td>On Progress</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Digital Marketing</td>
                  <td>273</td>
                  <td>Yet To Start</td>
                </tr>
                <tr >
                  <td>3</td>
                  <td>Core Technologies</td>
                  <td>300</td>
                  <td>Started</td>
                </tr>
                <tr >
                  <td>4</td>
                  <td>Web Development</td>
                  <td>320</td>
                  <td>On Progress</td>
                </tr>
                <tr >
                  <td>5</td>
                  <td>Big Data</td>
                  <td>270</td>
                  <td>Yet to start</td>
                </tr>
                <tr >
                  <td>6</td>
                  <td>Basic Programing</td>
                  <td>320</td>
                  <td>started</td>
                </tr>
                <tr >
                  <td>7</td>
                  <td>Database </td>
                  <td>120</td>
                  <td>On Progress</td>
                </tr>

              </tbody>
            </table>
          </div>
            <!-- chart table start here -->
        

        <div class="charts__right">
          <div class="charts__right__title">
            <div>
              <h1>Overall Reports</h1>
              
            </div>
            
          </div>

          <div class="charts__right__cards">
            <div class="card1">
              <h1>Applications pending</h1>
              <p>1500+</p>
            </div>

            <div class="card2">
              <h1>Admission Rate</h1>
              <p>20.7%</p>
            </div>

            <div class="card3">
              <h1>Placement</h1>
              <p>Based on Skills</p>
              <p>App 90%</p>
            </div>

            <div class="card4">
              <h1>Total Admissions</h1>
              <p>15000+</p>
            </div>
          </div>
        </div>
      </div>
      <!-- chart table ends here -->
    </div>
  </main>
  <!--main page ends here-->
  </div>
</div>
</div>
<div class="footer" >
<p>&copy copyrights @uttej</p>
</div>
</div>
    `;
  }
  static get properties() {
    return {
      student:{
        type:String,
      },
      //passing name object to track page

      trackData:{
        type:Object,
        value:{},
        notify:true
      }
    };
  }
  //Assigning student name to track 
  track(){
    this.trackData={
      "student":this.student,
    }
    this.set('route.path','/track');
  }
  //logout redirect section
logout(){
    this.set('route.path','/common')
}
home(){
  this.set('route.path','/home')
}
about(){
  this.set('route.path','/about')
}
dashboard() {
this.set('route.path','/dashboard')
}
}

window.customElements.define('dashboard-page', Dashboard);
