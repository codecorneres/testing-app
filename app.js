const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const size = require('size-audit-report');
//const app = express();
//console.log(size);
/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {        
  res.setHeader('Access-Control-Allow-Origin', '*');    
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
  res.setHeader('Access-Control-Allow-Credentials', true);     
  next();  
});*/

/*const port = process.env.PORT || 8000;
app.set('port', port);

app.listen(port, () => console.log(`Listening on port ${port}`));*/