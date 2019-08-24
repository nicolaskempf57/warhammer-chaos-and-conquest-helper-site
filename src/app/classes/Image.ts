import {Image as ImageInterface} from '../interfaces/articles';
import Thumbnail from './Thumbnail';

export default class Image implements ImageInterface {
    public readonly url;
    public readonly thumbnails;
    constructor(url, thumbnails) {
        this.url = url;
        this.thumbnails = thumbnails.map(thumbnail => {
            console.log(thumbnail.dimension);
            return new Thumbnail(thumbnail.dimension, thumbnail.height, thumbnail.url, thumbnail.width);
        });
        console.log(this.thumbnails);
    }
}
