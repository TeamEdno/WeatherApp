'use strict'
let pullRequest=((url,htmlParser)=>{
    return $.get(url,(data)=>{
        htmlParser.data
    });
})