const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/database');

// Middleware
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/jobportal/backend/routes', userRoutes);

// Import and use the jobName routes
const jobRoutes = require('./routes/jobNameRoute');
app.use('/jobportal/backend/routes/jobnames', jobRoutes);

// Include your job search route
const jobSearchRoute = require('./routes/jobRoute'); // Adjust the path as needed
// Use the job search route
app.use('/jobportal/backend/routes/jobs', jobSearchRoute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
