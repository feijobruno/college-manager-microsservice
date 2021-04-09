const express = require("express");
const httpProxy = require("express-http-proxy");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

app.use(morgan("dev"));
app.use(helmet());

const options = {
  proxyReqPathResolver: (req) => {
    return req.originalUrl;
  },
};

const finishedServiceProxy = httpProxy(process.env.FINISHED_API);
const correctedServiceProxy = httpProxy(process.env.CORRECTED_API);

app.use("/apiGatewayFinished", finishedServiceProxy);
app.use("/apiGatewayCorrected", correctedServiceProxy);

app.listen(process.env.PORT, () => {
  console.log(`API Gateway started at ${process.env.PORT}`);
});