'use strict'
 let pullRequest = (cityUrl,funk)=>{
    $.get(cityUrl,(data)=>{
      funk(data);
    });
 };