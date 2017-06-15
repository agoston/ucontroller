//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var GAnalytics, load;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/datariot_ganalytics/packages/datariot_ganalytics.js                                   //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
(function () {                                                                                    // 1
                                                                                                  // 2
//////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                          //    // 4
// packages/datariot:ganalytics/ganalytics.js                                               //    // 5
//                                                                                          //    // 6
//////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                            //    // 8
GAnalytics = {}                                                                             // 1  // 9
                                                                                            // 2  // 10
GAnalytics.pageview = function(pageLocation) {                                              // 3  // 11
    console.log("Analytics code is not loaded yet.");                                       // 4  // 12
  };                                                                                        // 5  // 13
GAnalytics.event = function(category, action, label, value) {                               // 6  // 14
    console.log("Analytics code is not loaded yet.");                                       // 7  // 15
  };                                                                                        // 8  // 16
                                                                                            // 9  // 17
                                                                                            // 10
load = function(i,s,o,g,r,a,m) {                                                            // 11
  i['GoogleAnalyticsObject']=r;                                                             // 12
  i[r]=i[r] || function(){                                                                  // 13
    (i[r].q=i[r].q||[]).push(arguments)}                                                    // 14
  ,i[r].l=1*new Date();                                                                     // 15
    a=s.createElement(o), m=s.getElementsByTagName(o)[0];                                   // 16
    a.async=1;                                                                              // 17
    a.src=g;                                                                                // 18
    m.parentNode.insertBefore(a,m)                                                          // 19
};                                                                                          // 20
                                                                                            // 21
if(Meteor.settings && Meteor.settings.public !== undefined && Meteor.settings.public.ga !== undefined && Meteor.settings.public.ga.account !== undefined) {
                                                                                            // 23
  load(window,document,'script','//www.google-analytics.com/analytics.js','ga');            // 24
                                                                                            // 25
  var gaSettings = Meteor.settings.public.ga,                                               // 26
      gaConfig = {};                                                                        // 27
                                                                                            // 28
  // cookie settings                                                                        // 29
  if(typeof gaSettings.cookieName !== 'undefined')                                          // 30
    gaConfig.cookieName = gaSettings.cookieName;                                            // 31
                                                                                            // 32
  if(typeof gaSettings.cookieDomain !== 'undefined')                                        // 33
    gaConfig.cookieDomain = gaSettings.cookieDomain;                                        // 34
                                                                                            // 35
  if(typeof gaSettings.cookieExpires !== 'undefined')                                       // 36
    gaConfig.cookieExpires = gaSettings.cookieExpires;                                      // 37
                                                                                            // 38
  // if gaConfig is still empty, default it to 'auto'                                       // 39
  if(Object.keys(gaConfig).length === 0)                                                    // 40
    gaConfig = 'auto';                                                                      // 41
                                                                                            // 42
  ga('create', gaSettings.account, gaConfig);                                               // 43
                                                                                            // 44
  if (gaSettings.trackInterests)                                                            // 45
    ga('require', 'displayfeatures');                                                       // 46
                                                                                            // 47
  if (gaSettings.trackInPage)                                                               // 48
    ga('require', 'linkid', 'linkid.js');                                                   // 49
                                                                                            // 50
  GAnalytics.pageview = function(pageLocation) {                                            // 51
    if(!!gaSettings.debug)                                                                  // 52
      console.log("Logging pageview: "+pageLocation)                                        // 53
    if(!pageLocation) {                                                                     // 54
      pageLocation = window.location.pathname;                                              // 55
    }                                                                                       // 56
    ga('send', 'pageview', pageLocation);                                                   // 57
  }                                                                                         // 58
                                                                                            // 59
  GAnalytics.event = function(category, action, label, value) {                             // 60
    if(!!gaSettings.debug)                                                                  // 61
      console.log("Logging event: "+category+" | "+ action + " | " + label + " | " + value) // 62
    ga('send', 'event', category, action, label, value);                                    // 63
  }                                                                                         // 64
} else {                                                                                    // 65
  console.log("public.ga.account has not been set in your settings.json file.");            // 66
}                                                                                           // 67
                                                                                            // 68
                                                                                            // 69
                                                                                            // 70
                                                                                            // 71
//////////////////////////////////////////////////////////////////////////////////////////////    // 80
                                                                                                  // 81
}).call(this);                                                                                    // 82
                                                                                                  // 83
////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['datariot:ganalytics'] = {
  GAnalytics: GAnalytics
};

})();
