function logger(req, res, next) {
    console.log(req.method, req.url);
    next(); // pass control to next middleware or route
}

module.exports = logger;