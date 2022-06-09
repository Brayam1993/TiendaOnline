const middleware = (error, req, res, next) => {
    let errorObject;
    
    if(typeof error.toJson === 'function') {
        errorObject = error.toJson();
    } else {
        errorObject = {
            status: 500,
            name: 'UnkwnownError',
            message: 'UnkwnownError',
        };
    }
    
    res.status(errorObject.status).json(errorObject);
};

module.exports = middleware;
