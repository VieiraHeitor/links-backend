const { verifyJwt, getTokenFromHeaders } = require("../helpers/jwt");

const chechkJwt = (req, res, next) =>{

    const {url : path } = req;

    const excludedPaths =['/auth/signin','/auth/signup','/auth/refresh']

    const isExcluded = !!excludedPaths.find( (p) => p.startsWith(path))

    if (isExcluded) return next();

    const token = getTokenFromHeaders(req.headers);
    if(!token) {
    return res.jsonUnuathorized(null, 'invalid token');
    }

    try{
        const decoded = verifyJwt(token);       
        req.accountId = decoded.id;
        next();
    }catch(error){
        return res.jsonUnuathorized(null, 'invalid token');
    }
    // console.log('decoded', newDate(decoded.exp*1000));

};

module.exports = chechkJwt