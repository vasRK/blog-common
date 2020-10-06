import { PostComment } from "./post-comment";
export class BlogPost {
    id: string;
    title: string;
    comments: Array<PostComment>;
    constructor() { }
}