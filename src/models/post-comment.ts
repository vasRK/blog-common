export class PostComment {
    id: string;
    text: string;
    postId: string;
    state:CommentState;
    constructor() {

    }
}

export enum CommentState {
    Pending = 1,
    Aprooved = 2,
    Rejected = 3
}