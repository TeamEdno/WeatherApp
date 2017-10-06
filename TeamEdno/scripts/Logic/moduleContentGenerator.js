
  let hash = window.location.hash.slice(1);

  let cityUrl = getCityUrl(hash);
  let htmlParser = parseGetRequest;

  let request = pullRequest;

  request(cityUrl,htmlParser);