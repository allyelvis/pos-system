const orderRoutes = require('./routes/orders/index');

// Use kitchen order routes
app.use('/api/orders', orderRoutes);
