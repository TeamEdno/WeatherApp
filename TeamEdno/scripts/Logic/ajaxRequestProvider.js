'use strict'
 let pullRequest = (cityUrl, ajaxRequestProvider, jsonToHTML)=>{
    $.get(cityUrl,(data)=>{
      ajaxRequestProvider(data,jsonToHTML);
    });
 };