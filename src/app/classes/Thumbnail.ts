import {Thumbnail as ThumbnailInterface} from '../interfaces/articles';

export default class Thumbnail implements ThumbnailInterface {
    constructor(
        public readonly dimension,
        public readonly height,
        public readonly url,
        public readonly width
    ) {}
}
