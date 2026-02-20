const { StatusCodes } = require("http-status-codes");

const health = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Service is healthy',
        timestamp: new Date().toISOString(),
        service: 'Flights Service',
        uptime: process.uptime()
    });
}

module.exports = {
    health
}
