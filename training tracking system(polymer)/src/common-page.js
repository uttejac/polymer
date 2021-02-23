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
//importing paper button
import '@polymer/iron-image/iron-image.js';

class Common extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
      }
      
      li {
        float:left;
      }
      li paper-button .a {
        float:right;
      }
      
      li paper-button {
        display: block;
        color: white;
        font-size:20px;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      iron-image {
        width: 400px;
        height: 200px;
        background-color: lightgray;
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
paper-button{
  cursor:pointer;
}

      h3{
        -moz-animation-duration: 3s;
        -webkit-animation-duration: 3s;
        -moz-animation-name: slidein-left;
        -webkit-animation-name: slidein-left;
        font-family: 'Righteous', cursive;
      }
      
      @-moz-keyframes slidein-left {
        from {
          margin-left: 100%;
          width: 300%
        }
        to {
          margin-left: 0%;
          width: 100%;
        }
      }
      
      @-webkit-keyframes slidein-left {
        from {
          margin-left: 100%;
          width: 300%
        }
        to {
          margin-left: 0%;
          width: 100%;
        }
      }
      @-webkit-keyframes slidein-left {
        from {
          margin-left: 100%;
          width: 300%
        }
        to {
          margin-left: 0%;
          width: 100%;
        }
      }
      .main{
       
       max-height:1500px;
        background-image: linear-gradient(#ffafbd , #ffc3a0);
 
      }
   
        
      </style>
<!--including app-route to redirect-->
      <app-location route="{{route}}"></app-location>
      <div class="main">

      <ul>
      <li><paper-button toggles  raised class="red" on-click="about">About</paper-button></li>
       <li><paper-button toggles raised class="green" on-click="services">Services</paper-button></li>
     <li><paper-button toggles raised class="red" on-click="contact">Contact</paper-button></li>
     <li><paper-button toggles raised class="a" on-click="login">login</paper-button></li>
     
      </ul>
    <h3>Welcome UTTEJ!</h3>
    <h3>Click on the links above to see more details about our website </h3><br>
    
    <!--including images -->

   <iron-image sizing="contain" fade src="../images/manifest/11.jpg"></iron-image>
   <iron-image sizing="contain" fade src="../images/manifest/13.jpg"></iron-image>
   <iron-image sizing="contain" fade src="../images/manifest/sd.png"></iron-image>
   
   <br>
   <h3>we hope you find all of the information you are looking for and that the website will give you.</h3><br><br><br><br><br>
   <div class="footer" >
   <p>&copy copyrights @uttej</p>
   </div>
<div>

    `;
  }
  // navigate(page){
  //   if(page=="this.hom"){
  //     this.set('route.path','/home')
  //   }else if(page=="about"){
  //     this.set('route.path','/about')
  //   }else if(page=="services"){
  //     this.set('route.path','/services')
  // }else if(page=="contact"){
  //     this.set('route.path','/contact')
  //   }
  //    else if(page=="feedback"){
  //     this.set('route.path','/feedback')
  //     }
  //      else if(page=="dashboard"){
    //     this.set('route.path','/dashboard')
    //     }
 //navigation
 
 login(){
    this.set('route.path','/logintab')
  }
  
services(){
  this.set('route.path','/services')
}
  about(){
    this.set('route.path','/about')
  }
  contact(){
    this.set('route.path','/contact')
  }
  
}

window.customElements.define('common-page', Common);
