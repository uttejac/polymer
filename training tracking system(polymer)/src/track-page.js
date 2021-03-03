
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/app-route/app-route.js';
import './ad-dash.js';



class Track extends PolymerElement {
  static get template() {
    return html`
<style>
       
      .main{
       
        max-height:1500px;
        background-image: linear-gradient(#ABC9F4,#C3B3E9);
      }   
       .content-table {
          border-collapse: collapse;
          margin: 25px 0;
          font-size: 14px;
          width: 50%;
         
          overflow: hidden;
          margin-top:50px;
         
          
        }
       .content-table thead tr {
          background-color:black ;
          color: white;
         
        }
        
        .content-table th,
        .content-table td {
          padding: 20px 10px;
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
        @media screen and (max-width: 600px) {
          
          .content-table {
            border-collapse: collapse;
            margin:35px 6px;
            font-size: 13px;
            width: 98%;
            border-radius: 5px 5px 0 0;
            overflow: hidden;
            margin-top:50px;
           
          }
          .content-table th,
          .content-table td {
            padding: 20px 0px;
            text-align:center;
          }
          
        }
       
</style>
  <div class="main">
  <app-location route="{{route}}"></app-location>
        <ad-dash></ad-dash>
   
 
 <h1 align="center">LIST  OF  STUDENTS </h1>
 <center>
  <table class="content-table">
  
    <thead>
    
      <tr>
        
        <th>NAME</th>
        <th>PHONE</TH> 
        <th>EMAIL</th>
        <th>COURSE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>[[regData.fname]]</td>
        <td>[[regData.phone]]</td>
        
        <td>[[regData.email]]</td>
        <td>[[regData.course]]</td>
      </tr>
      <tr>
      <td>RAMESH</td>
      <td>8989898989</td>
      
      <td>ramesh@gmail.com</td>
      <td>CCNA</td>
    </tr>
    <tr>
      <td>SURESH</td>
      <td>9874735492</td>
      
      <td>suresh@gmail.com</td>
      <td>PROGRAMING LANGUAGE</td>
    </tr>
    <tr>
      <td>MAHESH</td>
      <td>8948456613</td>
      
      <td>mahesh@gmail.com</td>
      <td>CORE TECHNOLOGIES</td>
    </tr>
    <tr>
      <td>VAMSI</td>
      <td>6785677234</td>
      
      <td>vamsi@gmail.com</td>
      <td>DIGITAL MARKETING</td>
    </tr>
  
       
      

    </tbody>
  </table>
  </center>
</div>





`;
}

   static get properties() {
  return {
   //-----------------------------student name------------------>
    
    
    regData:{
      type:Object,
      value:{},
      notify:true 
    },
  };

    }
    
}

window.customElements.define('track-page', Track);