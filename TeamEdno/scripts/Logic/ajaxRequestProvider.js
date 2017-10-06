'use strict'
 let pullRequest = (cityUrl,jsonToHTML,createHTML)=>{
    $.get(cityUrl,(data)=>{
      jsonToHTML(data,createHTML);
    });
 };