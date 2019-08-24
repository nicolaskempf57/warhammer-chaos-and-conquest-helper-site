export interface Article {
    readonly id: number;
    readonly title: string;
    readonly excerpt: string;
    readonly content: string;
    readonly createdOn: string;
    readonly createdBy: {};
    readonly featuredImage: Image;
}

export interface Image {
    readonly url: string;
    readonly thumbnails: Array<Thumbnail>;
}

export interface Thumbnail {
    readonly dimension: string;
    readonly height: number;
    readonly url: string;
    readonly width: number;
}
