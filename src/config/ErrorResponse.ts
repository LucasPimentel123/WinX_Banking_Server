export default class ErrorResponse{
    status: number;
    message: string
    public constructor (status: number, message: string){
        this.status = status;
        this.message = message;
    }
}