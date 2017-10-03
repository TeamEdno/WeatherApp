'use strict'
let generateCity=(()=>{
  let hash=window.location.hash.slice(1);
  let cityUrl=getCityUrl.find((x)=> x===hash);
  let request =pullRequest(url);
  return parseGetRequest(request);

})