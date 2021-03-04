/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
    
        .footer{
          font-family: 'Nunito', sans-serif;
          position: relative;
          font-weight: 700;
          left: 0;
          bottom: 0;
          width: 100%;
          background-color: none;
          color:black;
          text-align: center;
        }
        .main{
          max-height:1500px;
          background-image: linear-gradient(#fdfbfb , #ebedee);
         
        }
          .wrapper{
            background-image: linear-gradient(#fdfbfb , #ebedee);
            max-height:1500px;
          }
         h3{
         
          animation-duration: 3s;
         
          animation-name: slidein-left;
       
        }
       
        @keyframes slidein-left {
          from {
            margin-left: 100%;
            width: 300%
          }
          to {
            margin-left: 0%;
            width: 100%;
          }
        }

          
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
