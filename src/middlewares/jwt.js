const { verifyJwt } = require("../helpers/jwt");

const chechkJwt = (req, res, next) =>{

    let token = req.headers['authorization'];
    token = token ? token.slice(7, token.length) : null;
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