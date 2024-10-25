const integrationRoutes = require('./routes/integration');

// Use integration routes
app.use('/api/integration', integrationRoutes);
const invoiceRoutes = require('./routes/invoiceRoutes');
const billRoutes = require('./routes/billRoutes');

// Use invoice and bill routes
app.use('/api/invoice', invoiceRoutes);
app.use('/api/bill', billRoutes);
const invoiceRoutes = require('./routes/invoiceRoutes');
const billRoutes = require('./routes/billRoutes');

// Use invoice and bill routes
app.use('/api/invoice', invoiceRoutes);
app.use('/api/bill', billRoutes);
