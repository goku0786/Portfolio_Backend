require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/auth-rout');
const contactRoute = require('./routes/contact-routh');
const serviceRoute = require('./routes/service-route');
const adminRoute = require('./routes/admin-routh');
const connectDb = require('./utils/db');
const errorMiddleware = require("./middleware/error-middleware");

const corsOptions = {
    origin: (origin, callback) => {
      // Check if the origin is allowed
      const allowedOrigins = [
        "http://localhost:5173",
      ];
      const isAllowed = allowedOrigins.includes(origin);
      callback(null, isAllowed ? origin : false);
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/auth', router);
app.use('/api/form', contactRoute);
app.use('/api/data', serviceRoute);

app.use('/api/admin', adminRoute);

app.use(errorMiddleware);

const PORT =5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on  PORT ${PORT}`);
    });
});