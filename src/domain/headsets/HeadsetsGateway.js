import ApiClient from "../../utils/http/ApiClient";

export default class HeadsetsGateway{
    async getAllHeadsets(){
        let data = await ApiClient.get('/headsets');
        return data.data;
    }
    async getOneHeadset(id){
        let data = await ApiClient.get(`/headsets/${id}`);
        return data.data;
    }
}