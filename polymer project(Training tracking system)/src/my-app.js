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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
 
        .drawer-list a 
        {
          display: inline-block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

       
      </style>
      <!------------------------app route-------------------------->
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
     
      <!------------------------iron selectors-------------------------->
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="studentlogin" href="[[rootPath]]studentlogin"></a>
            <a name="studentpage" href="[[rootPath]]studentpage"></a>
            <a name="common" href="[[rootPath]]common"></a>
            <a name="register" href="[[rootPath]]register"></a>
            <a name="home" href="[[rootPath]]home"></a>
            <a name="homepage" href="[[rootPath]]homepage"></a>
            <a name="about" href="[[rootPath]]about"></a>
            <a name="services" href="[[rootPath]]services"></a>
            <a name="contact" href="[[rootPath]]contact"></a>
            <a name="feedback" href="[[rootPath]]feedback"></a>
            <a name="dashboard" href="[[rootPath]]dashboard"></a>
            <a name="track" href="[[rootPath]]track"></a>
            <a name="admin" href="[[rootPath]]admin"></a>
            <a name="logintab" href="[[rootPath]]login"></a>
            <a name="navbar" href="[[rootPath]]navbar"></a>
            <a name="dash" href="[[rootPath]]dash"></a>
            <a name="formdata" href="[[rootPath]]formdata"></a>
           
          </iron-selector>
      

        
       <!------------------------iron pages-------------------------->

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <student-login name="student-login"></student-login>
            <student-page name="studentpage"></student-page>
            <common-page name="common"></common-page>
            <admin-page name="admin"></admin-page>
            <register-page  name="register"></register-page>
            <home-app name="home"></home-app>
            <home-page name="homepage"></home-page>
            <about-page name="about"></about-page>
            <login-tab name="logintab"></login-tab>
            <services-page name="services"></services-page>
            <nav-page name="navbar"></nav-page>
            <ad-dash name="dash"></ad-dash>
            <form-data reg-data={{regData}} name="formdata"></form-data>
            <contact-page name="contact"></contact-page>
            <feedback-page name="feedback"></feedback-page>
            <dashboard-page  name="dashboard"></dashboard-page>
            <track-page reg-data="{{regData}}"  name="track"></track-page>
          </iron-pages>
        
    `;
  }
// properties session
  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged' //simple observer
      },
      routeData: Object,
      subroute: Object,
      
      regData:{
        type:Object,
        value:{},
      }
      
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)' // complex observer
    ];
  }

  _routePageChanged(page) {
    
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'home';
    } else if (['studentlogin', 'studentpage','navbar', 'common','admin','logintab','formdata','register','homepage','home','about', 'services','contact','feedback','dashboard','track','dash'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'common';
    }

    
    
  }

  _pageChanged(page) {
    // Import the page component on demand.
   
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'studentlogin':
        import('./student-login.js');
        break;
      case 'studentpage':
        import('./student-page.js');
        break;
        case 'homepage':
        import('./home-page.js');
        break;
        case 'navbar':
        import('./nav-page.js');
        break;
        case 'dash':
          import('./ad-dash.js');
          break;
          case 'formdata':
            import('./form-data.js');
            break;
      case 'common':
        import('./common-page.js');
        break;
      case 'register':
        import('./register-page.js');
        break;
        case 'admin':
        import('./admin-page.js');
        break;
        case 'home':
          import('./home-app.js');
          break;
          case 'about':
          import('./about-page.js');
          break;
          case 'services':
            import('./services-page.js');
            break;
            case 'contact':
            import('./contact-page.js');
            break;
            case 'logintab':
            import('./login-tab.js');
            break;
            case 'feedback':
            import('./feedback-page.js');
            break;
            case 'dashboard':
              import('./dashboard-page.js');
              break;
              case 'track':
              import('./track-page.js');
              break;
            case 'view404':
          import('./my-view404.js');
          break;
        
    }
  }
}

window.customElements.define('my-app', MyApp);
