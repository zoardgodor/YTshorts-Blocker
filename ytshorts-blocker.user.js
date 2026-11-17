// ==UserScript==
// @name        YTshorts-Blocker
// @namespace   https://github.com/zoardgodor/YTshorts-Blocker
// @icon        https://www.youtube.com/s/desktop/cb518cf3/img/favicon.ico
// @version     1.0.1
//
// @match       https://www.youtube.com/*
// @grant       none
// @run-at      document-start
//
// @description An userscript that blocks YouTube Shorts.
// ==/UserScript==



function hidebutton() {
    document.querySelectorAll("ytd-guide-entry-renderer, ytd-mini-guide-entry-renderer").forEach(element => {const title=element.querySelector(".title, [aria-label='Shorts'], [title='Shorts']");if (title?.textContent.trim()==="Shorts" || title?.getAttribute("aria-label")==="Shorts" || title?.getAttribute("title")==="Shorts") {element.style.display="none";}});}
    
function hideshorts() {
    console.log("Shorts blocker:", location.pathname);
    if (location.pathname==="/") {document.querySelectorAll('ytd-rich-section-renderer:has(a[href^="/shorts/"]), ytd-reel-shelf-renderer'
    ).forEach(element=>element.remove());}
// searchresults shorts
    if (location.pathname==="/results"){document.querySelectorAll("ytm-shorts-lockup-view-model-v2").forEach(element   =>{const container=element.closest("grid-shelf-view-model");if(container) container.remove();});}}
function start() {hidebutton();hideshorts();let observer=new MutationObserver(()=>{
    hidebutton();hideshorts();});

observer.observe(document.documentElement, {childList:true, subtree:true});}

document.addEventListener("yt-navigate-finish",()   =>{hidebutton();hideshorts();});

if (document.documentElement) {start();}
else {document.addEventListener("DOMContentLoaded", start, {once:true});}