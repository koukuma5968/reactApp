import axios from 'axios'

//const ARTICLE_REST_API_URL = 'http://localhost:8090/blog/api/main';
const ARTICLE_REST_API_URL = 'http://scaguih.clear-net.jp/blog/api/main';

class ArticleListService {

    getArticle(){
        return axios.get(ARTICLE_REST_API_URL);
    }
}

export default new ArticleListService();