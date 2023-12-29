const errorMiddleware = (err,req,res,next) =>
{
    const message = err.message || "Error From Backend";
    const status = err.status || 500;
    const extraDetails = err.extraDetails || "Error From Backend";

    return res.status(status).json({message, extraDetails});
}

module.exports = errorMiddleware;