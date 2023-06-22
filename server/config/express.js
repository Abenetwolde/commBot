const express = require("express");
const fileUpload = require("express-fileupload");
var jwt = require("jsonwebtoken");
const cors = require('cors');

const def = () => {
  const app = express();
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://main--jocular-choux-6a6025.netlify.app');
    next();
  });
  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  };
  
  // Enable CORS for all requests
  app.use(cors(corsOptions));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(async (req, res, next) => {
    // await sleep(9000);
    next();
  });
  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );

  return app;
};

module.exports = def;
