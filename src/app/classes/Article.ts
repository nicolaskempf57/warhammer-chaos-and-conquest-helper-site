import {Article as ArticleInterface} from '../interfaces/articles';

export default class Article implements ArticleInterface {
    constructor(
        public readonly excerpt,
        public readonly content,
        public readonly createdBy,
        public readonly createdOn,
        public readonly featuredImage,
        public readonly id,
        public readonly title
    ) {}
}
