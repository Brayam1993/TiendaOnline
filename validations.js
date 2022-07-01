const yup = require('yup');
const ValidationError = require('./errors/validationError');

function validate(validation) {
    return (req, res, next) => {
        try {
            validation(req.body);

            next();
        } catch (error) {
            next(new ValidationError(error));
        }
    };
}

function createProductValidation(data) {
    const schema = yup.object().shape({
        title: yup.string().min(5).matches(/^[a-z]+$/).required(),
        price: yup.number().min(1).max(100).integer().required(),
        description: yup.string().min(20).required(),
        category: yup.string().min(5).required(),
        image: yup.string().min(5).required(),
        rating: yup.number().required(),
    });

    schema.validateSync(data);

}

module.exports = {
    validate,
    createProductValidation,
};
