
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-media-query/iron-media-query.js';


class Admin extends PolymerElement {
  static get template() {
    return html`
    <style >
    {
    .card {
      margin: 24px;
      padding: 16px;
      color: #757575;
      border-radius: 5px;
      background-color: #fff;
      width:35%;
      height:25%;
      margin-left:385px;
      }
     
      cursor: default;
    }
  
    .main{
       
      background-image: linear-gradient(#ffafbd , #ffc3a0);
    
    }
    paper-button{
      margin-left:185px;
    }
  }
  </style>
  <iron-media-query query="(min-width: 600px)"></iron-media-query>
  <div class="main">
  <app-location route="{{route}}"></app-location>
 
  <img src="../images/manifest/logo.gif" width=70 height="70" align="left"><h2  >Bright Option</h2>
  <h1 align="center">Welcome to Bright Option Educational training</h1>
  
    <div class="card"> 
    <h2 align=center>Login</h2>
    
    <!-- including user input details-->

<paper-input label="Username"required auto-validate error-message="fill Username!" value="{{Username}}"></paper-input>
<paper-input label="password input" type="password" value="{{password}}" max-length="10"></paper-input><br>
    <paper-button toggles raised class="green" on-click="submit" >submit</paper-button>
    
    </div><br><br><br><br><br><br>
   
    `;
  }
  //event listner clicking
  submit(){
    if (this.firstname=='' || this.password=='' )
    {
      alert("enter correct details" )
    }
    else{
    this.set('route.path','/home')
  }
}
  
}


window.customElements.define('admin-page', Admin);
