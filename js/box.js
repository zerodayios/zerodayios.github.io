/*var d = document;
var EJV1_cart_version = 1;
var EJV1_loadFlag = false;	// this defines whether or not box.js should search for ?cl

var url = "https://www.e-junkie.com/ecom/box.js";
var t=d.createElement('script');
    t.setAttribute('src', url);
    d.getElementsByTagName('head')[0].appendChild(t);*/

var d = document;
var EJV1_cart_version = 1;
var EJV1_loadFlag = false;      // this defines whether or not box.js should search for ?cl
var EJV1_box_preloaded = true;
var url = "https://www.e-junkie.com/ecom/restified/checkStatusL.php?cl="+EJV1_cart_version;
var t=d.createElement('script');
    t.setAttribute('src', url);
    d.getElementsByTagName('head')[0].appendChild(t);

