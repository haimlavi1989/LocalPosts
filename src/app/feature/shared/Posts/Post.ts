import { Location } from './Location';

export class Post {
    constructor(
        public description: string,
        public imageCover: string,
        public images: [],
        public date: Date,
        public location: { coordinates: [number, number]},
        public publishDate: Date,
        public subject: string,
        public distance: string, 
        public id: string){}
}
