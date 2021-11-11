import axios from 'axios'

// const ARTICLE_REST_API_URL = 'http://scaguih.clear-net.jp/chartview/api/';
const BASE_API_URL = 'http://localhost:8090/chartview/api/';

export default axios.create({
    baseURL: BASE_API_URL,
    headers: {
      "Content-type": "application/json"
    }
});
