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
//importing paper input and button
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
//class start
class About extends PolymerElement {
  static get template() {
    return html`
    <style >
    body{
        margin: 0;
        padding: 0;
    }
    .container{
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
        font-family: 'Ubuntu Condensed', sans-serif;
    }
    b{
        font-size: 50px;
        color:#000;
        font-weight: 500px;
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
        font-family: 'Righteous', cursive;
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
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
      <!--navigation-->
  <li><paper-button toggles  raised class="red" on-click="about">About</paper-button></li>
  <li><paper-button toggles raised class="red" on-click="contact">Contact</paper-button></li>
  <li><paper-button toggles raised class="green" on-click="services">Services</paper-button></li>
      
  <li><paper-button toggles raised class="a" on-click="login">login</paper-button></li>
  </ul>
  <div class="container">
  <div class="about">
      <div class="text">
          <h1><img src="../images/manifest/logo.gif" width="70" height="70" hspace="15">
          About Us</h1>
      </div>
  </div>
  <div class="content">
      <p>Bright Option helps organizations of all kinds prepare for the ever-evolving future of work. Our curated collection of top-rated development and technical courses gives companies, governments, and nonprofits the power to develop in-house expertise and satisfy students hunger for learning and development.Our culture is diverse, inclusive, and committed to personal and professional development. We’re not afraid to take on a new challenge.  We have students and instructors around the world, offices around the world, and employees from around the world, who speak many languages and represent many cultures.We’re committed to supporting our employees’ professional development and well-being.We host events, trainings, and meet-ups to ensure everyone can bring their authentic selves to work and reach their full potential.</div>
  </div>
</div>
<div class="footer" >
   <p>&copy copyrights @uttej</p>
   </div>
    `;
  }
  
 contact(){
    this.set('route.path','/contact')
  }
  
services(){
  this.set('route.path','/services')
}
login(){
  this.set('route.path','/logintab')
}
}


window.customElements.define('about-page', About);
