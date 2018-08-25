export class User {
    constructor(
        public username: string,
        public password: string,
        public picUrl: string,
        public repeatPassword: string,
        public isAdmin?:string,
        public _id?: string,
        public _kmd?,
    ) { }
}
