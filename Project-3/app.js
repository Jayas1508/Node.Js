const express = require('express'); 
const bodyParser = require('body-parser');
const path = require('path');
const port = 5000;


const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('dashboard');
});
app.get('/tables', (req, res) => {
  res.render('tables');
});
app.get('/profile', (req, res) => {
  res.render('profile');
});
app.get('/billing', (req, res) => {
  res.render('billing');
});
app.get('/virtual-reality', (req, res) => {
  res.render('virtual-reality');
});
app.get('/notifications', (req, res) => {
  res.render('notifications');
});
app.get('/sign-in', (req, res) => {
  res.render('sign-in');
});
app.get('/sign-up', (req, res) => {
  res.render('sign-up');
});
app.get('/rtl', (req, res) => {
  res.render('rtl');
});




app.listen(port, () => {
    console.log(`Server is running on port http://localhost:5000}`)
});
