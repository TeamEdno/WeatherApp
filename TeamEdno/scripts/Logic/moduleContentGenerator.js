
$(window).on('hashchange',()=>{ 
  let hash = window.location.hash.slice(1);
  
  let cities=bulgarianCities();

  let cityUrl = getCityUrl(cities,hash);

  let jsonToHTMLParser=jsonToHTML;

  let htmlParser = parseGetRequest;

  let request = pullRequest;

  request(cityUrl,htmlParser,jsonToHTMLParser);
});