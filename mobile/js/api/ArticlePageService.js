import axios from 'axios'

//const ARTICLE_REST_API_URL = 'http://localhost:8090/blog/api/article?get=';
const ARTICLE_REST_API_URL = 'http://scaguih.clear-net.jp/blog/api/article?get=';

class ArticlePageService {

    getArticleHtml(page){
        console.log(page);
        return axios.get(ARTICLE_REST_API_URL + page);
    }
}

export default new ArticlePageService();