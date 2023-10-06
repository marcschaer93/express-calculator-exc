const express = require("express");
const ExpressError = require("./expressError");
const {
  findMean,
  findMedian,
  findMode,
  convertAndValidateNums,
} = require("./helpers");

const port = 3000;
const app = express();

app.get("/mean", (req, res, next) => {
  let numsString = req.query.nums;
  if (!numsString) {
    throw new ExpressError("No nums in query!", 400);
  }

  const numsArray = convertAndValidateNums(numsString);
  if (numsArray instanceof Error) {
    throw new ExpressError(numsArray.message);
  }

  let result = {
    operation: "mean",
    value: findMean(numsArray),
  };

  return res.send(result);
});

app.get("/median", (req, res, next) => {
  let numsString = req.query.nums;

  if (!numsString) {
    throw new ExpressError("No nums in query", 400);
  }

  const numsArray = convertAndValidateNums(numsString);
  if (numsArray instanceof Error) {
    throw new Error(numsArray.message);
  }

  let result = {
    operation: "median",
    value: findMedian(numsArray),
  };

  return res.send(result);
});

app.get("/mode", (req, res) => {
  const numsString = req.query.nums;

  if (!numsString) {
    throw new ExpressError("No nums in Query", 400);
  }

  const numsArray = convertAndValidateNums(numsString);
  if (numsArray instanceof Error) {
    throw new ExpressError(numsArray.message);
  }

  result = {
    operation: "mode",
    value: findMode(numsArray),
  };

  return res.send(result);
});

// Not Found Middleware. Runs for every request.
app.use(function (req, res, next) {
  const e = new ExpressError("Page not found", 404);
  next(e);
});

// Error handler for Errors in Middleware
app.use(function (err, req, res, next) {
  let status = err.status || 500;
  let msg = err.msg;

  return res.status(status).json({ error: { msg, status } });
});

// connect to server. Always at the Bottom
app.listen(port, () => {
  console.log(`App on port: ${port}`);
});
