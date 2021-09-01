const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

async function wait (ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms)
    });
}
   
app.use(express.static('public'));

app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/contact_us', function(req, res) {   
    res.sendFile(path.join(__dirname, 'public/contact_us.html'));
});

app.get('/loading', async function (req, res) {
    await wait(5 * 1000);
    res.redirect('/contact_us');
});

app.listen(port);
console.log('Server started at http://localhost:' + port);