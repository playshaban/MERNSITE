const validate = (schema) => async(req,res , next)=>
{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {

        const message = "Fill input properly"
        const extraDetails = err.errors[0].message;
        const status = 422;

        const error= {
            status,
            message,
            extraDetails
        }

        console.log(error);
        next(error);
       
    }
}

module.exports = validate;