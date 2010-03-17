TWIT JS
=======

A basic example using javascript on the server to query Twitter Search API:

    /* twit.jss */
    
    var txt,url,req,res,twits,view,data={};
     
    txt = request.post.q || 'Home';
    url = 'http://search.twitter.com/search.json?lang=en&q='+txt;
    req = new HTTP.ClientRequest(url);
    res = req.send(true);
     
    twits = JSON.parse(res.data);
    data.query = txt;
    data.title = txt || 'Home';
    data.twits = twits.results;
    
    view  = new Template().process('twit',data);
    response.write(view);


Tools used: V8 and V8CGI, nothing else

Download it all from here: [twitjs](http://github.com/GeorgeNava/twitjs/downloads)