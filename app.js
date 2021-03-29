//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
const app = express();
//socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);
 
//set dynamic views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
//set public folder as static folder for static file
app.use(express.static('public'));
//set partials hbs
hbs.registerPartials(__dirname + '/views/partials');
//start route
//route untuk halaman home
app.get('/',(req, res) => {
  //render file index.hbs
  res.render('dashboard');
});
//route untuk halaman about
app.get('/about',(req, res) => {
  res.send('This is about page');
});

app.get('/tes',(req, res) => {
  //render file index.hbs
  res.render('tes-io');
});
//end route

app.listen(8000, () => {
  console.log('Server is running at port 8000');
});