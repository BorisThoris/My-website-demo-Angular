export class Cat {
    constructor(
        public name: string,
        public breed: string,
        public age: number,
        public contactNumber: number,
        public information: string,
        public imgUrl: string,
        public _id?: string,
        public _acl?
    ) { }
}
