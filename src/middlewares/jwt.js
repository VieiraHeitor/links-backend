const { verifyJwt, getTokenFromHeaders } = require("../helpers/jwt");

const chechkJwt = (req, res, next) =>{

    const {url : path } = req;

    const excludedPaths =['/auth/signin','/auth/signup','/auth/refresh']

    const isExcluded = !!excludedPaths.find( (p) => p.startsWith(path))

    if (isExcluded) return next();

    const token = getTokenFromHeaders(req.headers);
    if(!token) {
    return res.jsonUnauthorized(null, 'invalid token');
    }

    try{
        const decoded = verifyJwt(token);       
        req.accountId = decoded.id;
        next();
    }catch(error){
        return res.jsonUnauthorized(null, 'invalid token');
    }

};

module.exports = chechkJwt