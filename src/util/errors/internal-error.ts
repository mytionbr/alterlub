export class InternalError extends Error {
    constructor(
        public messege: string,
        protected code: number = 500,
        protected description?: string
    ) {
        super(messege);
        this.name = this.constructor.name;
        Error.captureStackTrace(this,this.constructor)
    }
}