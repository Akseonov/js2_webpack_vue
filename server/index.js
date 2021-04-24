const express = require('express');
const fs = require('fs');
const writer = require('./utils/writer.js');
const cartDrop = require('./services/cartDrop.js');

const server = express();
server.use(express.json());

// server.get('/', (req, res) => {
//   res.send('<a href="/hello">HELLO</a>');
// });
//
// server.get('/hello', (req, res) => {
//   res.send('<a href="/">BACK</a>');
// });

//Когда проект полностью готов
//server.use('/', express.static('server/public'));

server.get('/catalog', (req, res) => {
  fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
    if (!err) {
      // res.json(data);
      res.json(JSON.parse(data));
    }
  });
});

server.get('/cart', (req, res) => {
  fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
    if (!err) {
      // res.json(data);
      res.json(JSON.parse(data));
    }
  });
});

server.post('/cart', (req, res) => {
  fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
    if (!err) {
      let newCart = cartDrop.add(JSON.parse(data), req.body);
      writer('./server/db/cart.json', newCart)
        .then(status => {
          if (status) {
            res.json({status});
          } else {
            res.sendStatus(500);
          }
        })
    }
  });
});

server.put('/cart/:id', (req, res) => {
  fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
    if (!err) {
      let newCart = cartDrop.change(JSON.parse(data), req.params.id, req.body.amount);
      writer('./server/db/cart.json', newCart)
        .then(status => {
          if (status) {
            res.json({status});
          } else {
            res.sendStatus(500);
          }
        })
    }
  });
});

server.delete('/cart/:id', (req, res) => {
  fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
    if (!err) {
      let newCart = cartDrop.del(JSON.parse(data), req.params.id);
      writer('./server/db/cart.json', newCart)
        .then(status => {
          if (status) {
            res.json({status});
          } else {
            res.sendStatus(500);
          }
        })
    }
  });
});

server.listen(3000, () => {
  console.log('SERVER AT PORT 3000');
});