const express = require('express');
const cors = require('cors');

const { serverConfig, Logger } = require('./config');

const apiRoutes = require('./routes');

const app = express();

// CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Service is healthy',
        timestamp: new Date().toISOString(),
        service: 'Flights Service',
        uptime: process.uptime()
    });
});

app.use('/api', apiRoutes);
app.use('/flightsService/api',apiRoutes);


app.listen(serverConfig.PORT, () => {
    console.log(`Successfully started the server at port ${serverConfig.PORT}`);
    Logger.info('Successfully Started The Server', 'root', {});
}) 