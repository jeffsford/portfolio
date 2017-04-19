const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', function(request, response){
  response.sendFile('public/index.html', {root: '.'});
});


app.get('/bats', function(request, response){
  response.sendFile('public/bat-country.html', {root: '.'});
});

app.use(express.static('./public'));

app.get('/*', function(request, response){
  response.status(404).sendFile('public/404.html', {root: '.'});
});

app.listen(port, function(){
  console.log(`our server is running on port: ${port}`);
});
