import ApiClient from "../../utils/http/ApiClient";

export default class MiceGateway{
    async getAllMice(){
        let data = await ApiClient.get('/mice');
        return data.data;
    }
    async getOneMouse(id){
        let data = await ApiClient.get(`/mice/${id}`);
        return data.data;
    }
}