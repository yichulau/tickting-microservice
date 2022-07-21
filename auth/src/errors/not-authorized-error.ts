import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError{
    statusCode= 401;
    
    constructor(message: string) {
        super('Not Authorized');
    
        Object.setPrototypeOf(this, CustomError.prototype);
      }
    serializeErrors(){
        return [{ message: 'Not authorized '}];
    }
}