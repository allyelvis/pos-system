const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  // Add more products as needed
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/sale', (req, res) => {
  const { productId } = req.body;
  // Update inventory and sales data in EBMS Burundi
  res.json({ message: 'Sale processed successfully' });
  // Emit product update event to all connected clients
  io.emit('productUpdate', products);
});

http.listen(3000, () => {
  console.log('Server running on port 3000');
});

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
