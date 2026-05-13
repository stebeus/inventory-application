class ApiError extends Error {
	constructor(statusCode = 400, message = 'Bad Request') {
		super(message);
		this.statusCode = statusCode;
		Error.captureStackTrace(this, { constructor });
	}
}

const forwardNotFoundError = (req, res, next) => {
	const notFoundError = new ApiError(404, 'Not Found');
	next(notFoundError);
};

const handleError = (error, req, res, next) => {
	if (res.headersSent) return next(error);

	const { statusCode = 500 } = error;
	const title = `${statusCode} ${error.message}`;

	console.log(error.stack);
	res.status(statusCode).render('error', { title, statusCode, error });
};

export { forwardNotFoundError, handleError };
