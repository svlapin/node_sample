'use strict';
let express = require('express');

let app = express();

app.get('/hello', (req, res) => res.send('hello'));

app.listen(process.env.PORT || 8000);
