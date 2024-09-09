const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(cors());
app.use(express.json());

// Replace with your actual implementation for fetching products
app.get('/api/products', (req, res) => {
  const products = []; // Fetch product data from EBMS Burundi
  res.json(products);
});

// Replace with your actual implementation for handling sales
app.post('/api/sale', (req, res) => {
  const { productId } = req.body;
  // Update inventory and sales data in EBMS Burundi
  res.json({ message: 'Sale processed successfully' });
  // Emit product update event to all connected clients
  const products = []; // Updated product data
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