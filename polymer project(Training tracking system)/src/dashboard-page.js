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
import './ad-dash.js';

class Dashboard extends PolymerElement {
  static get template() {
    return html`
    <style>  
  * {
    margin: 0;
    padding: 0;
  }
  
  
  body {
    box-sizing: border-box;
  }
  
  .text-primary-p {
    color: #a5aaad;
    font-size: 17px;
    font-weight: 700;
  }
  
  .font-bold {
    font-weight: 700;
  }
  
  .text-title {
    color: #2e4a66;
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
    grid-template-columns: 1fr 1fr 1fr ;
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
    padding: 0px;
    border-radius: 5px;
   
    
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
    
    padding: 15px;
  }
  
  .charts__right__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 30px;
  }
  
  .card1 {
    background:  #d6d8d9;
    color: #101111;
    text-align: center;
    padding: 25px;
    border-radius: 5px;
    font-size: 13px;
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
  @media only screen and (max-width: 855px) {
    .main__cards {
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 0;
    }
  
    .charts {
      grid-template-columns: 1fr;
     
      gap: 10px;
      margin-bottom: 0;
    }
  }
  
  @media only screen and (max-width: 300px) {
    .navbar__left {
      display: none;
    }
  }
  @media screen and (max-width: 600px)  and (min-width: 300px) {
    .grid-container {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 10px;
      
     
    }
    
    .grid-container >.charts {
     
      text-align: center;
      padding: 10px 0;
      font-size: 10px;
    }
    body{
      margin:-30 px !important;
      
    }
    .charts__right__cards{
      display: grid;
      grid-template-columns: 1fr;
      margin:-10px;
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
paper-button{
  background-color:black;
  color:white;
}

.content-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 14px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  
}


.content-table thead tr {
  background-color:black ;
  color: white;
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
  
   <ad-dash></ad-dash>

  <div class="container">
  <!--navbar starts-->
  <nav class="navbar">
    
    <div class="navbar__left">
    
            <mwc-icon class="icon" >admin_panel_settings</mwc-icon>

              <a class="active_link" href="#">Admin</a>
    
    </div>
    <div class="navbar_right">
    <paper-button toggles raised class="green" on-click="success" >Students list</paper-button>
    </div>
    
  </nav>
<!--nav ends-->
<div class="grid-container">
<div class="main__container">
<!-- main container starts  -->

<!--card elements starts here-->
<!------------------------------------main heading and greeting here--------------------------------------->
<div class="main__title">
      <img src="../images/manifest/logo.gif" alt=" image" width="50" height="50" />
    <div class="main__greeting">
        <h1>Hello Uttej!</h1>
        <p>Welcome</p>
    </div>
</div>

<!---------------------------------------paper-card starts here------------------------------------->


    <div class="main__cards">
            <paper-card class="card">
              <mwc-icon class="icon" >group_add</mwc-icon>
                <div class="card_inner">
                    <p class="text-primary-p">Number of Students enrolled program</p>
                    <span class="font-bold text-title">1578</span>
                </div>
            </paper-card>
            <paper-card class="card">
              <mwc-icon class="icon" >account_box</mwc-icon>
                <div class="card_inner">
                    <p class="text-primary-p">Number of Staff members</p>
                    <span class="font-bold text-title">22+</span>
                </div>
            </paper-card>
           
            <paper-card class="card">
              <mwc-icon class="icon" > cast_for_education</mwc-icon>
                <div class="card_inner">
                    <p class="text-primary-p">Technologies Teaching </p>
                    <span class="font-bold text-title">28+</span>
                </div>
            </paper-card>
    
    </div>
    <!---------------------------------------paper-card ends here------------------------------------->

    
      <!-------------------------  table start here ------------------------------------------>
      
      <div class="charts">
      
      <div class="table">
            <table class="content-table">
            
              <thead>
              
                <tr>
                  <th>S.NO</th>
                  <th>COURSE</th>
                  
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Computer Networking</td>
                  
                  <td>On Progress</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Digital Marketing</td>
                 
                  <td>Yet To Start</td>
                </tr>
                <tr >
                  <td>3</td>
                  <td>Core Technologies</td>
                  
                  <td>Started</td>
                </tr>
                <tr >
                  <td>4</td>
                  <td>Web Development</td>
                 
                  <td>On Progress</td>
                </tr>
                <tr >
                  <td>5</td>
                  <td>Big Data</td>
                  
                  <td>Yet to start</td>
                </tr>
                <tr >
                  <td>6</td>
                  <td>Basic Programing</td>
                 
                  <td>started</td>
                </tr>
                <tr >
                  <td>7</td>
                  <td>Database </td>
                  
                  <td>On Progress</td>
                </tr>

              </tbody>
            </table>
          </div>
            <!------------------- chart table ends here --------------------------->


            <!------------------- right paper-card starts here --------------------------->
        

        <div class="charts__right">
          <div class="charts__right__title">
            <div>
              <h1>Overall Reports</h1>
              
            </div>
            
          </div>

          <div class="charts__right__cards">
          
              <paper-card class="card1">
                  <h1>Applications pending</h1>
                  <p>1500+</p>
              </paper-card>

              <paper-card class="card2">
                  <h1>Admission Rate</h1>
                  <p>20.7%</p>
              </paper-card>

              <paper-card class="card3">
                  <h1>Placement</h1>
                  <p>Based on Skills</p>
                  <p>Appr 90%</p>
              </paper-card>

              <paper-card class="card4">
                  <h1>Total Admissions</h1>
                  <p>15000+</p>
              </paper-card>
           
          
          </div>
        
      </div>
      <!------------------- right paper-card ends here --------------------------->
    </div>
  

      <!--------------------main page ends here----------------------------->
 
      </div>
</div>
<div class="footer" >
<p>&copy copyrights @brightoption</p>
</div>
</div>


    `;
  }
  // static get properties() {
  //   return {
  //     student:{
  //       type:String,
  //     },
      //----------------------passing name object to track page-----------------

  //     trackData:{
  //       type:Object,
  //       value:{},
  //       notify:true
  //      }
  //    };
  //  }
  //-----------------------------Assigning student name to track ---------------------------------
//   track(){
//     this.trackData={
//       "student":this.student,
//     }
//     if(this.student==''){
//       alert("enter student name")
//     }
//     else{
    
//     this.set('route.path','/track');
//   }
// }
success(){
  this.set('route.path','/track');
}
}


window.customElements.define('dashboard-page', Dashboard);
