const serviceRecordRoutes = require('./routes/service-records/index');

// Use service record routes
app.use('/api/service-records', serviceRecordRoutes);
