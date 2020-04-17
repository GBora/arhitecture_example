import logger from "../config/winstonConfig";

export class ErrorHandler extends Error {
    public statusCode: number;
    public message: string;

    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

export const handleError = (err: ErrorHandler, res: any) => {
    const { statusCode, message } = err;
    logger.error(message);
    res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
};
