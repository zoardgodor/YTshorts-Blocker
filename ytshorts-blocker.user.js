// ==UserScript==
// @name        YTshorts-Blocker
// @namespace   https://github.com/zoardgodor/YTshorts-Blocker
// @icon        https://www.youtube.com/s/desktop/cb518cf3/img/favicon.ico
// @version     1.0.0
//
// @match       https://www.youtube.com/*
// @grant       none
// @run-at      document-start
//
// @description An userscript that blocks YouTube Shorts.
// ==/UserScript==



function hidebutton() {
    document.querySelectorAll("ytd-guide-entry-renderer").forEach(element => {const title=element.querySelector(".title");if (title?.textContent.trim()==="Shorts") {element.style.display="none";}});}

function indit() {hidebutton();const observer=new MutationObserver(()=>{
    hidebutton();
});
observer.observe(document.documentElement, {childList:true, subtree:true});}

if (document.documentElement) {indit();}
else {document.addEventListener("DOMContentLoaded", indit, {once:true});}

