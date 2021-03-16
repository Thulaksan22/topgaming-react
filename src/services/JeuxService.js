import axios from 'axios';

const JEUX_API_BASE_URL = "http://localhost:8080/jeux";

class JeuxService {
    getJeux(){
        return axios.get(JEUX_API_BASE_URL);
    }
}

export default new JeuxService();