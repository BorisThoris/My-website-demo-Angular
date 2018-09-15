export class Cat {
    constructor(
        public name: string,
        public breed: string,
        public age: number,
        public contactNumber: number,
        public information: string,
        public imgUrl: string,
        public vaccinated: string,
        public castrated: string,
        public city: string,
        public imgUrl2?: string,
        public imgUrl3?: string,
        public imgUrl4?: string,
        public imgUrlTemp?: string,
        public _id?: string,
        public _acl?
    ) { }
}
