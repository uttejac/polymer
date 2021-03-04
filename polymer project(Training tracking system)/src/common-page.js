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
import './nav-page.js';
//importing paper button
import '@polymer/iron-image/iron-image.js';
import '@polymer/app-route/app-route.js';

class Common extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
     
     /*----------images---------*/
     
      iron-image {
        width: 360px;
        height: 230px;
        background-color: none;
      
      }
     
            
      paper-button{
        cursor:pointer;
      }

      .main{
        background-image: linear-gradient(#ABC9F4,#C3B3E9);
      }
      
    
    @media (max-width: 960px) and (min-width: 501px) {
      iron-image { 
        width: 100%;
        
      }
      .main{
        margin:10px;
      }
  }
  
  @media (max-width: 500px) {
    iron-image {
      width: 100%;     
    }
    .main{
      margin:10px;
    }
  }
       
      </style>
<!----------------------------------including app-route to redirect----------------------------------------------->
      <app-location route="{{route}}"></app-location>
  

  <nav-page></nav-page>
 
  <div class="main">
 
      <h1><img src="../images/manifest/logo.gif" width="60" height="60">Bright Option</h1>
        <h3>Welcome </h3>
        <h3>Click on the links above to see more details about our website </h3>
    
    <!---------------------------------including images ----------------------------------------->

            <iron-image sizing="contain" fade src="../images/manifest/11.jpg"></iron-image>
            <iron-image sizing="contain" fade src="../images/manifest/13.jpg"></iron-image>
            <iron-image sizing="contain" fade src="../images/manifest/sd.png"></iron-image>
   
   <br>
        <h3>we hope you find all of the information you are looking for and that the website will give you.</h3>
      <div class="footer" >
            <p>&copy copyrights @brightoption</p>
      </div>
    </div>
  
 

    `;
  }
  
 
 
}

window.customElements.define('common-page', Common);
