import { Request, Response, NextFunction} from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { CustomErr } from '../errors/custom-erros';

export const errorHandler = (err: Error, req : Request, res: Response, next: NextFunction) => {

    if(err instanceof CustomErr){
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    res.status(400).send({
        errors: [{ message: 'Something went wrong' }]
    });
};