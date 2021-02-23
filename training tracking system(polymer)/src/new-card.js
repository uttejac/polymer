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
    
     <paper-card >
     <h5 class="card-title">Mock tests</h5>
     <div class="card-content"></div>
    <p>Test preparation or exam preparation is an educational course, tutoring service, educational material, or a learning tool designed to increase students' performance on standardized tests.Based on these test score report is given and placements is given  <br>
    </div>
    <button align="center">click here for Mock Exams </button></p>
    </paper-card>
    
  </div>
</div>
<div class="column">
  <div class="content">
     <paper-card >
     <h5>Course materials</h5>
     <div class="card-content">
     <p class="card-text"> The course description orients students by outlining the rationale for the course subject or theme, framing a brief overview of the key content, knowledge and skills to be learned & stating the major strategies and activities that students will experience<br>
     </div>
  <button align="center">click here for  course materials </button></p>
    
    
    </paper-card>
    
  </div>
</div>
<div class="column">
  <div class="content">
    
     <paper-card >
     <div class="card-content">
     <h5 class="card-title">Online library portal</h5>
    <p class="card-text">A library portal is an interface to access library resources and services through a single access and management point for users, combining the circulation and catalog functions of an integrated library system (ILS) with additional tools and facilities.<br>
  </div>
  <button  align="center">click here to access online library </button></p>

    </paper-card>
    
  </div>
</div>

  </div>
  <!-- end of main content -->
  </div>
  <div class="footer" >
   <p>&copy copyrights @uttej</p>
   </div>

