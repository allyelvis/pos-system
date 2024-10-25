const productRoutes = require('./routes/products/index');
const salesRoutes = require('./routes/sales/index');

// Use routes
app.use('/api/products', productRoutes);
app.use('/api/sales', salesRoutes);
const productRoutes = require('./routes/products/index');
const salesRoutes = require('./routes/sales/index');

// Use routes
app.use('/api/products', productRoutes);
app.use('/api/sales', salesRoutes);
const purchaseRoutes = require('./routes/purchases/index');

// Use purchase routes
app.use('/api/purchases', purchaseRoutes);
