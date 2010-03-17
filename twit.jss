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
