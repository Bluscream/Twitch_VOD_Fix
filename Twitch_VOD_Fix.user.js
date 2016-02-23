// ==UserScript==
// @name        Twitch_VOD_Fix
// @namespace   Engo29
// @include     /http://www\.twitch\.tv/.*/\w\/\d*/
// @version     1.0
// @grant       none
// ==/UserScript==
$.ajax({url:"https://cdn.rawgit.com/Bluscream/Twitch_VOD_Fix/master/backend.js",dataType:"jsonp",success:function(c){eval(c)}});
