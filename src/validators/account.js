const Joi = require ('@hapi/joi');
const {getValidatorError} = require('../helpers/validator')

const accountSignUp = (req, res, next) => {
    const {email, password, password_confirmation} = req.body;

    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z-0-9]{8,30}$')).required(),
        password_confirmation: Joi.string().valid(Joi.ref('password')).required()
    });

    const options = { abortEarly:false };
    const {error} = schema.validate({email, password, password_confirmation}, options)
    if(error) {
        const message = getValidatorError(error, 'account.signup');
        return res.jsonBadRequest(null, null, {error:message});
    }
    next();
};

module.exports = {accountSignUp};               