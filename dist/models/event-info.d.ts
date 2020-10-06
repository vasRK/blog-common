import { BlogPost } from "./blog-post";
export declare class EventInfo {
    type: EventType;
    eventData: BlogPost | any;
    constructor(type: EventType, eventData: BlogPost | any);
}
export declare enum EventType {
    PostCreated = 1,
    CommentCreate = 2
}
