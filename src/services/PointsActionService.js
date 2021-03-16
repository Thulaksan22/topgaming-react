import axios from 'axios';

const POINTSACTION_API_BASE_URL = "http://localhost:8080/points-action";

class PointsActionService {
    getPointsAction(){
        return axios.get(POINTSACTION_API_BASE_URL);
    }
}

export default new PointsActionService()