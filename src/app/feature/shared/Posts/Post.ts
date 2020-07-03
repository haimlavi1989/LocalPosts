import { Location } from './Location';

export class Post {
    constructor(public title: string, public photo: string, public text: string, public date: Date, public distance: number, public location: Location){}
}
