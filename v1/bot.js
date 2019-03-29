const Mastodon = require('mastodon-api');

console.log("Starting mostodon bot...");

const M = new Mastodon({
    //client_key = '5d002718b8862483d282ec6afb51b969ab93561233aac55d8b2cb8d0be97af65',
    //client_secret = 'b1a8febe030fbed844a2a1b72237a0d1c7225f661226406edc92d8b64f120717',
    access_token: '61075db71f60fe2b40fce80ef6197583742f025d217e15004b75a1e28fa9a783',
    timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
    api_url: 'https://botsin.space/api/v1/', // optional, defaults to https://mastodon.social/api/v1/
  })

  const params = {
      status : "Deven Gando"
  }

  M.post('statuses' , params ,(error, data) => {
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(data);
    }
  });