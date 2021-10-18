import axios from 'axios'

//const ARTICLE_REST_API_URL = 'http://localhost:8090/blog/api/header';
const ARTICLE_REST_API_URL = 'http://scaguih.clear-net.jp/blog/api/header';

class HeaderListService {

    getHeaders(){
        return axios.get(ARTICLE_REST_API_URL);
    }
}

export default new HeaderListService();